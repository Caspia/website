---
title: 'Getting Started at Clallam Bay'
date: '2017-03-17'
tags: 'CBCC'
path: '/posts/getting-started-at-clallam-bay'
---

![](/assets/cbcc.jpg)
I've been having discussions with Ray Pulsipher (computer instructor with Peninsula College) for a year now about trying to setup an open source project with students at Clallam Bay. Last year, we went together to Department of Corrections in Olympia to get agreement on the security aspects of such a program. This week, Ray and Sandra Diimmel (Director of Education at Clallam Bay with Peninsula College) met with the superintendent of Clallam Bay, and jointly agreed that we could proceed.

The current plans are for me to spend two days per week at Clallam Bay in their existing computer education lab, working with students to develop open source projects that they could work on. Because of my connections with Mozilla, and in particular with Mozilla Thunderbird, likely projects would be somewhere in Mozilla.

What kinds of projects? So much of programming these days consists of interactions with cloud providers, or requires extensive research on the availability and use of specific packages, neither of which is possible for students with no internet access. The best projects require a specific set of skills that could be acquired in a few months, that then results in a large body of work using those skills.

One concept I have been investigating for the students at Clallam Bay is to develop tooling to convert Mozilla desktop applications (Firefox and Thunderbird) from using XUL-based user interfaces, to using HTML-based interfaces. XUL is a powerful user interface language, but it duplicates in many ways the functionality of HTML, particularly with the recent improvements of HTML5 and CSS. Both Firefox and Thunderbird desire to move away from XUL toward HTML, but it is a big job with thousands of files to convert. Setting up the conversion process would be easier if we develop a framework that duplicates the functionality of XUL using HTML. Such a framework might be usable outside of Mozilla projects as well.
