---
year: 2024
month: 12
day: 29
date: 29 December 2024
authors:
  - "Park, Core Francisco"
  - "Lee, Andrew"
  - "Lubana, Ekdeep Singh"
  - "Yang, Yongyi"
  - "Okawa, Maya"
  - "Nishi, Kento"
  - "Wattenberg, Martin"
  - "Tanaka, Hidenori"
generated: true
key: PRZKZVVV
version: 2267
itemType: conferencePaper
title: "ICLR: In-Context Learning of Representations"
shortTitle: ICLR
url: "https://www.semanticscholar.org/paper/ICLR%3A-In-Context-Learning-of-Representations-Park-Lee/2e459745774062f1c930b645b0adc22d43e9bca9"
accessDate: "2025-01-20T17:47:55Z"
libraryCatalog: Semantic Scholar
collections:
  - ERQKEKFA
dateAdded: "2025-01-20T17:47:55Z"
dateModified: "2025-01-21T16:21:21Z"
super_collections:
  - ERQKEKFA
filename: Park et al. 2024 - ICLR In-Context Learning of Representations
marker: "[🇿](zotero://select/library/items/PRZKZVVV)"
---

>[!warning] Warning
> This note should not be modified as it can be overwritten by the plugin which generated it

> [!title] ICLR: In-Context Learning of Representations

> [!example] File
> [Park et al. 2024 - ICLR In-Context Learning of Representations](Park%20et%20al.%202024%20-%20ICLR%20In-Context%20Learning%20of%20Representations.pdf)

> [!abstract] Abstract
> Recent work has demonstrated that semantics specified by pretraining data influence how representations of different concepts are organized in a large language model (LLM). However, given the open-ended nature of LLMs, e.g., their ability to in-context learn, we can ask whether models alter these pretraining semantics to adopt alternative, context-specified ones. Specifically, if we provide in-context exemplars wherein a concept plays a different role than what the pretraining data suggests, do models reorganize their representations in accordance with these novel semantics? To answer this question, we take inspiration from the theory of conceptual role semantics and define a toy"graph tracing"task wherein the nodes of the graph are referenced via concepts seen during training (e.g., apple, bird, etc.) and the connectivity of the graph is defined via some predefined structure (e.g., a square grid). Given exemplars that indicate traces of random walks on the graph, we analyze intermediate representations of the model and find that as the amount of context is scaled, there is a sudden re-organization from pretrained semantic representations to in-context representations aligned with the graph structure. Further, we find that when reference concepts have correlations in their semantics (e.g., Monday, Tuesday, etc.), the context-specified graph structure is still present in the representations, but is unable to dominate the pretrained structure. To explain these results, we analogize our task to energy minimization for a predefined graph topology, providing evidence towards an implicit optimization process to infer context-specified semantics. Overall, our findings indicate scaling context-size can flexibly re-organize model representations, possibly unlocking novel capabilities.

[TLDR] These findings indicate scaling context-size can flexibly re-organize model representations, possibly unlocking novel capabilities.

