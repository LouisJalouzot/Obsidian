---
zoteroTags:
  - notion
year: 2023
date: 23 May 2023
authors:
  - "Allen-Zhu, Zeyuan"
  - "Li, Yuanzhi"
generated: true
key: EAGJRV2Z
version: 1311
itemType: conferencePaper
title: "Physics of Language Models: Part 1, Learning Hierarchical Language Structures"
shortTitle: Physics of Language Models
url: "https://www.semanticscholar.org/paper/Physics-of-Language-Models%3A-Part-1%2C-Learning-Allen-Zhu-Li/656d40a68662ac480a6c56677f7fc12aad26a50e"
accessDate: "2024-11-07T14:48:29Z"
libraryCatalog: Semantic Scholar
collections:
  - ERQKEKFA
dateAdded: "2024-11-07T14:48:29Z"
dateModified: "2024-12-02T20:43:13Z"
super_collections:
  - ERQKEKFA
filename: "Allen-Zhu and Li 2023 - Physics of Language Models Part 1, Learning Hierarchical Language Structures"
marker: "[🇿](zotero://select/library/items/EAGJRV2Z)"
---

>[!warning] Warning
> This note should not be modified as it can be overwritten by the plugin which generated it

> [!title] Physics of Language Models: Part 1, Learning Hierarchical Language Structures

> [!example] File
> [Allen-Zhu and Li 2023 - Physics of Language Models Part 1, Learning Hierarchical Language Structures](Allen-Zhu%20and%20Li%202023%20-%20Physics%20of%20Language%20Models%20Part%201,%20Learning%20Hierarchical%20Language%20Structures.pdf)

> [!abstract] Abstract
> Transformer-based language models are effective but complex, and understanding their inner workings is a significant challenge. Previous research has primarily explored how these models handle simple tasks like name copying or selection, and we extend this by investigating how these models grasp complex, recursive language structures defined by context-free grammars (CFGs). We introduce a family of synthetic CFGs that produce hierarchical rules, capable of generating lengthy sentences (e.g., hundreds of tokens) that are locally ambiguous and require dynamic programming to parse. Despite this complexity, we demonstrate that generative models like GPT can accurately learn this CFG language and generate sentences based on it. We explore the model's internals, revealing that its hidden states precisely capture the structure of CFGs, and its attention patterns resemble the information passing in a dynamic programming algorithm. This paper also presents several corollaries, including showing why positional embedding is inferior to relative attention or rotary embedding; demonstrating that encoder-based models (e.g., BERT, deBERTa) cannot learn very deeply nested CFGs as effectively as generative models (e.g., GPT); and highlighting the necessity of adding structural and syntactic errors to the pretraining data to make the model more robust to corrupted language prefixes.

[TLDR] This paper introduces a family of synthetic CFGs that produce hierarchical rules, capable of generating lengthy sentences that are locally ambiguous and require dynamic programming to parse, and demonstrates that generative models like GPT can accurately learn this CFG language and generate sentences based on it.

[TLDR] This paper introduces a family of synthetic CFGs that produce hierarchical rules, capable of generating lengthy sentences that are locally ambiguous and require dynamic programming to parse, and demonstrates that generative models like GPT can accurately learn this CFG language and generate sentences based on it.

