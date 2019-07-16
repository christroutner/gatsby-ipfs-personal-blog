---
title: "Dev Ops Overview"
root: "/research"
parent: "Dev Ops"
path: "/research/dev-ops/overview"
---

This page contains some of my recipes for common dev-ops activities. I develop
exclusively in Ubuntu 18.04 on both my local developer machine and in production,
so everything assumes that as the development environment.

## Create Swap Space
```bash
sudo fallocate -l 2G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
```

## Install Node.js
```bash
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt-get install -y nodejs build-essential
```

## Install Docker
```
sudo apt-get install -y software-properties-common
curl -fsSL get.docker.com -o get-docker.sh && sh get-docker.sh
sudo usermod -aG docker ${USER}
```

[This tutorial](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-18-04) shows how to install Docker on a Ubuntu system. It's specifically targeted to Digital Ocean's cloud servers, but should work for any Ubuntnu system.


## Install Docker Compose
```
sudo curl -L https://github.com/docker/compose/releases/download/1.22.0/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

[This tutorial](https://www.digitalocean.com/community/tutorials/how-to-install-docker-compose-on-ubuntu-18-04) shows how to install Docker Compose on an Ubuntu system.

## Install IPFS
```
https://gist.github.com/christroutner/74c96e1ef9998ee961782ee176fae013
wget https://dist.ipfs.io/go-ipfs/v0.4.20/go-ipfs_v0.4.20_linux-amd64.tar.gz
tar -xvf go-ipfs_v0.4.20_linux-amd64.tar.gz
rm go-ipfs_v0.4.20_linux-amd64.tar.gz
cd go-ipfs
sudo ./install.sh
```
