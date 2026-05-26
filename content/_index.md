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
            <h1>Xiaolong Mi Research Group</h1>
            <p class="lab-home-affiliation">The Hong Kong Polytechnic University</p>
            <p class="lab-home-focus">GNSS &nbsp;|&nbsp; Space Geodesy &nbsp;|&nbsp; LEO-PNT &nbsp;|&nbsp; Planetary Navigation</p>
            <a class="lab-home-scroll" href="#section-collection" aria-label="Explore the site">
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
