---
title: "Tails OS"
root: "/research"
parent: "Tor"
path: "/research/tor/tails"
---

[Tails Operating System](https://tails.boum.org/) is a small operating system
that lives on a USB flash drive. It uses Tor by default, and deletes everything
but a specific 'persistent' user directory after each use. It's the easiest
way to use the internet without leaving a trace.

Because Tails is so conservative, my only complaint with it is that it's too
restrictive for much more than casual web browsing. Trying to develop software,
for instance, is a nightmare. Most network apps, from curl to IPFS, are locked down
and prevented from working properly.

- [Pidgin](https://www.pidgin.im/) is an instant messaging client that comes
bundled with Tails. One of the first things I often want to do when working
within Tails is open a window to the outside world, so that I can get information
from my regular dev machine into whatever project I'm working on within Tails.
Pidgin, XMPP (jabber), and OTR encryption are how I do that securely.
[This video](https://www.youtube.com/watch?v=HsSssbs-Sso) is a walk through on
how to set up end-to-end encrypted instant messaging using Pidgin, both inside
and outside of Tails.
