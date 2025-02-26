---
zoteroTags:
  - LLM
  - Math
  - Qwen
  - Reasoning
  - notion
year: 2025
date: 31 January 2025
authors:
  - "Muennighoff, Niklas"
  - "Yang, Zitong"
  - "Shi, Weijia"
  - "Li, Xiang Lisa"
  - "Li, Fei-Fei"
  - "Hajishirzi, Hanna"
  - "Zettlemoyer, Luke S."
  - "Liang, Percy"
  - "Candes, Emmanuel J."
  - "Hashimoto, Tatsunori"
generated: true
key: DY2U3AS9
version: 2045
itemType: conferencePaper
title: "s1: Simple test-time scaling"
shortTitle: s1
url: "https://www.semanticscholar.org/paper/s1%3A-Simple-test-time-scaling-Muennighoff-Yang/ef8a8bd193b1a0a5e2c834a7a28869a2ec85bab7"
accessDate: "2025-02-11T03:58:55Z"
libraryCatalog: Semantic Scholar
collections:
  - ERQKEKFA
dateAdded: "2025-02-11T03:58:55Z"
dateModified: "2025-02-14T22:56:42Z"
super_collections:
  - ERQKEKFA
filename: Muennighoff et al. 2025 - s1 Simple test-time scaling
marker: "[🇿](zotero://select/library/items/DY2U3AS9)"
---

>[!warning] Warning
> This note should not be modified as it can be overwritten by the plugin which generated it

> [!title] s1: Simple test-time scaling

> [!example] File
> [Muennighoff et al. 2025 - s1 Simple test-time scaling](Muennighoff%20et%20al.%202025%20-%20s1%20Simple%20test-time%20scaling.pdf)

> [!abstract] Abstract
> Test-time scaling is a promising new approach to language modeling that uses extra test-time compute to improve performance. Recently, OpenAI's o1 model showed this capability but did not publicly share its methodology, leading to many replication efforts. We seek the simplest approach to achieve test-time scaling and strong reasoning performance. First, we curate a small dataset s1K of 1,000 questions paired with reasoning traces relying on three criteria we validate through ablations: difficulty, diversity, and quality. Second, we develop budget forcing to control test-time compute by forcefully terminating the model's thinking process or lengthening it by appending"Wait"multiple times to the model's generation when it tries to end. This can lead the model to double-check its answer, often fixing incorrect reasoning steps. After supervised finetuning the Qwen2.5-32B-Instruct language model on s1K and equipping it with budget forcing, our model s1-32B exceeds o1-preview on competition math questions by up to 27% (MATH and AIME24). Further, scaling s1-32B with budget forcing allows extrapolating beyond its performance without test-time intervention: from 50% to 57% on AIME24. Our model, data, and code are open-source at https://github.com/simplescaling/s1

# Annotations  
(2/14/2025, 4:54:29 PM)

“We seek the simplest approach to achieve test-time scaling and strong reasoning performance” (Muennighoff et al., 2025, p. 1)

“we curate a small dataset s1K of 1,000 questions paired with reasoning traces” (Muennighoff et al., 2025, p. 1)

“we develop budget forcing to control test-time compute by forcefully terminating the model’s thinking process or lengthening it by appending “Wait” multiple times to the model’s generation when it tries to end” (Muennighoff et al., 2025, p. 1)

“This can lead the model to doublecheck its answer, often fixing incorrect reasoning steps” (Muennighoff et al., 2025, p. 1)

“our model s1-32B exceeds o1-preview on competition math questions by up to 27% (MATH and AIME24)” (Muennighoff et al., 2025, p. 1)

“pool of 59K questions” (Muennighoff et al., 2025, p. 2)

“three stages of filtering to arrive at a minimal set of 1,000 samples relying on our three guiding data principles: Quality, Difficulty, and Diversity” (Muennighoff et al., 2025, p. 2)

[TLDR] After supervised finetuning the Qwen2.5-32B-Instruct language model on s1K and equipping it with budget forcing, the model s1-32B exceeds o1-preview on competition math questions by up to 27% (MATH and AIME24).

