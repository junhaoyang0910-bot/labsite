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
              <button class="research-direction-card is-active" type="button" data-research-card data-image="media/research-directions/01_Multi_GNSS_Precise_Positioning.png" data-title="Geodetic Data Processing and Multi-Domain High-Precision GNSS Positioning" data-detail="We develop unified geodetic data processing theory and algorithms for high-precision multi-GNSS positioning, with a focus on rigorous functional and stochastic modeling and robust, reliable integer ambiguity resolution (IAR). A central theme is the precise characterization and mitigation of ionospheric and tropospheric delays, which are the dominant error sources limiting positioning accuracy and convergence speed. On the application side, our algorithms serve both ground-based users across land surveying, offshore navigation, and smart-city infrastructure, and low-altitude aerial platforms such as UAVs and autonomous vehicles, including communication-independent solutions that do not rely on dense ground networks. This work supports Hong Kong and the Greater Bay Area's high-precision positioning infrastructure and the rapidly growing low-altitude economy.">
                <img class="research-direction-panel-image" src="media/research-directions/01_Multi_GNSS_Precise_Positioning.png" alt="Multi-GNSS Precise Positioning">
                <span class="research-direction-open">View Details</span>
              </button>
              <button class="research-direction-card" type="button" data-research-card data-image="media/research-directions/02_LEO_Orbit_Determination_LEO_PNT.png" data-title="Real-Time Precise Orbit Determination and LEO-Based Positioning, Navigation and Timing" data-detail="We develop GNSS-based real-time precise orbit determination (POD) algorithms for LEO satellites and integrate them into autonomous onboard systems capable of operating without continuous ground-station contact. Our algorithms are designed to be broadly compatible, spanning low-cost single-frequency receivers to high-grade multi-frequency payloads, and have been validated on scientific nanosatellites and commercial CubeSat platforms. Beyond orbit determination, we investigate how LEO satellite signals can themselves serve as a PNT source, exploiting the stronger signal power and faster geometry change of LEO constellations to augment or replace conventional GNSS in demanding environments. This research contributes to both the scientific community and the emerging commercial LEO-PNT infrastructure.">
                <img class="research-direction-panel-image" src="media/research-directions/02_LEO_Orbit_Determination_LEO_PNT.png" alt="LEO Orbit Determination and LEO-PNT">
                <span class="research-direction-open">View Details</span>
              </button>
              <button class="research-direction-card" type="button" data-research-card data-image="media/research-directions/03_Lunar_Deep_Space_Navigation.png" data-title="Lunar and Deep-Space PNT and Space Geodesy" data-detail="We design lunar navigation satellite constellations and develop algorithms for autonomous orbit determination, time synchronization, and surface navigation tailored to the unique challenges of the lunar environment, including extreme topography, complex gravity fields, and limited Earth visibility. Our work spans the full system chain: from constellation architecture optimization balancing global coverage, fault tolerance, and cost, to user-segment navigation algorithms that integrate multiple sensor modalities for reliable positioning on the lunar surface. More broadly, we contribute to establishing the geodetic foundations required for sustained exploration, including cislunar reference frames and timing standards. This research is conducted in close collaboration with ESA, JAXA, NASA, and the Chinese Academy of Sciences.">
                <img class="research-direction-panel-image" src="media/research-directions/03_Lunar_Deep_Space_Navigation.png" alt="Lunar and Deep-Space Navigation">
                <span class="research-direction-open">View Details</span>
              </button>
              <button class="research-direction-card" type="button" data-research-card data-image="media/research-directions/04_Resilient_Alternative_PNT.png" data-title="Resilient and Alternative PNT: Quantum Sensing, Multi-Sensor Fusion, and GNSS Integrity" data-detail="Beyond conventional GNSS, we explore resilient PNT solutions for environments where satellite signals are unavailable, jammed, or spoofed. Our work encompasses quantum-enabled inertial navigation and timekeeping, GNSS time and frequency transfer with applications to optical clock comparisons and geopotential determination, and tightly coupled multi-sensor fusion for robust navigation in urban canyons and GNSS-denied environments. We also develop integrity monitoring algorithms providing real-time fault detection and protection levels for safety-critical autonomous systems. This direction bridges fundamental quantum metrology, geodetic theory, and applied navigation engineering, targeting a layered and trustworthy PNT architecture for the future.">
                <img class="research-direction-panel-image" src="media/research-directions/04_Resilient_Alternative_PNT.png" alt="Resilient and Alternative PNT">
                <span class="research-direction-open">View Details</span>
              </button>
            </div>
          </div>
          <div class="research-direction-modal" data-research-modal aria-hidden="true">
            <div class="research-direction-modal-backdrop" data-research-close></div>
            <article class="research-direction-modal-panel" role="dialog" aria-modal="true" aria-labelledby="research-modal-title">
              <button class="research-direction-modal-close" type="button" data-research-close aria-label="Close research direction details">&times;</button>
              <p class="research-direction-modal-kicker">Research Direction</p>
              <img class="research-direction-modal-image" data-research-modal-image alt="">
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
