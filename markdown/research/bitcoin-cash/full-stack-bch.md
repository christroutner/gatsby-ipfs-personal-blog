---
title: "How to become a BCH Full Stack Developer"
root: "/research"
parent: "Bitcoin Cash"
path: "/research/bitcoin-cash/how-to-bch-full-stack-developer"
---

This is a guide to becoming a Bitcoin Cash (BCH) full stack developer. It's a deep rabbit hole and a long journey to mastering the full stack of BCH software to make modern web and mobile apps that speak directly to the blockchain. But first, lets start with the most basic question: What *is* a BCH full stack developer? What does that term even *mean*?

## What is a BCH full stack developer?
Let's start with a couple definitions:

- **Developer**: A person who writes software. Because the world of software is so large, most developers will distinguish themselves by picking a specific programming like JavaScript, Python, Java, or C#.

- **Full Stack**: Developers will typically specialize in *front end* development (like phone apps, web apps, or other things with a user interface (**UI**)) or *back end* development (web servers, desktop applications, anything not involving a user interface). A full stack developer is one who is proficient at both.

Let's start with the end goal and work backwards from there: A BCH full stack developer with the skills that businesses are willing to pay good money for can build a wallet application or some other application that talks directly to the BCH blockchain. It can reliably receive and send transactions. They are able to run and maintain the infrastructure required to support that application.

<u>This guide will give you a road map to acquiring the skills necessary to become a JavaScript BCH full stack developer.</u>

### Dipping your toes in the water
Before digging into the nitty-gritty back end infrastructure, it's often encouraging to 'skip ahead' to the end and show yourself why you're about to work so hard to learn all that infrastructure. Here are some examples of popular front end applications. Each of these apps use back end infrastructure that this article will show you how to set up.

- [Badger Wallet](https://badger.bitcoin.com/) is really two wallet apps. One is for smart phones and the other is for web browsers. But they function the same. This is one of the leading wallets for working with [SLP tokens](https://simpleledger.cash/).

- [Memo](https://memo.cash/) is a clone of Twitter, but uses the BCH blockchain. Because its based on the blockchain, there can be no deplatforming or censorship of any kind.

- [Honest](https://honest.cash/v2/) is a blogging platform similar to [Medium](https://medium.com/). After writing an article, authors can embed the article into the BCH blockchain, so that it can never be deleted or censored.

- [Satoshi Dice](https://www.satoshidice.com/) is a very simple gambling game that lets you bet with BCH. Because is uses the BCH blockchain, all bets and payouts are publicly transparent and the game is [provably fair](https://www.satoshidice.com/fair).

This wide range of applications all use the same common back end infrastructure.

### Skipping the back end
To help front end developers get started quickly, and to remove the burden of hosting your own back end infrastructure, there are a growing list of cloud service providers. This provides convenience at a price.

Trusting a service provider to handle the back end infrastructure for you is convenient, but if their servers go down, your app goes down with them. And unless you run your own fall-back infrastructure, you have no recourse but to simply wait until they get back up and running. This is known as **platform risk**. *The only way to eliminate platform risk is to run your own infrastructure.*

Here are a few of the cloud-based REST APIs for interacting with the BCH network:

- [rest.bitcoin.com](https://rest.bitcoin.com) is probably the most popular REST API for interacting with the BCH blockchain. [bitbox-sdk](https://github.com/Bitcoin-com/bitbox-sdk) is a JavaScript library that provides easy endpoints for working with rest.bitcoin.com and provides additional important tools for working with Bitcoin Cash. Documentation for both can be found at [developer.bitcoin.com](https://developer.bitcoin.com/).

- [account.bchjs.cash](https://account.bchjs.cash) is a pay-to-play version of rest.bitcoin.com that is accessed through [api.bchjs.cash](https://api.bchjs.cash). [bch-js](https://www.npmjs.com/package/@chris.troutner/bch-js) is a fork of bitbox-sdk that is designed to work with api.bchjs.cash.

- [bloq.cloud](https://bloq.cloud/) and [Block Cypher](https://www.blockcypher.com/) are a pay-to-play REST API with similar access as the above, but different structures to their REST API.

<u>There are very few free or paid REST API services for working with BCH. By following this article, you can run your own cloud infrastructure to earn BCH, as illustrated in this video:</u>

<iframe width="600" height="400" src="https://www.youtube.com/embed/oFa8Q2OCSaw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
