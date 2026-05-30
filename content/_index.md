---
# Leave the homepage title empty to use the site title
title:
date: 2022-10-24
type: landing

sections:
  - block: markdown
    content:
      title: ''
      subtitle: ''
      text: |
        <div class="lab-home-cover">
          <canvas class="lab-home-network" aria-hidden="true"></canvas>
          <div class="lab-home-content">
            <p class="lab-home-kicker">Welcome to</p>
            <h1 class="lab-home-title">
              <span>Intelligent Computational</span>
              <span>Geodesy and PNT (ICG-PNT) Lab</span>
            </h1>
            <p class="lab-home-affiliation">The Hong Kong Polytechnic University</p>
            <p class="lab-home-department">Department of Land Surveying and Geo-Informatics</p>
            <a class="lab-home-scroll" href="#about-us" aria-label="Explore the site">
              Explore Our Work
              <i class="fas fa-chevron-down" aria-hidden="true"></i>
            </a>
          </div>
        </div>
    design:
      columns: '1'
      css_class: lab-home-hero
      spacing:
        padding: ['0', '0', '0', '0']

  - block: markdown
    content:
      title: ''
      subtitle: ''
      text: |
        <section id="about-us" class="home-about-section">
          <h2>About Us</h2>
          <p class="home-about-text">
            The Intelligent Computational Geodesy and PNT (ICG-PNT) Lab develops rigorous theory and algorithms for <strong class="about-highlight">high-precision Positioning, Navigation, and Timing (PNT)</strong> across the full spatial hierarchy, spanning ground and low-altitude applications, LEO satellite orbit determination, and lunar and deep-space navigation. Our research is grounded in <strong class="about-highlight">geodetic estimation theory</strong>, with a focus on <strong class="about-highlight">robust integer ambiguity resolution (IAR)</strong> and <strong class="about-highlight">precise atmospheric modeling</strong>, augmented by <strong class="about-highlight">artificial intelligence</strong> for smarter and more adaptive PNT systems. Our work is adopted by industry, space agencies, and national infrastructure programs worldwide.
          </p>
          <div class="research-directions-showcase" aria-label="Research directions">
            <div class="research-directions-heading">
              <p>Research Directions</p>
              <span>Click any direction to enlarge the details</span>
            </div>
            <div class="research-directions-track" data-research-track>
              <button class="research-direction-card is-active" type="button" data-research-card data-title="Geodetic Data Processing and Multi-Domain High-Precision GNSS Positioning" data-detail="We develop unified geodetic data processing theory and algorithms for high-precision multi-GNSS positioning, with a focus on rigorous functional and stochastic modeling and robust, reliable integer ambiguity resolution (IAR). A central theme is the precise characterization and mitigation of ionospheric and tropospheric delays, which are the dominant error sources limiting positioning accuracy and convergence speed. On the application side, our algorithms serve both ground-based users across land surveying, offshore navigation, and smart-city infrastructure, and low-altitude aerial platforms such as UAVs and autonomous vehicles, including communication-independent solutions that do not rely on dense ground networks. This work supports Hong Kong and the Greater Bay Area's high-precision positioning infrastructure and the rapidly growing low-altitude economy.">
                <span class="research-direction-orb"><i class="fas fa-location-arrow" aria-hidden="true"></i></span>
                <span class="research-direction-index">01</span>
                <span class="research-direction-title">Geodetic Data Processing and Multi-Domain High-Precision GNSS Positioning</span>
                <span class="research-direction-summary">Unified multi-GNSS positioning algorithms for ground, offshore, smart-city, UAV, and low-altitude applications.</span>
              </button>
              <button class="research-direction-card" type="button" data-research-card data-title="Real-Time Precise Orbit Determination and LEO-Based Positioning, Navigation and Timing" data-detail="We develop GNSS-based real-time precise orbit determination (POD) algorithms for LEO satellites and integrate them into autonomous onboard systems capable of operating without continuous ground-station contact. Our algorithms are designed to be broadly compatible, spanning low-cost single-frequency receivers to high-grade multi-frequency payloads, and have been validated on scientific nanosatellites and commercial CubeSat platforms. Beyond orbit determination, we investigate how LEO satellite signals can themselves serve as a PNT source, exploiting the stronger signal power and faster geometry change of LEO constellations to augment or replace conventional GNSS in demanding environments. This research contributes to both the scientific community and the emerging commercial LEO-PNT infrastructure.">
                <span class="research-direction-orb"><i class="fas fa-satellite" aria-hidden="true"></i></span>
                <span class="research-direction-index">02</span>
                <span class="research-direction-title">Real-Time Precise Orbit Determination and LEO-Based PNT</span>
                <span class="research-direction-summary">Autonomous LEO orbit determination and LEO-PNT for scientific satellites, CubeSats, and future commercial infrastructure.</span>
              </button>
              <button class="research-direction-card" type="button" data-research-card data-title="Lunar and Deep-Space PNT and Space Geodesy" data-detail="We design lunar navigation satellite constellations and develop algorithms for autonomous orbit determination, time synchronization, and surface navigation tailored to the unique challenges of the lunar environment, including extreme topography, complex gravity fields, and limited Earth visibility. Our work spans the full system chain: from constellation architecture optimization balancing global coverage, fault tolerance, and cost, to user-segment navigation algorithms that integrate multiple sensor modalities for reliable positioning on the lunar surface. More broadly, we contribute to establishing the geodetic foundations required for sustained exploration, including cislunar reference frames and timing standards. This research is conducted in close collaboration with ESA, JAXA, NASA, and the Chinese Academy of Sciences.">
                <span class="research-direction-orb"><i class="fas fa-moon" aria-hidden="true"></i></span>
                <span class="research-direction-index">03</span>
                <span class="research-direction-title">Lunar and Deep-Space PNT and Space Geodesy</span>
                <span class="research-direction-summary">Navigation constellation design, orbit determination, timing, and surface navigation for lunar and deep-space missions.</span>
              </button>
              <button class="research-direction-card" type="button" data-research-card data-title="Resilient and Alternative PNT: Quantum Sensing, Multi-Sensor Fusion, and GNSS Integrity" data-detail="Beyond conventional GNSS, we explore resilient PNT solutions for environments where satellite signals are unavailable, jammed, or spoofed. Our work encompasses quantum-enabled inertial navigation and timekeeping, GNSS time and frequency transfer with applications to optical clock comparisons and geopotential determination, and tightly coupled multi-sensor fusion for robust navigation in urban canyons and GNSS-denied environments. We also develop integrity monitoring algorithms providing real-time fault detection and protection levels for safety-critical autonomous systems. This direction bridges fundamental quantum metrology, geodetic theory, and applied navigation engineering, targeting a layered and trustworthy PNT architecture for the future.">
                <span class="research-direction-orb"><i class="fas fa-shield-alt" aria-hidden="true"></i></span>
                <span class="research-direction-index">04</span>
                <span class="research-direction-title">Resilient and Alternative PNT</span>
                <span class="research-direction-summary">Quantum sensing, multi-sensor fusion, time transfer, and GNSS integrity for robust navigation in degraded environments.</span>
              </button>
            </div>
            <div class="research-directions-progress" aria-hidden="true"><span data-research-progress></span></div>
          </div>
          <div class="research-direction-modal" data-research-modal aria-hidden="true">
            <div class="research-direction-modal-backdrop" data-research-close></div>
            <article class="research-direction-modal-panel" role="dialog" aria-modal="true" aria-labelledby="research-modal-title">
              <button class="research-direction-modal-close" type="button" data-research-close aria-label="Close research direction details">&times;</button>
              <p class="research-direction-modal-kicker">Research Direction</p>
              <h3 id="research-modal-title" data-research-modal-title></h3>
              <p data-research-modal-detail></p>
            </article>
          </div>
        </section>
    design:
      columns: '1'
      css_class: home-about-block
      spacing:
        padding: ['70px', '0', '55px', '0']
  
  - block: collection
    content:
      title: Latest News
      subtitle:
      text:
      count: 5
      filters:
        author: ''
        category: ''
        exclude_featured: false
        publication_type: ''
        tag: ''
      offset: 0
      order: desc
      page_type: post
    design:
      view: card
      columns: '1'
  
  - block: collection
    content:
      title: Latest Publications
      text: ""
      count: 5
      filters:
        folders:
          - publication
        publication_type: 'article-journal'
    design:
      view: citation
      columns: '1'

  - block: markdown
    content:
      title:
      subtitle:
      text: |
        {{% cta cta_link="./people/" cta_text="Meet the team →" %}}
    design:
      columns: '1'
---
