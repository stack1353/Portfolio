---
title: "Designing an Edge AI Vision Pipeline"
date: "2025-09-01"
tags: [AI/ML, Embedded, Computer Vision]
---

Modern edge devices can run powerful CV models if we design the pipeline carefully. This post covers:

- Model selection and quantization
- Camera sensor considerations (exposure, gain, lens)
- Thermal and power constraints on SBCs like Raspberry Pi

We begin by identifying the target FPS and latency budget, then back into pre/post-processing costs before choosing a model.


