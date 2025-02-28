---
zoteroTags:
- Artificial Intelligence (cs.AI)
- Computer Vision and Pattern Recognition (cs.CV)
- 'FOS: Biological sciences'
- 'FOS: Computer and information sciences'
- Neurons and Cognition (q-bio.NC)
year: 2024
date: 2024
authors:
- Scotti, Paul S.
- Tripathy, Mihir
- Villanueva, Cesar Kadir Torrico
- Kneeland, Reese
- Chen, Tong
- Narang, Ashutosh
- Santhirasegaran, Charan
- Xu, Jonathan
- Naselaris, Thomas
- Norman, Kenneth A.
- Abraham, Tanishq Mathew
generated: true
key: EJH6WQEA
version: 2238
itemType: journalArticle
title: 'MindEye2: Shared-Subject Models Enable fMRI-To-Image With 1 Hour of Data'
DOI: 10.48550/ARXIV.2403.11207
shortTitle: MindEye2
url: https://arxiv.org/abs/2403.11207
accessDate: 2024-04-23T10:15:20Z
libraryCatalog: Semantic Scholar
rights: Creative Commons Attribution 4.0 International
extra: 'Publisher: [object Object] Version Number: 1'
collections:
- ERQKEKFA
dateAdded: 2024-04-23T10:15:20Z
dateModified: 2024-04-23T10:15:29Z
super_collections:
- ERQKEKFA
filename: Scotti et al. 2024 - MindEye2 Shared-Subject Models Enable fMRI-To-Image With 1 Hour of Data
marker: '[🇿](zotero://select/library/items/EJH6WQEA)'
---


 > 
 > \[!warning\] Warning
 > This note should not be modified as it can be overwritten by the plugin which generated it

 > 
 > \[!title\] MindEye2: Shared-Subject Models Enable fMRI-To-Image With 1 Hour of Data

 > 
 > \[!example\] File
 > [Scotti et al. 2024 - MindEye2 Shared-Subject Models Enable fMRI-To-Image With 1 Hour of Data](Scotti%20et%20al.%202024%20-%20MindEye2%20Shared-Subject%20Models%20Enable%20fMRI-To-Image%20With%201%20Hour%20of%20Data.pdf)

 > 
 > \[!abstract\] Abstract
 > Reconstructions of visual perception from brain activity have improved tremendously, but the practical utility of such methods has been limited. This is because such models are trained independently per subject where each subject requires dozens of hours of expensive fMRI training data to attain high-quality results. The present work showcases high-quality reconstructions using only 1 hour of fMRI training data. We pretrain our model across 7 subjects and then fine-tune on minimal data from a new subject. Our novel functional alignment procedure linearly maps all brain data to a shared-subject latent space, followed by a shared non-linear mapping to CLIP image space. We then map from CLIP space to pixel space by fine-tuning Stable Diffusion XL to accept CLIP latents as inputs instead of text. This approach improves out-of-subject generalization with limited training data and also attains state-of-the-art image retrieval and reconstruction metrics compared to single-subject approaches. MindEye2 demonstrates how accurate reconstructions of perception are possible from a single visit to the MRI facility. All code is available on GitHub.
