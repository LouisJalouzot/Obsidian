---
zoteroTags:
  - Artificial Intelligence (cs.AI)
  - Computation and Language (cs.CL)
  - "FOS: Computer and information sciences"
  - Machine Learning (cs.LG)
year: 2024
date: 2024
authors:
  - "Sun, Yu"
  - "Li, Xinhao"
  - "Dalal, Karan"
  - "Xu, Jiarui"
  - "Vikram, Arjun"
  - "Zhang, Genghan"
  - "Dubois, Yann"
  - "Chen, Xinlei"
  - "Wang, Xiaolong"
  - "Koyejo, Sanmi"
  - "Hashimoto, Tatsunori"
  - "Guestrin, Carlos"
generated: true
key: DLGHSJFK
version: 2248
itemType: journalArticle
title: "Learning to (Learn at Test Time): RNNs with Expressive Hidden States"
DOI: 10.48550/ARXIV.2407.04620
shortTitle: Learning to (Learn at Test Time)
url: "https://arxiv.org/abs/2407.04620"
accessDate: "2024-09-20T16:39:11Z"
libraryCatalog: Semantic Scholar
rights: Creative Commons Attribution 4.0 International
extra: "Publisher: arXiv Version Number: 2"
collections:
  - ERQKEKFA
dateAdded: "2024-09-20T16:39:11Z"
dateModified: "2024-09-20T16:39:19Z"
super_collections:
  - ERQKEKFA
filename: Sun et al. 2024 - Learning to (Learn at Test Time) RNNs with Expressive Hidden States
marker: "[🇿](zotero://select/library/items/DLGHSJFK)"
---

>[!warning] Warning
> This note should not be modified as it can be overwritten by the plugin which generated it

> [!title] Learning to (Learn at Test Time): RNNs with Expressive Hidden States

> [!example] File
> [Sun et al. 2024 - Learning to (Learn at Test Time) RNNs with Expressive Hidden States](Sun%20et%20al.%202024%20-%20Learning%20to%20(Learn%20at%20Test%20Time)%20RNNs%20with%20Expressive%20Hidden%20States.pdf)

> [!abstract] Abstract
> Self-attention performs well in long context but has quadratic complexity. Existing RNN layers have linear complexity, but their performance in long context is limited by the expressive power of their hidden state. We propose a new class of sequence modeling layers with linear complexity and an expressive hidden state. The key idea is to make the hidden state a machine learning model itself, and the update rule a step of self-supervised learning. Since the hidden state is updated by training even on test sequences, our layers are called Test-Time Training (TTT) layers. We consider two instantiations: TTT-Linear and TTT-MLP, whose hidden state is a linear model and a two-layer MLP respectively. We evaluate our instantiations at the scale of 125M to 1.3B parameters, comparing with a strong Transformer and Mamba, a modern RNN. Both TTT-Linear and TTT-MLP match or exceed the baselines. Similar to Transformer, they can keep reducing perplexity by conditioning on more tokens, while Mamba cannot after 16k context. With preliminary systems optimization, TTT-Linear is already faster than Transformer at 8k context and matches Mamba in wall-clock time. TTT-MLP still faces challenges in memory I/O, but shows larger potential in long context, pointing to a promising direction for future research.

