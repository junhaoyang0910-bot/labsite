---
title: "Fast and precise GNSS RTK positioning with ionosphere-constrained weighted least squares quadratic programming"
authors:
  - Xiaolong Mi
  - Xingyu Chen
  - Robert Odolinski
  - Yuyan Wang
  - Wu Chen
  - Yunbin Yuan
date: "2026-02-01T00:00:00Z"
doi: "10.1007/s00190-025-02026-5"
publication_types: ["article-journal"]
publication: "*Journal of Geodesy*, 100(2), 11"
publication_short: ""
abstract: >-
  Achieving fast and precise real-time kinematic (RTK) positioning depends on effective carrier phase
  integer ambiguity resolution (IAR), yet ionospheric delays pose significant challenges. Traditional
  approaches often employ the ionosphere-weighted model, which requires complex variance component
  estimation and iterative optimization procedures that are sensitive to modeling assumptions and
  local ionospheric dynamics. To address these limitations, we propose a novel ionosphere-constrained
  model that transforms ionospheric correction into a bounded optimization problem by applying
  empirically derived inequality constraints to double-differenced (DD) ionospheric delays within a
  weighted least squares quadratic programming (QP) framework. This convex formulation guarantees
  global optimality, provides automatic anomaly detection through boundary convergence, and derives
  transparent, physically interpretable bounds from historical DD delay statistics as a function of
  baseline length. The QP framework conditionally activates when the unconstrained ionosphere-float
  solution violates empirical bounds, either guiding estimation toward reasonable interior solutions
  or preventing large outlier delays while remaining non-intrusive under benign conditions, thereby
  improving the precision of float solution and accelerating IAR. Experiments on an ultra-short
  baseline demonstrate that refining the DD ionospheric constraint significantly enhances the formal
  ambiguity success rates in case of full IAR, highlighting the critical role of precise constraint
  intervals. Validation using data from the Hong Kong Satellite Positioning Reference Station Network
  with baseline lengths ranging from a few meters to 50 km shows that our method improves the formal
  IAR success rate by 12% to 24% compared to the ionosphere-float model and by 5% to 15% compared to
  the ionosphere-weighted model, achieving near 100% for baselines up to 15 km. Additionally, the
  ionosphere-constrained model enhances the accuracy of the float solution through DD ionosphere
  inequality constraints, accelerates the convergence time of the float solution, and achieves fast
  IAR. Furthermore, our model improves positioning accuracy by over 20% compared to the
  ionosphere-weighted model, owing to its effective management of DD ionospheric constraints.
summary: ""
tags: [GNSS, RTK, Quadratic programming]
featured: false
url_pdf: "publication/文献/2026 -  Fast and precise GNSS RTK positioning with ionosphere-constrained weighted least squares quadratic programming.pdf"
url_code: ""
url_dataset: ""
url_poster: ""
url_project: ""
url_slides: ""
url_source: ""
url_video: ""
projects: []
slides: ""
---
