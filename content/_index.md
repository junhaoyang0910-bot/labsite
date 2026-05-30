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
          <figure class="about-research-figure">
            <img src="media/research-directions.png" alt="ICG-PNT Lab research directions">
          </figure>
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
