---
year: 2025
month: 2
day: 5
date: 5 February 2025
authors:
- Yeo, Edward
- Tong, Yuxuan
- Niu, Morry
- Neubig, Graham
- Yue, Xiang
generated: true
key: HUUULNJC
version: 2269
itemType: conferencePaper
title: Demystifying Long Chain-of-Thought Reasoning in LLMs
url: https://www.semanticscholar.org/paper/Demystifying-Long-Chain-of-Thought-Reasoning-in-Yeo-Tong/45e1c99a1c8935bf137c0b51a08a03ffb6821993
accessDate: 2025-02-11T03:59:33Z
libraryCatalog: Semantic Scholar
collections:
- ERQKEKFA
dateAdded: 2025-02-11T03:59:33Z
dateModified: 2025-02-11T04:07:42Z
super_collections:
- ERQKEKFA
filename: Yeo et al. 2025 - Demystifying Long Chain-of-Thought Reasoning in LLMs
marker: '[🇿](zotero://select/library/items/HUUULNJC)'
---


 > 
 > \[!warning\] Warning
 > This note should not be modified as it can be overwritten by the plugin which generated it

 > 
 > \[!title\] Demystifying Long Chain-of-Thought Reasoning in LLMs

 > 
 > \[!example\] File
 > [Yeo et al. 2025 - Demystifying Long Chain-of-Thought Reasoning in LLMs](Yeo%20et%20al.%202025%20-%20Demystifying%20Long%20Chain-of-Thought%20Reasoning%20in%20LLMs.pdf)

 > 
 > \[!abstract\] Abstract
 > Scaling inference compute enhances reasoning in large language models (LLMs), with long chains-of-thought (CoTs) enabling strategies like backtracking and error correction. Reinforcement learning (RL) has emerged as a crucial method for developing these capabilities, yet the conditions under which long CoTs emerge remain unclear, and RL training requires careful design choices. In this study, we systematically investigate the mechanics of long CoT reasoning, identifying the key factors that enable models to generate long CoT trajectories. Through extensive supervised fine-tuning (SFT) and RL experiments, we present four main findings: (1) While SFT is not strictly necessary, it simplifies training and improves efficiency; (2) Reasoning capabilities tend to emerge with increased training compute, but their development is not guaranteed, making reward shaping crucial for stabilizing CoT length growth; (3) Scaling verifiable reward signals is critical for RL. We find that leveraging noisy, web-extracted solutions with filtering mechanisms shows strong potential, particularly for out-of-distribution (OOD) tasks such as STEM reasoning; and (4) Core abilities like error correction are inherently present in base models, but incentivizing these skills effectively for complex tasks via RL demands significant compute, and measuring their emergence requires a nuanced approach. These insights provide practical guidance for optimizing training strategies to enhance long CoT reasoning in LLMs. Our code is available at: https://github.com/eddycmu/demystify-long-cot.
