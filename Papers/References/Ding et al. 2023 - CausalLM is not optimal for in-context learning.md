---
zoteroTags:
  - Computation and Language (cs.CL)
  - "FOS: Computer and information sciences"
  - Machine Learning (cs.LG)
  - notion
year: 2023
date: 2023
authors:
  - "Ding, Nan"
  - "Levinboim, Tomer"
  - "Wu, Jialin"
  - "Goodman, Sebastian"
  - "Soricut, Radu"
generated: true
key: CH7GI5MW
version: 2042
itemType: journalArticle
title: CausalLM is not optimal for in-context learning
DOI: 10.48550/ARXIV.2308.06912
url: "https://arxiv.org/abs/2308.06912"
accessDate: "2024-11-20T00:04:01Z"
libraryCatalog: Semantic Scholar
rights: Creative Commons Attribution 4.0 International
extra: "Publisher: arXiv Version Number: 3"
collections:
  - ERQKEKFA
dateAdded: "2024-11-20T00:04:01Z"
dateModified: "2024-11-20T00:04:22Z"
super_collections:
  - ERQKEKFA
filename: Ding et al. 2023 - CausalLM is not optimal for in-context learning
marker: "[🇿](zotero://select/library/items/CH7GI5MW)"
---

>[!warning] Warning
> This note should not be modified as it can be overwritten by the plugin which generated it

> [!title] CausalLM is not optimal for in-context learning

> [!example] File
> [Ding et al. 2023 - CausalLM is not optimal for in-context learning](Ding%20et%20al.%202023%20-%20CausalLM%20is%20not%20optimal%20for%20in-context%20learning.pdf)

> [!abstract] Abstract
> Recent empirical evidence indicates that transformer based in-context learning performs better when using a prefix language model (prefixLM), in which in-context samples can all attend to each other, compared to causal language models (causalLM), which use auto-regressive attention that prohibits in-context samples to attend to future samples. While this result is intuitive, it is not understood from a theoretical perspective. In this paper we take a theoretical approach and analyze the convergence behavior of prefixLM and causalLM under a certain parameter construction. Our analysis shows that both LM types converge to their stationary points at a linear rate, but that while prefixLM converges to the optimal solution of linear regression, causalLM convergence dynamics follows that of an online gradient descent algorithm, which is not guaranteed to be optimal even as the number of samples grows infinitely. We supplement our theoretical claims with empirical experiments over synthetic and real tasks and using various types of transformers. Our experiments verify that causalLM consistently underperforms prefixLM in all settings.

## Other

ICLR 2024 conference paper. Code available at: https://github.com/google-research/causallm_icl

