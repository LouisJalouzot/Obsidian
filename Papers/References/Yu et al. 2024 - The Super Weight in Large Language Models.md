---
zoteroTags:
  - notion
year: 2024
month: 11
day: 11
date: 11 November 2024
authors:
  - "Yu, Mengxia"
  - "Wang, De"
  - "Shan, Qi"
  - "Reed, Colorado"
  - "Wan, Alvin"
generated: true
key: BDZMN7S2
version: 1241
itemType: conferencePaper
title: The Super Weight in Large Language Models
url: "https://www.semanticscholar.org/paper/The-Super-Weight-in-Large-Language-Models-Yu-Wang/2e5baf6b3a5bfdb5cd7d7ee450296fe222c7c225"
accessDate: "2024-11-29T09:08:16Z"
libraryCatalog: Semantic Scholar
collections:
  - ERQKEKFA
dateAdded: "2024-11-29T09:08:16Z"
dateModified: "2024-11-29T09:08:21Z"
super_collections:
  - ERQKEKFA
filename: Yu et al. 2024 - The Super Weight in Large Language Models
marker: "[🇿](zotero://select/library/items/BDZMN7S2)"
---

>[!warning] Warning
> This note should not be modified as it can be overwritten by the plugin which generated it

> [!title] The Super Weight in Large Language Models

> [!example] File
> [Yu et al. 2024 - The Super Weight in Large Language Models](Yu%20et%20al.%202024%20-%20The%20Super%20Weight%20in%20Large%20Language%20Models.pdf)

> [!abstract] Abstract
> Recent works have shown a surprising result: a small fraction of Large Language Model (LLM) parameter outliers are disproportionately important to the quality of the model. LLMs contain billions of parameters, so these small fractions, such as 0.01%, translate to hundreds of thousands of parameters. In this work, we present an even more surprising finding: Pruning as few as a single parameter can destroy an LLM's ability to generate text -- increasing perplexity by 3 orders of magnitude and reducing zero-shot accuracy to guessing. We propose a data-free method for identifying such parameters, termed super weights, using a single forward pass through the model. We additionally find that these super weights induce correspondingly rare and large activation outliers, termed super activations. When preserved with high precision, super activations can improve simple round-to-nearest quantization to become competitive with state-of-the-art methods. For weight quantization, we similarly find that by preserving the super weight and clipping other weight outliers, round-to-nearest quantization can scale to much larger block sizes than previously considered. To facilitate further research into super weights, we provide an index of super weight coordinates for common, openly available LLMs.

[TLDR] This work proposes a data-free method for identifying parameters of Large Language Model parameter outliers, termed super weights, using a single forward pass through the model and finds that these super weights induce correspondingly rare and large activation outliers, termed super activations, when preserved with high precision.

