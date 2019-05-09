---
date: '2019-05-08'
title: 'BCH Infrastructure'
root: '/blog'
path: '/blog/bch-infrastructure'
---

Now that I've got this blog going, I'm starting to go back through my GitHub
repositories that oversee my personal BCH infrastructure. I feel it's important
that any serious developer in the Bitcoin space run their own infrastructure.
It's not expensive, but it is time consuming. However, achieving it is a bit
of a right-of-passage. Installing your own infrastructure shows that you truly
understand how Bitcoin works, at least from a pragmatic standpoint.

I like running Bitcoin infrastructure on small, cheap computers (like
the [Raspberry Pi](https://amzn.to/2HaXKmn) or
the [Libre Mini-Computer](https://amzn.to/2Yi6gWp),
because of the 'appliance' factor. I set them up to run a single application,
like a Bitcoin full node, indexer, or web server. I set them up to run automatically
at startup. I like knowing a specific, physical thing provides a specific,
digital service.

But it's not required to run Bitcoin infrastructure on an appliance. I always
start by getting it running on my beefy Linux developer laptop, or a dedicated desktop.
After I've got the software running successfully in that more friendly environment,
I'll go the extra step to get it running on a Raspberry Pi. As a result, most
of the code I write will have a separate repository targeting each platform.

## Bitcoin Cash Full Node

The first step in becoming a Bitcoin developer is to
install and run your own full node. The blockchain is always growing, but
currently the BCH mainnet blockchain takes up about 170 GB and the testnet
takes up about 17 GB. A $50 Raspberry Pi is capable of running a full node, but
it will take several weeks to sync. The best approach is to sync the blockchain
on a normal desktop or laptop, then copy the blockchain over to a USB flash drive,
if one truly desires to run it on a Raspberry Pi.

- [docker-abc](https://github.com/christroutner/docker-abc) will create a full
node inside a Docker container, running the latest version of the ABC
implementation. The `run-image.sh` shell script can be modified to easily
specify the location of the blockchain. This makes it easy to use a USB flash
drive or exernal hard drive.
  - The [testnet branch](https://github.com/christroutner/docker-abc/tree/testnet)
  is configured to run on testnet3.

- [docker-abc-rpi](https://github.com/christroutner/docker-abc-rpi) is a customized
copy of the above, but targeted for a Raspberry Pi.

## rest.bitcoin.com

[docker-rest.bitcoin.com](https://github.com/Bitcoin-com/docker-rest.bitcoin.com) is
a Dockerized copy of
the [rest.bitcoin.com repository](https://github.com/Bitcoin-com/rest.bitcoin.com),
which is the code behind the [live copy of rest.bitcoin.com](https://rest.bitcoin.com).
Rest is a [REST API](https://en.wikipedia.org/wiki/Representational_state_transfer)
web server written in JavaScript. It allows developers to call one common API
in order to interface with several different pieces of infrastructure.

The most important piece is the full node. Instead of using the awkward JSON RPC
interface to talk with a node directly, the more natural REST API can be used.

- [This video](https://www.youtube.com/watch?v=o0FfW5rZPFs) gives a quick overview
of what rest does, the problems it solves, and how it fits with the developer
ecosystem.
<iframe width="600" height="400" src="https://www.youtube.com/embed/o0FfW5rZPFs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

- [Here is the documentation](https://developer.bitcoin.com/rest/docs/getting-started)

While [rest.bitcoin.com](https://rest.bitcoin.com) is a free, public service, it
is also rate limited and represents a central point of failure in the event of
a government crackdown or business mishap. Running your own, local copy of this
service is great to maintain self-sufficiency and avoid rate limits.

The only basic requirements to run a rest server is a full node and an
[Insight API](https://bch-insight.bitpay.com). Bitpay provides a public API,
but it is rate limited and breaks frequently. You can still use rest without it,
but some endpoints won't be available.
Blockbook is something I'm investigating to run as a replacement.

There is no special requirements when running this software on a Raspberry Pi.
You can run the Docker version, or the regular version after installing node.js
and npm on the RPi.

## Blockbook

[Blockbook](https://github.com/trezor/blockbook) is a blockchain indexer that
is [almost identical](https://gist.github.com/christroutner/ff1af0ee4f5a207571fe7857acdc916e) to
Insight API. It is maintained by Trezor, the maker of hardware wallets.
The fact that it is open source, has a good reputation, and Trezor has a clear
financial reason to maintain the software, makes this project stand out from
all the other options.
I'm currently exploring the use of this indexer, including as a
replacement for the unwieldy Insight API.

Indexers are needed because full nodes do not keep track of addresses. Full nodes
only keep track of transactions, UTXOs, and blocks. But people often want to
query balances at an address, or other types of metadata. This is the service
an indexer provides.

- [blockbook-docker](https://github.com/christroutner/blockbook-docker) is the
current prototype that I'm playing with and actively working on. It is
automatically configured for the BCH chain. But you need to point it at a full node.
It communicates with the full node over its RPC interface to download blocks and
index all the addresses.

## BITBOX

Once a copy of rest is fully up and running, it enables the use
of [BITBOX](https://github.com/Bitcoin-com/bitbox-sdk) JavaScript SDK. BITBOX
is a suite of Bitcoin Cash tools used to write web apps that can interact
with the Bitcoin Cash blockchain.

- [Here is the documentation](https://developer.bitcoin.com/bitbox/docs/getting-started)

## SLPDB, BITDB, and more

I'm currently focused on building reliable Docker containers around the
infrastructure mentioned in this post. Once I get the basics of a full node,
rest, and an indexer in place, I'll expand into dockerizing some of these
additional services:

- [SLPDB](https://github.com/simpleledger/SLPDB)
- [BITDB](https://bitdb.bch.sx/)
- [SLP SDK](https://github.com/Bitcoin-com/slp-sdk)
