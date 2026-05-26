(function () {
  "use strict";

  var canvas = document.querySelector(".lab-home-network");
  var cover = document.querySelector(".lab-home-cover");
  if (!canvas || !cover) {
    return;
  }

  var context = canvas.getContext("2d");
  if (!context) {
    return;
  }

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var nodes = [];
  var width = 0;
  var height = 0;
  var ratio = 1;
  var frame = null;
  var pointer = { x: -1000, y: -1000, active: false };
  var connectionDistance = 168;
  var pointerDistance = 190;

  function resize() {
    var rect = cover.getBoundingClientRect();
    width = rect.width;
    height = rect.height;
    ratio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    seedNodes();
    draw();
  }

  function seedNodes() {
    var targetCount = Math.max(28, Math.min(65, Math.round((width * height) / 26000)));
    nodes = [];

    for (var index = 0; index < targetCount; index += 1) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        radius: Math.random() * 1.4 + 0.9,
        phase: Math.random() * Math.PI * 2
      });
    }
  }

  function distance(first, second) {
    var dx = first.x - second.x;
    var dy = first.y - second.y;
    return Math.sqrt(dx * dx + dy * dy);
  }

  function update(timestamp) {
    for (var index = 0; index < nodes.length; index += 1) {
      var node = nodes[index];
      node.x += node.vx;
      node.y += node.vy;
      node.phase += 0.012;

      if (node.x < -12 || node.x > width + 12) {
        node.vx *= -1;
      }
      if (node.y < -12 || node.y > height + 12) {
        node.vy *= -1;
      }

      if (pointer.active) {
        var dx = pointer.x - node.x;
        var dy = pointer.y - node.y;
        var proximity = Math.sqrt(dx * dx + dy * dy);
        if (proximity < pointerDistance && proximity > 0) {
          var pull = (1 - proximity / pointerDistance) * 0.013;
          node.x += dx * pull;
          node.y += dy * pull;
        }
      }
    }
  }

  function draw() {
    context.clearRect(0, 0, width, height);

    for (var first = 0; first < nodes.length; first += 1) {
      for (var second = first + 1; second < nodes.length; second += 1) {
        var separation = distance(nodes[first], nodes[second]);
        if (separation < connectionDistance) {
          var alpha = (1 - separation / connectionDistance) * 0.34;
          context.strokeStyle = "rgba(102, 194, 255, " + alpha.toFixed(3) + ")";
          context.lineWidth = 0.75;
          context.beginPath();
          context.moveTo(nodes[first].x, nodes[first].y);
          context.lineTo(nodes[second].x, nodes[second].y);
          context.stroke();
        }
      }
    }

    if (pointer.active) {
      for (var index = 0; index < nodes.length; index += 1) {
        var pointerGap = distance(nodes[index], pointer);
        if (pointerGap < pointerDistance) {
          var glow = (1 - pointerGap / pointerDistance) * 0.54;
          context.strokeStyle = "rgba(139, 216, 255, " + glow.toFixed(3) + ")";
          context.lineWidth = 0.9;
          context.beginPath();
          context.moveTo(nodes[index].x, nodes[index].y);
          context.lineTo(pointer.x, pointer.y);
          context.stroke();
        }
      }
    }

    for (var nodeIndex = 0; nodeIndex < nodes.length; nodeIndex += 1) {
      var point = nodes[nodeIndex];
      var pulse = point.radius + Math.sin(point.phase) * 0.32;
      context.fillStyle = "rgba(197, 232, 255, 0.86)";
      context.beginPath();
      context.arc(point.x, point.y, pulse, 0, Math.PI * 2);
      context.fill();
    }
  }

  function animate(timestamp) {
    update(timestamp);
    draw();
    frame = window.requestAnimationFrame(animate);
  }

  function setPointer(event) {
    var bounds = cover.getBoundingClientRect();
    pointer.x = event.clientX - bounds.left;
    pointer.y = event.clientY - bounds.top;
    pointer.active = true;
    if (reduceMotion) {
      draw();
    }
  }

  function clearPointer() {
    pointer.active = false;
    if (reduceMotion) {
      draw();
    }
  }

  window.addEventListener("resize", resize, { passive: true });
  cover.addEventListener("pointermove", setPointer, { passive: true });
  cover.addEventListener("pointerleave", clearPointer, { passive: true });
  cover.addEventListener("pointercancel", clearPointer, { passive: true });

  resize();
  if (!reduceMotion) {
    frame = window.requestAnimationFrame(animate);
  }

  document.addEventListener("visibilitychange", function () {
    if (reduceMotion) {
      return;
    }
    if (document.hidden && frame) {
      window.cancelAnimationFrame(frame);
      frame = null;
    } else if (!document.hidden && !frame) {
      frame = window.requestAnimationFrame(animate);
    }
  });
}());
