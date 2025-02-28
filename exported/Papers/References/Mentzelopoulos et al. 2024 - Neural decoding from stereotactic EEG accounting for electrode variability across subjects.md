---
year: 2024
month: 11
day: 1
date: 1 November 2024
authors:
- Mentzelopoulos, Georgios
- Chatzipantazis, Evangelos
- Ramayya, Ashwin G.
- Hedlund, Michelle J.
- Buch, Vivek P.
- Daniilidis, Kostas
- Kording, Konrad P.
- Vitale, Flavia
generated: true
key: FFD9ZL9P
version: 2262
itemType: conferencePaper
title: 'Neural decoding from stereotactic EEG: accounting for electrode variability across subjects'
shortTitle: Neural decoding from stereotactic EEG
url: https://www.semanticscholar.org/paper/Neural-decoding-from-stereotactic-EEG%3A-accounting-Mentzelopoulos-Chatzipantazis/56fe18529ea9dc04f245149a8b9f06a896f6fc05
accessDate: 2024-12-17T13:48:44Z
libraryCatalog: Semantic Scholar
collections:
- ERQKEKFA
dateAdded: 2024-12-17T13:48:44Z
dateModified: 2024-12-17T13:48:49Z
super_collections:
- ERQKEKFA
filename: Mentzelopoulos et al. 2024 - Neural decoding from stereotactic EEG accounting for electrode variability across subjects
marker: '[🇿](zotero://select/library/items/FFD9ZL9P)'
---


 > 
 > \[!warning\] Warning
 > This note should not be modified as it can be overwritten by the plugin which generated it

 > 
 > \[!title\] Neural decoding from stereotactic EEG: accounting for electrode variability across subjects

 > 
 > \[!example\] File
 > [Mentzelopoulos et al. 2024 - Neural decoding from stereotactic EEG accounting for electrode variability across subjects](Mentzelopoulos%20et%20al.%202024%20-%20Neural%20decoding%20from%20stereotactic%20EEG%20accounting%20for%20electrode%20variability%20across%20subjects.pdf)

 > 
 > \[!abstract\] Abstract
 > Deep learning based neural decoding from stereotactic electroencephalography (sEEG) would likely benefit from scaling up both dataset and model size. To achieve this, combining data across multiple subjects is crucial. However, in sEEG cohorts, each subject has a variable number of electrodes placed at distinct locations in their brain, solely based on clinical needs. Such heterogeneity in electrode number/placement poses a significant challenge for data integration, since there is no clear correspondence of the neural activity recorded at distinct sites between individuals. Here we introduce seegnificant: a training framework and architecture that can be used to decode behavior across subjects using sEEG data. We tokenize the neural activity within electrodes using convolutions and extract long-term temporal dependencies between tokens using self-attention in the time dimension. The 3D location of each electrode is then mixed with the tokens, followed by another self-attention in the electrode dimension to extract effective spatiotemporal neural representations. Subject-specific heads are then used for downstream decoding tasks. Using this approach, we construct a multi-subject model trained on the combined data from 21 subjects performing a behavioral task. We demonstrate that our model is able to decode the trial-wise response time of the subjects during the behavioral task solely from neural data. We also show that the neural representations learned by pretraining our model across individuals can be transferred in a few-shot manner to new subjects. This work introduces a scalable approach towards sEEG data integration for multi-subject model training, paving the way for cross-subject generalization for sEEG decoding.
