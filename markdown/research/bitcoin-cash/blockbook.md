---
title: "BlockBook"
root: "/research"
parent: "Bitcoin Cash"
path: "/research/bitcoin-cash/blockbook"
---

[Blockbook](https://github.com/trezor/blockbook) is a blockchain indexer that
is [almost identical](https://gist.github.com/christroutner/ff1af0ee4f5a207571fe7857acdc916e) to
Insight API. It is maintained by Trezor, the maker of hardware wallets.
The fact that it is open source, has a good reputation, and Trezor has a clear
financial reason to maintain the software, makes this project stand out from
all the other options.
I'm currently exploring the use of this indexer, including as a
replacement for the unwieldy Insight API.

Indexers are needed because full nodes do not keep track of addresses. Full nodes
only keep track of transactions, UTXOs, and blocks. But use cases often require
the ability to
query balances at an address, or other types of metadata. This is the service
an indexer provides.

- [blockbook-docker](https://github.com/christroutner/blockbook-docker) is the
current prototype that I'm playing with and actively working on. It is
automatically configured for the BCH chain. But you need to point it at a full node.
It communicates with the full node over its RPC interface to download blocks and
index all the addresses.

## Gotchas

Here are my notes while working with this software:
- Blockbook indexes with many threads, which is efficient, but if the machine
loses power or the docker container is halted suddenly, it will corrupt the database
that Blockbook is building during the indexing processes. This can be prevented
by running the flag `-workers=1`, which will force the indexing process to be
single-threaded. This makes the indexing process much longer, but also prevents
the threat of a corrupted database.

- Running on a modern desktop with lots of ram and disk space, the indexing process
is taking over about 1-2 weeks. So the indexing process in *incredibly* slow.
This is definitely one of those pieces of software that you set up and forget
for a while.

- Indexing will require a little less than 100GB of free disk space.
