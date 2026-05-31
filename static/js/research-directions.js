(function () {
  "use strict";

  var cards = Array.prototype.slice.call(document.querySelectorAll("[data-research-card]"));
  if (!cards.length) {
    return;
  }

  var track = document.querySelector("[data-research-track]");
  var progress = document.querySelector("[data-research-progress]");
  var modal = document.querySelector("[data-research-modal]");
  var modalTitle = document.querySelector("[data-research-modal-title]");
  var modalDetail = document.querySelector("[data-research-modal-detail]");
  var modalImage = document.querySelector("[data-research-modal-image]");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var activeIndex = 0;
  var timer = null;

  if (modal && modal.parentNode !== document.body) {
    document.body.appendChild(modal);
  }

  function setActive(index, shouldScroll) {
    activeIndex = (index + cards.length) % cards.length;
    cards.forEach(function (card, cardIndex) {
      card.classList.toggle("is-active", cardIndex === activeIndex);
    });

    if (progress) {
      progress.style.transform = "translateX(" + (activeIndex * 100) + "%)";
    }

    if (shouldScroll && track && !reduceMotion) {
      cards[activeIndex].scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  }

  function startPlayback() {
    if (reduceMotion || timer || (modal && modal.classList.contains("is-open"))) {
      return;
    }
    timer = window.setInterval(function () {
      setActive(activeIndex + 1, false);
    }, 3600);
  }

  function stopPlayback() {
    if (timer) {
      window.clearInterval(timer);
      timer = null;
    }
  }

  function openModal(card) {
    if (!modal || !modalTitle || !modalDetail) {
      return;
    }

    stopPlayback();
    modalTitle.textContent = card.getAttribute("data-title") || "";
    modalDetail.textContent = card.getAttribute("data-detail") || "";
    if (modalImage) {
      modalImage.src = card.getAttribute("data-image") || "";
      modalImage.alt = card.querySelector("img") ? card.querySelector("img").alt : "";
    }
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.documentElement.classList.add("research-modal-lock");

    var closeButton = modal.querySelector(".research-direction-modal-close");
    if (closeButton) {
      closeButton.focus();
    }
  }

  function closeModal() {
    if (!modal) {
      return;
    }
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.documentElement.classList.remove("research-modal-lock");
    startPlayback();
  }

  cards.forEach(function (card, index) {
    card.addEventListener("mouseenter", function () {
      stopPlayback();
      setActive(index, false);
    });
    card.addEventListener("focus", function () {
      stopPlayback();
      setActive(index, false);
    });
    card.addEventListener("mouseleave", startPlayback);
    card.addEventListener("blur", startPlayback);
    card.addEventListener("click", function () {
      setActive(index, false);
      openModal(card);
    });
  });

  document.addEventListener("click", function (event) {
    if (event.target && event.target.matches("[data-research-close]")) {
      closeModal();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeModal();
    }
  });

  setActive(0, false);
  startPlayback();
}());
