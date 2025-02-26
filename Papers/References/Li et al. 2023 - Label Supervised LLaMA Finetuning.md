---
zoteroTags:
  - Computation and Language (cs.CL)
  - "FOS: Computer and information sciences"
  - notion
year: 2023
date: 2023
authors:
  - "Li, Zongxi"
  - "Li, Xianming"
  - "Liu, Yuzhang"
  - "Xie, Haoran"
  - "Li, Jing"
  - "Wang, Fu-lee"
  - "Li, Qing"
  - "Zhong, Xiaoqin"
generated: true
key: Y6VWVVCY
version: 2042
itemType: journalArticle
title: Label Supervised LLaMA Finetuning
DOI: 10.48550/ARXIV.2310.01208
url: "https://arxiv.org/abs/2310.01208"
accessDate: "2024-11-13T14:38:52Z"
libraryCatalog: Semantic Scholar
rights: "arXiv.org perpetual, non-exclusive license"
extra: "Publisher: arXiv Version Number: 1"
collections:
  - ERQKEKFA
dateAdded: "2024-11-13T14:38:52Z"
dateModified: "2024-11-13T14:39:09Z"
super_collections:
  - ERQKEKFA
filename: Li et al. 2023 - Label Supervised LLaMA Finetuning
marker: "[🇿](zotero://select/library/items/Y6VWVVCY)"
---

>[!warning] Warning
> This note should not be modified as it can be overwritten by the plugin which generated it

> [!title] Label Supervised LLaMA Finetuning

> [!example] File
> [Li et al. 2023 - Label Supervised LLaMA Finetuning](Li%20et%20al.%202023%20-%20Label%20Supervised%20LLaMA%20Finetuning.pdf)

> [!abstract] Abstract
> The recent success of Large Language Models (LLMs) has gained significant attention in both academia and industry. Substantial efforts have been made to enhance the zero- and few-shot generalization capabilities of open-source LLMs through finetuning. Currently, the prevailing approach is instruction-tuning, which trains LLMs to complete real-world tasks by generating responses guided by natural language instructions. It is worth noticing that such an approach may underperform in sequence and token classification tasks. Unlike text generation tasks, classification tasks have a limited label space, where precise label prediction is more appreciated than generating diverse and human-like responses. Prior research has unveiled that instruction-tuned LLMs cannot outperform BERT, prompting us to explore the potential of leveraging latent representations from LLMs for supervised label prediction. In this paper, we introduce a label-supervised adaptation for LLMs, which aims to finetuning the model with discriminant labels. We evaluate this approach with Label Supervised LLaMA (LS-LLaMA), based on LLaMA-2-7B, a relatively small-scale LLM, and can be finetuned on a single GeForce RTX4090 GPU. We extract latent representations from the final LLaMA layer and project them into the label space to compute the cross-entropy loss. The model is finetuned by Low-Rank Adaptation (LoRA) to minimize this loss. Remarkably, without intricate prompt engineering or external knowledge, LS-LLaMA substantially outperforms LLMs ten times its size in scale and demonstrates consistent improvements compared to robust baselines like BERT-Large and RoBERTa-Large in text classification. Moreover, by removing the causal mask from decoders, LS-unLLaMA achieves the state-of-the-art performance in named entity recognition (NER). Our work will shed light on a novel approach to adapting LLMs for various downstream tasks.

[TLDR] A label-supervised adaptation for LLMs, which aims to finetuning the model with discriminant labels and extracts latent representations from the final LLaMA layer and project them into the label space to compute the cross-entropy loss.

