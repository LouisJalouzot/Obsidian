---
zoteroTags:
  - Artificial Intelligence (cs.AI)
  - Computation and Language (cs.CL)
  - "FOS: Computer and information sciences"
  - Machine Learning (cs.LG)
  - Neural and Evolutionary Computing (cs.NE)
year: 2023
date: 2023
authors:
  - "Yu, Dingli"
  - "Kaur, Simran"
  - "Gupta, Arushi"
  - "Brown-Cohen, Jonah"
  - "Goyal, Anirudh"
  - "Arora, Sanjeev"
generated: true
key: 5JAVAYFG
version: 2265
itemType: journalArticle
title: "Skill-Mix: a Flexible and Expandable Family of Evaluations for AI models"
DOI: 10.48550/ARXIV.2310.17567
shortTitle: Skill-Mix
url: "https://arxiv.org/abs/2310.17567"
accessDate: "2025-01-18T11:23:58Z"
libraryCatalog: Semantic Scholar
rights: "arXiv.org perpetual, non-exclusive license"
extra: "Publisher: arXiv Version Number: 1"
collections:
  - ERQKEKFA
dateAdded: "2025-01-18T11:23:58Z"
dateModified: "2025-01-18T11:27:37Z"
super_collections:
  - ERQKEKFA
filename: Yu et al. 2023 - Skill-Mix a Flexible and Expandable Family of Evaluations for AI models
marker: "[🇿](zotero://select/library/items/5JAVAYFG)"
---

>[!warning] Warning
> This note should not be modified as it can be overwritten by the plugin which generated it

> [!title] Skill-Mix: a Flexible and Expandable Family of Evaluations for AI models

> [!example] File
> [Yu et al. 2023 - Skill-Mix a Flexible and Expandable Family of Evaluations for AI models](Yu%20et%20al.%202023%20-%20Skill-Mix%20a%20Flexible%20and%20Expandable%20Family%20of%20Evaluations%20for%20AI%20models.pdf)

> [!abstract] Abstract
> With LLMs shifting their role from statistical modeling of language to serving as general-purpose AI agents, how should LLM evaluations change? Arguably, a key ability of an AI agent is to flexibly combine, as needed, the basic skills it has learned. The capability to combine skills plays an important role in (human) pedagogy and also in a paper on emergence phenomena (Arora &amp; Goyal, 2023). This work introduces Skill-Mix, a new evaluation to measure ability to combine skills. Using a list of $N$ skills the evaluator repeatedly picks random subsets of $k$ skills and asks the LLM to produce text combining that subset of skills. Since the number of subsets grows like $N^k$, for even modest $k$ this evaluation will, with high probability, require the LLM to produce text significantly different from any text in the training set. The paper develops a methodology for (a) designing and administering such an evaluation, and (b) automatic grading (plus spot-checking by humans) of the results using GPT-4 as well as the open LLaMA-2 70B model. Administering a version of to popular chatbots gave results that, while generally in line with prior expectations, contained surprises. Sizeable differences exist among model capabilities that are not captured by their ranking on popular LLM leaderboards ("cramming for the leaderboard"). Furthermore, simple probability calculations indicate that GPT-4's reasonable performance on $k=5$ is suggestive of going beyond "stochastic parrot" behavior (Bender et al., 2021), i.e., it combines skills in ways that it had not seen during training. We sketch how the methodology can lead to a Skill-Mix based eco-system of open evaluations for AI capabilities of future models.

