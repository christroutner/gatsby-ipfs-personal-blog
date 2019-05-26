---
title: "Bandwidth Control"
root: "/research"
parent: "Raspberry Pi"
path: "/research/raspberry-pi/bandwidth-control"
---

When building digital appliances with a Raspberry Pi, it's often important to
limit the bandwidth the device continues. Applications that involve streaming
or public use, like a Nextcloud file server, IPFS node, or Bittorrent server
can use significant amounts of bandwidth, unless they are specifically
restricted.

Bandwidth control can be accomplished by [Wondershaper](https://github.com/magnific0/wondershaper).

## Install:
These commands will download and install the latest copy of Wondershaper:

```bash
git clone https://github.com/magnific0/wondershaper
cd wondershaper
sudo make install
```

## Usage

On the RPi, the wireless connection is identified as `wlan0`, and you can see
it by running the command `ifconfig`.

My home internet connection is 25 megabit download and 1-2 megabit upload. So
upload is much slower than download. Therefore, limiting the upload bandwidth
for each device. I generally like to set an RPi for 512 kbps (kilobit per second)
down and 128 kbps up.

### Configuration

- Use the nano text editor to edit the configuration file for Wondershaper:
  - `sudo nano /etc/conf.d/wondershaper.conf`

- Here is the configuration settings I prefer to use, as described above:

```
[wondershaper]
# Adapter
#
IFACE="wlan0"

# Download rate in Kbps
#
DSPEED="512"

# Upload rate in Kbps
#
USPEED="128"
```

- Hit `Ctrl-x` to exit, and then `y` to save the changes.

### Start Wondershaper

- Once the config file has been updated, you can start Wondershaper:
  - `sudo systemctl start wondershaper`

- Then you can double check that it started correctly with:
  - `sudo systemctl status wondershaper`

- Finally, configure Wondershaper to start on boot:
  - `sudo systemctl enable wondershaper`
