---
zoteroTags:
  - Artificial Intelligence (cs.AI)
  - "FOS: Biological sciences"
  - "FOS: Computer and information sciences"
  - Machine Learning (cs.LG)
  - Neural and Evolutionary Computing (cs.NE)
  - Neurons and Cognition (q-bio.NC)
year: 2022
date: 2022
authors:
  - "Zhao, Xusheng"
  - "Wu, Jia"
  - "Peng, Hao"
  - "Beheshti, Amin"
  - "Monaghan, Jessica J. M."
  - "McAlpine, David"
  - "Hernandez-Perez, Heivet"
  - "Dras, Mark"
  - "Dai, Qiong"
  - "Li, Yangyang"
  - "Yu, Philip S."
  - "He, Lifang"
generated: true
key: ZTAZEDCC
version: 2231
itemType: journalArticle
title: Deep reinforcement learning guided graph neural networks for brain network analysis
DOI: 10.48550/ARXIV.2203.10093
url: "https://arxiv.org/abs/2203.10093"
accessDate: "2024-06-24T16:43:04Z"
libraryCatalog: Semantic Scholar
rights: Creative Commons Attribution 4.0 International
extra: "Publisher: arXiv Version Number: 5"
collections:
  - ERQKEKFA
dateAdded: "2024-06-24T16:43:04Z"
dateModified: "2024-06-24T16:43:08Z"
super_collections:
  - ERQKEKFA
filename: Zhao et al. 2022 - Deep reinforcement learning guided graph neural networks for brain network analysis
marker: "[🇿](zotero://select/library/items/ZTAZEDCC)"
---

>[!warning] Warning
> This note should not be modified as it can be overwritten by the plugin which generated it

> [!title] Deep reinforcement learning guided graph neural networks for brain network analysis

> [!example] File
> [Zhao et al. 2022 - Deep reinforcement learning guided graph neural networks for brain network analysis](Zhao%20et%20al.%202022%20-%20Deep%20reinforcement%20learning%20guided%20graph%20neural%20networks%20for%20brain%20network%20analysis.pdf)

> [!abstract] Abstract
> Modern neuroimaging techniques, such as diffusion tensor imaging (DTI) and functional magnetic resonance imaging (fMRI), enable us to model the human brain as a brain network or connectome. Capturing brain networks' structural information and hierarchical patterns is essential for understanding brain functions and disease states. Recently, the promising network representation learning capability of graph neural networks (GNNs) has prompted many GNN-based methods for brain network analysis to be proposed. Specifically, these methods apply feature aggregation and global pooling to convert brain network instances into meaningful low-dimensional representations used for downstream brain network analysis tasks. However, existing GNN-based methods often neglect that brain networks of different subjects may require various aggregation iterations and use GNN with a fixed number of layers to learn all brain networks. Therefore, how to fully release the potential of GNNs to promote brain network analysis is still non-trivial. To solve this problem, we propose a novel brain network representation framework, namely BN-GNN, which searches for the optimal GNN architecture for each brain network. Concretely, BN-GNN employs deep reinforcement learning (DRL) to train a meta-policy to automatically determine the optimal number of feature aggregations (reflected in the number of GNN layers) required for a given brain network. Extensive experiments on eight real-world brain network datasets demonstrate that our proposed BN-GNN improves the performance of traditional GNNs on different brain network analysis tasks.

[TLDR] A novel brain network representation framework, BN-GNN, is proposed, which searches for the optimal GNN architecture for each brain network and employs deep reinforcement learning (DRL) to automatically predict the optimal number of feature propagations required for a given brain network.

