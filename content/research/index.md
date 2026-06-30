---
title: Research
date: 2026-05-23

type: landing

sections:
  - block: markdown
    content:
      title: Research
      subtitle: ''
      text: |
        <section class="research-page-section">
          <div class="research-projects-section">
            <h2>Projects</h2>
            <div class="research-project-list">
              <article class="research-project-item">
                <span class="research-project-number">01</span>
                <div>
                  <h3>Autonomous Real-time Onboard Precise Orbit Determination and Time Synchronization for Lunar Navigation Satellites.</h3>
                  <p><strong>Funded by:</strong> The Research Grants Council (RGC) of Hong Kong.</p>
                  <p><strong>Period:</strong> 2027-2029. <strong>Role:</strong> PI.</p>
                </div>
              </article>
              <article class="research-project-item">
                <span class="research-project-number">02</span>
                <div>
                  <h3>Autonomous Real-Time Cooperative Localization of UAV Formations Using Low-cost GNSS and MEMS IMU with Ionospheric-Constrained Quadratic Programming.</h3>
                  <p><strong>Funded by:</strong> The Research Grants Council (RGC) of Hong Kong.</p>
                  <p><strong>Period:</strong> 2026-2028. <strong>Role:</strong> PI.</p>
                </div>
              </article>
              <article class="research-project-item">
                <span class="research-project-number">03</span>
                <div>
                  <h3>GNSS Positioning Infrastructure for the Greater Bay Area Low-Altitude Economy.</h3>
                  <p><strong>Funded by:</strong> The Hong Kong Polytechnic University.</p>
                  <p><strong>Period:</strong> 2026-2028. <strong>Role:</strong> PI.</p>
                </div>
              </article>
              <article class="research-project-item">
                <span class="research-project-number">04</span>
                <div>
                  <h3>Physically Constrained Quadratic Programming for GNSS Precise Positioning in Degraded Environments.</h3>
                  <p><strong>Funded by:</strong> The Hong Kong Polytechnic University.</p>
                  <p><strong>Period:</strong> 2026-2029. <strong>Role:</strong> PI.</p>
                </div>
              </article>
              <article class="research-project-item">
                <span class="research-project-number">05</span>
                <div>
                  <h3>Real-time precise orbit determination and time synchronization of distributed satellite systems of low-earth orbit (LEO) based on satellite-based PPP services.</h3>
                  <p><strong>Funded by:</strong> The National Natural Science Foundation of China.</p>
                  <p><strong>Period:</strong> 2025-2027. <strong>Role:</strong> PI.</p>
                </div>
              </article>
              <article class="research-project-item">
                <span class="research-project-number">06</span>
                <div>
                  <h3>Precise Attitude and Orbit Determination of Low-cost Small LEO Satellites.</h3>
                  <p><strong>Funded by:</strong> The Hong Kong Polytechnic University.</p>
                  <p><strong>Period:</strong> 2023-2026. <strong>Role:</strong> PI.</p>
                </div>
              </article>
            </div>
          </div>

          <section class="research-topics" aria-labelledby="research-topics-heading">
            <h2 id="research-topics-heading">Research Directions</h2>
            <article class="research-topic">
              <h3>1. Intelligent Computational Geodesy for GNSS Data Processing and High-Precision Positioning</h3>
              <img src="../media/research-directions-new/01-multi-domain-gnss-positioning.png" alt="GNSS satellites supporting ground surveying, low-altitude UAV positioning, and maritime navigation">
              <p>We develop advanced data processing methods for high-precision positioning using multi-constellation GNSS, supporting applications from land surveying and offshore operations to smart-city infrastructure and low-altitude platforms such as UAVs and autonomous systems. A particular focus is on challenging environments in low-latitude regions, such as Hong Kong and the Greater Bay Area, where strong ionospheric activity significantly degrades positioning accuracy and reliability.</p>
              <p>This research is built upon our Intelligent Computational Geodesy framework, which integrates rigorous geodetic modeling with modern computational and data-driven techniques. We focus on key challenges including integer ambiguity resolution, atmospheric delay modeling (ionosphere and troposphere), and high-dimensional parameter estimation. By combining physics-based models with adaptive learning strategies, we aim to improve model fidelity, convergence speed, and robustness under complex and dynamic conditions, enabling scalable and reliable high-precision GNSS positioning.</p>
            </article>
            <article class="research-topic">
              <h3>2. LEO Satellite Orbit Determination and LEO-Enabled Positioning, Navigation and Timing</h3>
              <img src="../media/research-directions-new/02-leo-orbit-determination-pnt.png" alt="GNSS and LEO satellites providing precise orbit determination and LEO-based PNT services">
              <p>We develop real-time orbit determination methods for LEO satellites using GNSS observations, enabling autonomous onboard navigation without continuous ground support. These capabilities are increasingly important for modern space missions, including scientific satellites and large-scale commercial constellations.</p>
              <p>Beyond orbit determination, we investigate the use of LEO satellites as a new layer of PNT infrastructure. Due to their lower altitude, LEO satellites provide stronger signal power and rapidly changing geometry, offering improved positioning performance in environments where traditional GNSS is limited. Within the Intelligent Computational Geodesy framework, we develop scalable estimation algorithms and system designs that support a wide range of payload qualities, from low-cost receivers to high-end geodetic instruments. This work contributes to the emerging paradigm of multi-layer PNT systems that integrate GNSS and LEO constellations.</p>
            </article>
            <article class="research-topic">
              <h3>3. Lunar and Deep-Space Navigation and Space Geodesy</h3>
              <img src="../media/research-directions-new/03-lunar-deep-space-navigation.png" alt="Lunar navigation, orbit design, reference frames, and surface positioning">
              <p>We develop navigation systems and geodetic foundations for the Moon and deep-space environments, supporting future exploration and sustained operations beyond Earth. These environments present unique challenges, including highly irregular gravity fields, extreme terrain conditions, and intermittent visibility of Earth-based navigation signals.</p>
              <p>Our work spans the full system chain, from lunar satellite constellation design and orbit determination to time synchronization and surface navigation. We focus on optimizing system architectures to balance global coverage, robustness, and cost, while developing multi-sensor navigation algorithms for reliable positioning on the lunar surface. Within the broader scope of space geodesy, we also contribute to the establishment of reference frames and timing systems for cislunar space, enabling consistent and interoperable navigation infrastructure in collaboration with international space agencies.</p>
            </article>
            <article class="research-topic">
              <h3>4. Resilient and Alternative PNT: Toward a Layered and Trustworthy Architecture</h3>
              <img src="../media/research-directions-new/04-resilient-alternative-pnt.png" alt="Resilient PNT through GNSS, inertial sensors, LiDAR, quantum sensing, and integrity monitoring">
              <p>We develop resilient PNT solutions for environments where GNSS signals are unavailable, degraded, or intentionally disrupted, such as urban canyons, indoor environments, and contested scenarios. Our goal is to enable reliable and trustworthy navigation for safety-critical and autonomous systems under all operating conditions.</p>
              <p>Rather than relying on a single technology, we investigate a layered PNT architecture that integrates multiple complementary sources of information. This includes tightly coupled multi-sensor fusion, GNSS integrity monitoring with real-time fault detection and protection levels, and emerging quantum sensing technologies for inertial navigation and timing. Within the ICG framework, we study how to optimally combine heterogeneous measurements and dynamically assess their reliability, forming a robust and adaptive navigation system that can maintain performance even in GNSS-denied environments.</p>
            </article>
          </section>
        </section>
    design:
      columns: '1'
---
