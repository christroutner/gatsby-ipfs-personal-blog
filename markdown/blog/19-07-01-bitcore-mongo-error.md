---
date: '2019-07-01'
title: 'Bitcore MongoDB Error'
root: '/blog'
path: '/blog/bitcore-mongodb-error'
---

This post captures a MongoDB error I see frequently when trying to run
[Bitcore Node](https://github.com/bitpay/bitcore-node). Of course, I run my
own Dockerized version targeted for BCH: [docker-bitcore-node](https://github.com/christroutner/docker-bitcore-node).

This page is liked to by [my research page on Bitcore Node](/research/bitcore-node-insight-api).

This error is frequently seen when trying to start the Docker container. It's
occurs because the DB is so big (over 320GB). It takes a while for MongoDB to
open the database. However, the Bitcore Node application comes up much faster.
So Bitcore tends to error out. This is why I have the Docker container set
to auto-restart. It will keep trying until MongoDB gets the DB online.

```
(node:62) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
error:  MongoNetworkError: connection 0 to 172.17.0.1:3503 closed
    at Socket.<anonymous> (/home/safeuser/bitcore/packages/bitcore-node/node_modules/mongodb-core/lib/connection/connection.js:275:9)
    at Object.onceWrapper (events.js:277:13)
    at Socket.emit (events.js:189:13)
    at TCP._handle.close (net.js:597:12)
error:  MongoNetworkError: connection 1 to 172.17.0.1:3503 closed
    at Socket.<anonymous> (/home/safeuser/bitcore/packages/bitcore-node/node_modules/mongodb-core/lib/connection/connection.js:275:9)
    at Object.onceWrapper (events.js:277:13)
    at Socket.emit (events.js:189:13)
    at TCP._handle.close (net.js:597:12)
error:  MongoNetworkError: connection 2 to 172.17.0.1:3503 closed
    at Socket.<anonymous> (/home/safeuser/bitcore/packages/bitcore-node/node_modules/mongodb-core/lib/connection/connection.js:275:9)
    at Object.onceWrapper (events.js:277:13)
    at Socket.emit (events.js:189:13)
    at TCP._handle.close (net.js:597:12)
error:  MongoNetworkError: connection 3 to 172.17.0.1:3503 closed
    at Socket.<anonymous> (/home/safeuser/bitcore/packages/bitcore-node/node_modules/mongodb-core/lib/connection/connection.js:275:9)
    at Object.onceWrapper (events.js:277:13)
    at Socket.emit (events.js:189:13)
    at TCP._handle.close (net.js:597:12)
error:  MongoNetworkError: connection 4 to 172.17.0.1:3503 closed
    at Socket.<anonymous> (/home/safeuser/bitcore/packages/bitcore-node/node_modules/mongodb-core/lib/connection/connection.js:275:9)
    at Object.onceWrapper (events.js:277:13)
    at Socket.emit (events.js:189:13)
    at TCP._handle.close (net.js:597:12)
error:  MongoNetworkError: connection 5 to 172.17.0.1:3503 closed
    at Socket.<anonymous> (/home/safeuser/bitcore/packages/bitcore-node/node_modules/mongodb-core/lib/connection/connection.js:275:9)
    at Object.onceWrapper (events.js:277:13)
    at Socket.emit (events.js:189:13)
    at TCP._handle.close (net.js:597:12)
Unhandled Rejection at: Error: Failed to connect to database
    at Timeout.setInterval (/home/safeuser/bitcore/packages/bitcore-node/build/src/services/storage.js:53:32)
    at process._tickCallback (internal/process/next_tick.js:68:7)
Shutting down 62
info: Stopping P2P Manager
info: Stopping Event Service

```
