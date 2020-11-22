---
layout: page
title: Recent Reseaches 
permalink: /researches/
author_profile: true
---

<font size=4>
This are some researches that I participated in recently. 
And some of the codes have been open soueced.
</font>
<br>

* **CN-Celeb: multi-genre speaker recognition**<br> 
Research on speaker recognition is extending to address the vulnerability in the wild conditions, 
among which genre mismatch is perhaps the most challenging.
In this work, we firstly publish CN-Celeb, a large-scale multi-genre corpus that includes in-the-wild speech utterances of 3,000 speakers in 11 different genres. 
Secondly, using this dataset, we conduct a comprehensive study on the multi-genre phenomenon, 
in particular the impact of the multi-genre challenge on speaker recognition, 
and on how to utilize the valuable multi-genre data more efficiently.

<font color=gray>
PAPER: UNDER JOURNAL REVIRW<br>
CODE: <a href="https://github.com/kjw11/tf-kaldi-speaker">GitHub</a>
</font>
  
  
* **Squeezing value of cross-domain labels: a decoupled scoring approch for speaker verification**<br>
Domain mismatch often occurs in real applications and causes serious performance reduction 
on speaker verification systems.The common wisdom is to collect cross-domain data and train 
a multi-domain PLDA model. Our experiments show that simply adding cross-domain data does not 
help performance in conditions with enrollment-test mismatch, which is largely due to the 
incoherent statistics between the enrollment and test conditions. Based on this, we present 
a decoupled scoring approach that can maximally squeeze the value of cross-domain labels and 
obtain optimal verification scores when the enrollment and test are mismatched. 

<font color=gray>
PAPER: <a href="https://arxiv.org/abs/2010.14243">Arxiv</a><br>
CODE: -
</font>


* **A Principle Solution for Enroll-Test Mismatch in Speaker Recognition**<br>
Mismatch between enrollment and test conditions causes serious performance on speaker recognition systems.
This paper present a simple yet effective solution to address this problem, 
based on the normalization likelihood scoring approach.
Experiments on three datasets with channel mismatch, near-far field mismatch and 
time-varying mismatch demonstrated the proposed solution is highly effective, 
and outperforms the commonly used domain adaptation methods.

<font color=gray>
PAPER: UNDER JOURNAL REVIRW<br>
CODE: -
</font>


* **Domain-Invariant Speaker Vector Projection by Model-Agnostic Meta-Learning**<br>
Domain generalization remains a critical problem for speaker recognition. For example, 
a model trained on reading speech may largely fail when applied to scenarios of singing or movie. 
In this work, we propose a domain-invariant projection to improve the generalizability of speaker vectors. 
This projection is a simple neural net and is trained following the Model-Agnostic Meta-Learning (MAML) 
principle. The experiments demonstrated that the proposed method can produce more generalizable speaker 
vectors, and effectively improve the performance in unseen domains.

<font color=gray>
PAPER: <a href="https://arxiv.org/abs/2005.11900">Arxiv</a><br>
CODE: -
</font>


* **CN-CELEB: A CHALLENGING CHINESE SPEAKER RECOGNITION DATASET**<br>
Recently, researchers set an ambitious goal of conducting speaker recognition (SRE) in unconstrained 
conditions where the variations on ambient, channel and emotion could be arbitrary. 
However, most publicly available datasets are collected under constrained environments, 
i.e., with little noise and limited channel variation. These datasets tend to deliver over 
optimistic performance and do not meet the request of research on SRE in unconstrained conditions. 
In this work, we present CN-Celeb, a large-scale SRE dataset collected 'in the wild'. Experiments 
result demonstrates that in real-life conditions, the performance of existing techniques might be 
much worse than it was thought. Our database is free for researchers and can 
be downloaded from this [http URL](http://cslt.riit.tsinghua.edu.cn/mediawiki/index.php/Active_Projects).

<font color=gray>
PAPER: <a href="https://arxiv.org/abs/1911.01799">Arxiv</a><br>
CODE: <a href="https://github.com/kjw11/Scripts-To-Process-Dataset">GitHub</a>
</font>

