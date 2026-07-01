---
title: "Enhancing GNSS Positioning Accuracy in Urban Canyons: A Multi-Epoch Residual-Based Consistency Check and IMU-GNSS Tight Coupling Approach"
authors:
  - Huan Luo
  - Yang Yang
  - Xiaolong Mi
  - Mengyu Ding
  - Wu Chen
date: "2025-03-18T00:00:00Z"
doi: "10.5194/egusphere-egu25-14893"
publication_types: ["paper-conference"]
publication: "*EGU General Assembly 2025*"
publication_short: ""
abstract: >-
  As urban populations continue to grow, the demand for precise positioning has become increasingly
  critical for various applications, including navigation, location-based services (LBS),
  transportation, delivery, and logistics. Global Navigation Satellite Systems (GNSS) are widely
  utilized for positioning; however, they encounter significant challenges in urban canyons, where
  signal obstructions and reflections can degrade positioning accuracy by tens to hundreds of meters.
  To address these challenges, existing consistency check methods have been developed to detect and
  exclude erroneous observations from multiple GNSS constellations, thereby improving performance in
  open or low-density urban environments. Nevertheless, high-density urban areas present difficulties,
  as the majority of GNSS signals are often compromised by non-line-of-sight (NLOS) reception and
  multipath interference. While the integration of inertial sensors with GNSS technology has shown
  effectiveness in addressing GNSS outages, the accumulation of drift errors in pedestrian dead
  reckoning (PDR) still hinder performance in dense urban settings where GNSS solutions are
  consistently unreliable. In this study, we propose a novel approach that tightly integrates PDR and
  GNSS data in the measurement domain to effectively identify fault-free measurements amidst a
  backdrop of contaminated signals. We introduce a multi-epoch smoothing algorithm designed to enhance
  positioning accuracy. Our method employs a two-stage consistency check algorithm to mitigate
  multipath effects, incorporating both satellite quality assessments and grid quality evaluations
  based on raw GNSS observations and inertial sensor data. Notably, we leverage time-series residuals
  from multi-epoch GNSS observations to identify fault-free measurements, moving beyond the
  limitations of single-epoch data. Additionally, grid quality is evaluated based on the discrepancies
  in residuals among high-quality satellites. To bolster the robustness and reliability of
  positioning, our algorithm integrates a positioning scheme that utilizes weight smoothing based on
  multi-epoch grid mapping and outlier mitigation through density-based spatial clustering of
  applications with noise (DBSCAN) clustering.Field experiments conducted in typical urban
  environments in Hong Kong, utilizing a standard smartphone as the receiver, demonstrated substantial
  improvements over conventional consistency check methods and chip outputs. Our findings reveal that
  traditional consistency check methods underperformed compared to chip outputs in dense urban areas.
  In contrast, the proposed method significantly enhanced positioning accuracy across all trials,
  achieving accuracies ranging from 2m to 10m, compared to chip outputs that varied from 5m to 58m.
  The proposed approach yielded an improvement rate of 50% to 88% across different urban
  densities.This innovative method is compatible with most consumer-grade devices, requiring no
  additional hardware, thereby offering enhanced convenience and intelligence for urban residents. Its
  ease of implementation across various brands and real-time operation with low computational load
  make it a versatile solution for improving positioning accuracy in complex urban environments.
summary: ""
tags: [GNSS, Urban positioning, IMU]
featured: false
url_pdf: ""
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
