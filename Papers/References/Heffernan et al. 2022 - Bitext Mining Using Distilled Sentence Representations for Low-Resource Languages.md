---
year: 2022
date: 2022
authors:
  - "Heffernan, Kevin"
  - "Çelebi, Onur"
  - "Schwenk, Holger"
generated: true
key: 5JLJ9SDC
version: 2236
itemType: conferencePaper
title: Bitext Mining Using Distilled Sentence Representations for Low-Resource Languages
proceedingsTitle: "Findings of the Association for Computational Linguistics: EMNLP 2022"
conferenceName: "Findings of the Association for Computational Linguistics: EMNLP 2022"
place: "Abu Dhabi, United Arab Emirates"
publisher: Association for Computational Linguistics
pages: 2101-2112
language: en
DOI: 10.18653/v1/2022.findings-emnlp.154
url: "https://aclanthology.org/2022.findings-emnlp.154"
accessDate: "2024-05-14T08:46:29Z"
libraryCatalog: Semantic Scholar
collections:
  - ERQKEKFA
dateAdded: "2024-05-14T08:46:29Z"
dateModified: "2024-05-14T08:46:33Z"
super_collections:
  - ERQKEKFA
filename: Heffernan et al. 2022 - Bitext Mining Using Distilled Sentence Representations for Low-Resource Languages
marker: "[🇿](zotero://select/library/items/5JLJ9SDC)"
---

>[!warning] Warning
> This note should not be modified as it can be overwritten by the plugin which generated it

> [!title] Bitext Mining Using Distilled Sentence Representations for Low-Resource Languages

> [!example] File
> [Heffernan et al. 2022 - Bitext Mining Using Distilled Sentence Representations for Low-Resource Languages](Heffernan%20et%20al.%202022%20-%20Bitext%20Mining%20Using%20Distilled%20Sentence%20Representations%20for%20Low-Resource%20Languages.pdf)

> [!abstract] Abstract
> Scaling multilingual representation learning beyond the hundred most frequent languages is challenging, in particular to cover the long tail of low-resource languages. A promising approach has been to train one-for-all multilingual models capable of cross-lingual transfer, but these models often suffer from insufficient capacity and interference between unrelated languages. Instead, we move away from this approach and focus on training multiple language (family) specific representations, but most prominently enable all languages to still be encoded in the same representational space. To achieve this, we focus on teacher-student training, allowing all encoders to be mutually compatible for bitext mining, and enabling fast learning of new languages. We introduce a new teacher-student training scheme which combines supervised and self-supervised training, allowing encoders to take advantage of monolingual training data, which is valuable in the low-resource setting. Our approach significantly outperforms the original LASER encoder. We study very low-resource languages and handle 50 African languages, many of which are not covered by any other model. For these languages, we train sentence encoders, mine bitexts, and validate the bitexts by training NMT systems.

[TLDR] A new teacher-student training scheme is introduced which combines supervised and self-supervised training, allowing encoders to take advantage of monolingual training data, which is valuable in the low-resource setting and significantly outperforms the original LASER encoder.

