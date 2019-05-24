---
date: '2019-05-22'
title: 'Tor Back End Servers'
root: '/blog'
path: '/blog/tor-back-end'
---

[This news article](https://www.coindesk.com/eu-authorities-crack-down-on-bitcoin-transaction-mixer) was
brought to my attention today. A crypto-to-crypto business was 'taken down' by
an authority-in-power.
It's unclear if the government performed a physical attack on the server, or
simply confiscated the domain name, as described
in [this YouTube video on how government censorship works](https://www.youtube.com/watch?v=RlNVyatwd5M). I suspect the latter, as it's much easier. But let's assume
the former: a server take-down.

The [about page](/about) of this site describes how to create a decentralized
front-end and serve it with a back-end web server, like Express.js. But how
can this technology
be used to protect against a server take-down; a physical attack on a server?

The answer is running a [Tor hidden service](https://2019.www.torproject.org/docs/onion-services.html.en) over
a `.onion` domain name.

**Here is an example.** Using [Tor browser](https://www.torproject.org/download/),
you can navigate to this sites onion
address: [http://f6lfmasvo2x3ogrr.onion/](http://f6lfmasvo2x3ogrr.onion/).
However, you can also access any IPFS gateway through Tor browser too. If you
navigate to [the latest copy on IPFS](/latest), you'll be served the website
that way too!

Since Tor browser can access `.onion` back end web services, you can now safely
serve up dynamic content and services, like a REST API. Your front end website
is uncensorable, and your back end server is hidden!

If Bestmixer.io was built this way, they could still be operating. At best, a
government could only seize their domain name. But any Tor domain name or
IPFS-based front-end would still be up an running, and still talking to their
protected server back-end.
