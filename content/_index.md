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
            <p class="lab-home-department">Department of Land Surveying and Geospatial Science (LSGS)</p>
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
          <p class="home-about-text">The Intelligent Computational Geodesy and PNT (ICG-PNT) Lab develops advanced theories and algorithms for high-precision Positioning, Navigation, and Timing (PNT), rooted in a strong foundation of Global Navigation Satellite Systems (GNSS). Our research addresses the critical challenge of achieving reliable, high-accuracy positioning across diverse environments, spanning terrestrial and urban areas, satellite orbits, and deep space.</p>
          <p class="home-about-text">At the core of our lab is Intelligent Computational Geodesy, a methodological framework that integrates rigorous geodetic modeling with modern computational and data-driven techniques. We focus on key challenges such as integer ambiguity resolution (IAR), atmospheric error modeling, and high-dimensional parameter estimation, while incorporating artificial intelligence to enhance model adaptivity, robustness, and real-time performance.</p>
          <p class="home-about-text">This unified approach is applied consistently across the full spatial hierarchy, extending from ground and low-altitude platforms to LEO satellite systems, and further to lunar and deep-space navigation. Concurrently, it enables resilient and alternative PNT solutions in GNSS-challenged environments through multi-sensor fusion, integrity monitoring, and emerging quantum technologies.</p>
        </section>
    design:
      columns: '1'
      css_class: home-about-block
      spacing:
        padding: ['60px', '0', '35px', '0']
  
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
      css_class: home-latest-news
      spacing:
        padding: ['35px', '0', '20px', '0']
  
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
      css_class: home-latest-publications
      spacing:
        padding: ['25px', '0', '18px', '0']

  - block: markdown
    content:
      title:
      subtitle:
      text: |
        {{% cta cta_link="./people/" cta_text="Meet the team →" %}}
    design:
      columns: '1'
      css_class: home-team-cta
      spacing:
        padding: ['18px', '0', '28px', '0']
---
