---
zoteroTags:
  - Computation and Language (cs.CL)
  - "FOS: Computer and information sciences"
  - Machine Learning (cs.LG)
year: 2024
date: 2024
authors:
  - "Zhou, Tianyi"
  - "Fu, Deqing"
  - "Sharan, Vatsal"
  - "Jia, Robin"
generated: true
key: PR92CTMH
version: 2269
itemType: journalArticle
title: Pre-trained Large Language Models Use Fourier Features to Compute Addition
DOI: 10.48550/ARXIV.2406.03445
url: "https://arxiv.org/abs/2406.03445"
accessDate: "2025-02-11T04:00:27Z"
libraryCatalog: Semantic Scholar
rights: Creative Commons Attribution 4.0 International
extra: "Publisher: arXiv Version Number: 1"
collections:
  - ERQKEKFA
dateAdded: "2025-02-11T04:00:27Z"
dateModified: "2025-02-11T04:07:41Z"
super_collections:
  - ERQKEKFA
filename: Zhou et al. 2024 - Pre-trained Large Language Models Use Fourier Features to Compute Addition
marker: "[🇿](zotero://select/library/items/PR92CTMH)"
---

>[!warning] Warning
> This note should not be modified as it can be overwritten by the plugin which generated it

> [!title] Pre-trained Large Language Models Use Fourier Features to Compute Addition

> [!example] File
> [Zhou et al. 2024 - Pre-trained Large Language Models Use Fourier Features to Compute Addition](Zhou%20et%20al.%202024%20-%20Pre-trained%20Large%20Language%20Models%20Use%20Fourier%20Features%20to%20Compute%20Addition.pdf)

> [!abstract] Abstract
> Pre-trained large language models (LLMs) exhibit impressive mathematical reasoning capabilities, yet how they compute basic arithmetic, such as addition, remains unclear. This paper shows that pre-trained LLMs add numbers using Fourier features -- dimensions in the hidden state that represent numbers via a set of features sparse in the frequency domain. Within the model, MLP and attention layers use Fourier features in complementary ways: MLP layers primarily approximate the magnitude of the answer using low-frequency features, while attention layers primarily perform modular addition (e.g., computing whether the answer is even or odd) using high-frequency features. Pre-training is crucial for this mechanism: models trained from scratch to add numbers only exploit low-frequency features, leading to lower accuracy. Introducing pre-trained token embeddings to a randomly initialized model rescues its performance. Overall, our analysis demonstrates that appropriate pre-trained representations (e.g., Fourier features) can unlock the ability of Transformers to learn precise mechanisms for algorithmic tasks.

[TLDR] This paper shows that pre-trained LLMs add numbers using Fourier features -- dimensions in the hidden state that represent numbers via a set of features sparse in the frequency domain, demonstrating that appropriate pre-trained representations can unlock the ability of Transformers to learn precise mechanisms for algorithmic tasks.

