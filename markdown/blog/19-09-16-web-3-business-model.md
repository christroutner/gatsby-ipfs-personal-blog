---
date: '2019-09-22'
title: 'SLP Token Business Model'
root: '/blog'
path: '/blog/slp-token-business-model'
---

*This post is an attempt to collect my thoughts around the business model I'm trying to create for the Permissionless Software Foundation. It utilizes SLP tokens to pass value backwards in the value chain to the developers. I try to explain the idea in the historical context of web-based business models.*

*This theory is not complete. This article is not intended to explain, but to theorize and begin a conversation. Have feedback? Connect with me on [Memo](https://memo.cash/profile/1NpYaazpQ26KrMTeFf66zVKy6x9KzcLgTA), [Twitter](https://twitter.com/christroutner), or
the Permissionless Software Foundation's [Telegram channel](https://t.me/permissionless_software)*

## Web 1.0
In web 1.0 the transfer of value was very simple. There were servers and clients (sellers and buyers), and servers provided value to clients directly. Examples of this is an email server or a website hosting service.

![Web 1.0](./images/web1.jpeg 'Web 1.0')

## Web 2.0
In web 2.0, we saw the rise of platforms like Facebook, Google, and Twitter. A platform is a third party that enable value transfer between two parties (buyers and sellers). An example would be an ecommerce website that has a presence on these social media platforms, and by being on a popular platform, they can better attract new customers. The incentive for the platform is the opportunity for advertisement and data mining.

![Web 2.0](./images/web2.jpeg 'Web 2.0')

In this model, the platform extracts value and uses it to pay developers to improve the platform. Shareholders receive the net profit. This creates a positive reinforcement cycle of creating and monetizing value, and works well within the scope of a traditional, hierarchical corporation.

## Web 3.0
With web 3.0, the PSF business model leverages decentralized platforms. Like the web 2.0 model, there is a platform to connect two parties. Unlike web 2.0, there is little opportunity for advertising or data mining. Instead the end user chooses from a range of nearly-identical, decentralized ‘micro-platform’ options to find the economic partner they are trying to connect with.

The ‘micro-platforms’ are referred to as [Mirrors](https://honest.cash/christroutner/hybrid-p2p-networks-1051), since they reflect the same data and operate in a combination of competition and cooperation (‘coopetition’). They cooperate in order to share data and so are largely interchangeable with one another from the end-user viewpoint. However, they compete with one another to be more attractive for the end-user (buyers or sellers) to use.

In this model, the operation of the platform by Mirrors is a separate economic activity from the activity of Devleopers who create the core software making up the platform. This is where tokens and non-custodial financial services (**NCFS**) become important.

![Web 3](./images/web3.jpeg 'Web 3.0')

An example would be a platform that creates a [curated list of Tor websites](https://psfoundation.cash/biz-plan/business-plan#searchEngine). A *Buyer* of some economic service would go to a *Mirror* to find a *Seller*. The Mirrors share data, but may display them differently. They compete to make a better UI for the Buyer. They also compete to promote Sellers, a privilege that Sellers pay for.

Because the ‘coopetition’ between Mirrors is a full time job, they don’t want to take on the additional task of developing the core software. Therefore, each economic transaction handled by the Mirror software sends a small amount of cryptocurrency to the software development organization, to incentive them. This is possible because they wrote the software, and so the software by-default sends them a portion of each transaction.

This separates concerns and leads to great efficiency. Mirrors can focus on running the platform: connecting Buyers and Sellers, and competing with other Mirrors. The Developers can focus on what they do best, and be compensated for it. Each of the four parties are better off.

This separation of concerns is important for economic incentive, but it is also important for survival of each party. Mirrors have the option of running as a Tor hidden service, or openly on the web. By making it easy to create and operate a Mirror, it distributes the legal risk associated with operating any one Mirror. A Mirror can be created much faster than they can be taken down. This is important, since they are at the heart of the economic activity.

This model can be expanded to a range of ecommerce applications. A few examples are email, search engines or curated lists, website hosting, file sharing, VPNs, and VPSs. This model ensures each economic actor can achieve their goal while minimizing the legal risk to each.
[Here are a few projects the PSF intends to pursue](https://psfoundation.cash/biz-plan/business-plan#projects).

## Burning Tokens
The above economic model ties into the [token liquidity app](https://psfoundation.cash/biz-plan/business-plan#pseudoStableToken) and the use of NCFSs by burning tokens. A tiny portion of each transaction is sent to the token liquidity app with instructions to burn the tokens instead of the default behavior, which is to exchange BCH for tokens.

By taking tokens out of circulation, it causes the price for tokens to rise. This effectively passes value **backwards in the supply chain**. Developers who have already been compensated in tokens, who have been holding them and waiting for the price to increase, can cash out into BCH and then into their local fiat.
