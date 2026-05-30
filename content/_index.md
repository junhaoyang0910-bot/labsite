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
            The Intelligent Computational Geodesy and PNT (ICG-PNT) Lab develops rigorous theory and algorithms for <strong class="about-highlight">high-precision Positioning, Navigation, and Timing (PNT)</strong> across the full spatial hierarchy, spanning <strong class="about-highlight">ground and low-altitude applications</strong>, <strong class="about-highlight">LEO satellite orbit determination</strong>, and <strong class="about-highlight">lunar and deep-space navigation</strong>. Our research is grounded in <strong class="about-highlight">geodetic estimation theory</strong>, with a focus on <strong class="about-highlight">robust integer ambiguity resolution (IAR)</strong> and <strong class="about-highlight">precise atmospheric modeling</strong>, augmented by <strong class="about-highlight">artificial intelligence</strong> for smarter and more adaptive PNT systems. Our work is adopted by <strong class="about-highlight">industry, space agencies, and national infrastructure programs worldwide</strong>.
          </p>
          <div class="about-diagram" aria-label="ICG-PNT Lab research overview">
            <article class="about-diagram-card">
              <div class="about-card-heading">
                <span class="about-card-icon"><i class="fas fa-layer-group" aria-hidden="true"></i></span>
                <h3>Full Spatial Hierarchy</h3>
              </div>
              <p>High-precision PNT across connected domains, from local navigation to space exploration.</p>
              <div class="about-domain-row">
                <span><i class="fas fa-map-marker-alt" aria-hidden="true"></i> Ground</span>
                <span><i class="fas fa-plane" aria-hidden="true"></i> Low Altitude</span>
                <span><i class="fas fa-satellite" aria-hidden="true"></i> LEO</span>
                <span><i class="fas fa-moon" aria-hidden="true"></i> Lunar & Deep Space</span>
              </div>
            </article>
            <article class="about-diagram-card about-diagram-card-strong">
              <div class="about-card-heading">
                <span class="about-card-icon"><i class="fas fa-drafting-compass" aria-hidden="true"></i></span>
                <h3>Geodetic Estimation Core</h3>
              </div>
              <p>Rigorous algorithms built on estimation theory, robust ambiguity resolution, and atmospheric modeling.</p>
              <div class="about-method-grid">
                <span>Estimation Theory</span>
                <span>Robust IAR</span>
                <span>Atmospheric Modeling</span>
              </div>
            </article>
            <article class="about-diagram-card">
              <div class="about-card-heading">
                <span class="about-card-icon"><i class="fas fa-brain" aria-hidden="true"></i></span>
                <h3>Adaptive AI-PNT Systems</h3>
              </div>
              <p>Artificial intelligence augments physical models for smarter, resilient, and adaptive PNT.</p>
              <div class="about-ai-flow">
                <span>Data</span>
                <i class="fas fa-arrow-right" aria-hidden="true"></i>
                <span>Models</span>
                <i class="fas fa-arrow-right" aria-hidden="true"></i>
                <span>Decisions</span>
              </div>
            </article>
            <div class="about-impact-bar">
              <span class="about-impact-icon"><i class="fas fa-bullseye" aria-hidden="true"></i></span>
              <p>Delivering high-precision PNT solutions for industry, space agencies, and national infrastructure worldwide.</p>
            </div>
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
