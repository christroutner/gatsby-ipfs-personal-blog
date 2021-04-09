---
date: '2021-04-09'
title: 'IPFS Service Providers'
root: '/blog'
path: '/blog/ipfs-service-providers'
---

I've been thinking about the best way to summarize the technical milestone I've reached with the research I've been doing on an [IPFS-based API](/blog/ipfs-api). Here's my best attempt:

**By achieving the milestone described in this post, I've answered the question, "Is it possible to build a censorship-resistant replacement to a REST API?", with a firm "Yes!". I've eliminated all technical risk with respect to weather the tech is *possible*. It is. And at the same time, I've laid down a firm foundation upon which the [Permissionless Software Foundation](https://PSFoundation.cash) (PSF) can iterate.**

## ipfs-service-provider
The video below demos the [ipfs-service-provider](https://github.com/Permissionless-Software-Foundation/ipfs-service-provider) code repository. This is a 'boilerplate' (a code template) for building apps that can provide generic web services. This boilerplate can be forked to build any of the web services mentioned [in this prevoius post](https://troutsblog.com/blog/ipfs-api). The video shows the basic JSON RPC that a web or phone app could use, to communicate with and consume the provided services, over IPFS.

This Service Provider software, with the [ipfs-coord](https://www.npmjs.com/package/ipfs-coord) library integrated into it, provides all the basic technology required to conduct trade:

- A way to find interested parties.
- Private, end-to-end encrypted communication with those parties.
- A way to exchange data.
- A way to exchange value.

The video is made for JavaScript developers, who want to understand and fork the Service Provider code base to build their own IPFS-based services. Don't let the techno-babble distract you from the big picture: peacefully conducting trade.

<center><iframe width="560" height="315" src="https://www.youtube.com/embed/cApsEhXOChQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>
