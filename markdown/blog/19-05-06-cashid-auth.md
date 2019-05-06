---
date: "2019-05-06"
title: "CashID Auth with Badger Wallet"
root: "/blog"
path: "/blog/cashid-auth"
---

I'll probably turn this into a research article at some point, for right now
this article is intended to capture my current research and thoughts on
integrating [CashID](https://cashid.badgerwallet.cash/) into a website to
allow for authentication with [Badger Wallet](https://badger.bitcoin.com).

The first mental hurdle I had to overcome was the idea that I was working
with just two parties: the client (web browser) and the server. In actuality,
there are three parities involved, just like there would be for single-sign-on
authentication with Google or Facebook. The relationship looks like this:

![CashID Auth Flowchart](cashid-auth.jpeg 'CashID Auth Flowchart')
