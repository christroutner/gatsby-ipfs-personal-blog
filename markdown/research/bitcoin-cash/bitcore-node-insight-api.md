---
title: 'Bitcore Node and Insight API'
root: "/research"
parent: "Bitcoin Cash"
path: '/research/bitcore-node-insight-api'
---

In [this video](https://www.youtube.com/watch?v=o0FfW5rZPFs) where I talk about
rest.bitcoin.com and the value it provides, one of the central pieces of
software behind the platform is the Insight API. This REST API software allows
users to query metadata not provided by a full node. This includes addresses,
UTXOs, and blocks. It's created an maintained by [Bitpay](https://bitpay.com/).

I created [this Docker container](https://github.com/christroutner/insight-docker)
which was based on v3 of Insight API. It depends on
this [Bitprim fork](https://github.com/bitprim/bitcoin-abc/blob/0.18.0-bitcore/doc/build-unix.md) of
the BCH ABC full node. Bitprim never released a v0.19.x fork of ABC, so the
Insight API contained in that Docker container was forked off the network on
May 15th, 2019.

In the meantime, Bitpay has rebranded *Insight API* into *Bitcore Node*. What they
call *Insight* is just the front-end user interface for the API. The actual
REST API is now called *Bitcore Node*. The current release is also version 8,
it uses JavaScript and MongoDB.

## Installing Bitcore Node
The [Bitcore GitHub repo](https://github.com/bitpay/bitcore) is a monorepo,
meaning it contains code for several different projects under the same
GitHub repository. From the standpoint of rest.bitcoin.com, the only package
of interest is
the [Bitcore Node package](https://github.com/bitpay/bitcore/tree/master/packages/bitcore-node).

Instead of dealing with Bitcore node directly, I created
this [docker-bitcore-node](https://github.com/christroutner/docker-bitcore-node)
repository which encapsulates the Bitcore Node software inside a Docker container
and customizes it for the Bitcoin Cash network.
Running it as a Docker container makes it easier to regularly backup the Mongo
database. It includes Mongo as separate Docker container.

In order to install the software, MongoDB and Node.js are required. A fully-synced
BCH full node is also required. Here is the `bitcore.config.json` file needed
to configure Bitcore Node for BCH:

```json
{
  "bitcoreNode": {
    "services": {
      "api": {
        "wallets": {
          "allowCreationBeforeCompleteSync": true
        }
      }
    },
    "chains": {
      "BCH": {
        "mainnet": {
          "chainSource": "p2p",
          "trustedPeers": [
            {
              "host": "192.168.11.11",
              "port": 8333
            }
          ],
          "rpc": {
            "host": "192.168.11.11",
            "port": 8332,
            "username": "bitcoin",
            "password": "password"
          }
        }
      }
    }
  }
}

```

Notice that port 8333 is for p2p communication, and 8332 is the port for the
JSON RPC.

For reference, here is the `bitcoin.conf` file used to configure my ABC full node.
This is the same configuration file
for [this full node Docker container](https://github.com/christroutner/docker-abc)

```bash
# Network-related settings:
testnet=0

# Listening mode, enabled by default except when 'connect' is being used
listen=1

server=1
rpcuser=bitcoin
rpcpassword=password
rpcallowip=0.0.0.0/0

# Listen for RPC connections on this TCP port:
rpcport=8332
rpcworkqueue=64
rpcthreads=14
rpctimeout=30

# p2p port
port=8333

txindex=1

port=8333

# Enable zeromq for real-time data
zmqpubrawtx=tcp://0.0.0.0:28332
zmqpubrawblock=tcp://0.0.0.0:28332
zmqpubhashtx=tcp://0.0.0.0:28332
zmqpubhashblock=tcp://0.0.0.0:28332
```

## Gotchas
- Bitcore Node on BCH takes an *incredible* amount of disk space at around
320 GB. This takes up more space than any other indexer I've worked with.

- The Bitcore Node handling of memory seems very robust. In tests on Digital
Ocean during indexing, I observed the software race up to nearly 100% memory
and 100% CPU usage, but the software remained stable. After indexing, the
memory and CPU usage is minimal.<br /><br />
This is great, because a service like Digital Ocean can be used to quickly
index the blockchain in a short period of time by renting a huge amount of
computing power. Once fully synced, the data can be moved to a separate volume
and a much cheaper Droplet can be used to run the API.
