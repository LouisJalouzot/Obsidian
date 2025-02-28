---
title: 'WavTokenizer: an Efficient Acoustic Discrete Codec Tokenizer for Audio Language Modeling'
source: https://arxiv.org/abs/2408.16532
author:
- '[[arXiv.org]]'
published: null
created: 2025-02-26
description: 'Abstract page for arXiv paper 2408.16532: WavTokenizer: an Efficient Acoustic Discrete Codec Tokenizer for Audio Language Modeling'
tags:
- clippings
---

Authors:[Shengpeng Ji](https://arxiv.org/search/eess?searchtype=author&query=Ji,+S), [Ziyue Jiang](https://arxiv.org/search/eess?searchtype=author&query=Jiang,+Z), [Wen Wang](https://arxiv.org/search/eess?searchtype=author&query=Wang,+W), [Yifu Chen](https://arxiv.org/search/eess?searchtype=author&query=Chen,+Y), [Minghui Fang](https://arxiv.org/search/eess?searchtype=author&query=Fang,+M), [Jialong Zuo](https://arxiv.org/search/eess?searchtype=author&query=Zuo,+J), [Qian Yang](https://arxiv.org/search/eess?searchtype=author&query=Yang,+Q), [Xize Cheng](https://arxiv.org/search/eess?searchtype=author&query=Cheng,+X), [Zehan Wang](https://arxiv.org/search/eess?searchtype=author&query=Wang,+Z), [Ruiqi Li](https://arxiv.org/search/eess?searchtype=author&query=Li,+R), [Ziang Zhang](https://arxiv.org/search/eess?searchtype=author&query=Zhang,+Z), [Xiaoda Yang](https://arxiv.org/search/eess?searchtype=author&query=Yang,+X), [Rongjie Huang](https://arxiv.org/search/eess?searchtype=author&query=Huang,+R), [Yidi Jiang](https://arxiv.org/search/eess?searchtype=author&query=Jiang,+Y), [Qian Chen](https://arxiv.org/search/eess?searchtype=author&query=Chen,+Q), [Siqi Zheng](https://arxiv.org/search/eess?searchtype=author&query=Zheng,+S), [Zhou Zhao](https://arxiv.org/search/eess?searchtype=author&query=Zhao,+Z)

[View PDF](https://arxiv.org/pdf/2408.16532) [HTML (experimental)](https://arxiv.org/html/2408.16532v3)

 > 
 > Abstract:Language models have been effectively applied to modeling natural signals, such as images, video, speech, and audio. A crucial component of these models is the codec tokenizer, which compresses high-dimensional natural signals into lower-dimensional discrete tokens. In this paper, we introduce WavTokenizer, which offers several advantages over previous SOTA acoustic codec models in the audio domain: 1)extreme compression. By compressing the layers of quantizers and the temporal dimension of the discrete codec, one-second audio of 24kHz sampling rate requires only a single quantizer with 40 or 75 tokens. 2)improved subjective quality. Despite the reduced number of tokens, WavTokenizer achieves state-of-the-art reconstruction quality with outstanding UTMOS scores and inherently contains richer semantic information. Specifically, we achieve these results by designing a broader VQ space, extended contextual windows, and improved attention networks, as well as introducing a powerful multi-scale discriminator and an inverse Fourier transform structure. We conducted extensive reconstruction experiments in the domains of speech, audio, and music. WavTokenizer exhibited strong performance across various objective and subjective metrics compared to state-of-the-art models. We also tested semantic information, VQ utilization, and adaptability to generative models. Comprehensive ablation studies confirm the necessity of each module in WavTokenizer. The related code, demos, and pre-trained models are available at [this https URL](https://github.com/jishengpeng/WavTokenizer).

## Submission history

From: Shengpeng Ji \[[view email](https://arxiv.org/show-email/57ec09a0/2408.16532)\]  
**[\[v1\]](https://arxiv.org/abs/2408.16532v1)** Thu, 29 Aug 2024 13:43:36 UTC (332 KB)  
**[\[v2\]](https://arxiv.org/abs/2408.16532v2)** Tue, 22 Oct 2024 14:40:15 UTC (339 KB)  
**\[v3\]** Tue, 25 Feb 2025 11:45:12 UTC (345 KB)
