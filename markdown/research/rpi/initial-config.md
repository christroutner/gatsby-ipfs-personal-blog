---
title: "Initial Configuration"
root: "/research"
parent: "Raspberry Pi"
path: "/research/raspberry-pi/initial-configuration"
---

## Unneeded Apps

The apps below can be removed in most cases as they are needed for my projects and take up valuable SD drive space.

List all installed application: apt list --installed
```
sudo apt-get --purge -y remove libreoffice libreoffice-avmedia-backend-gstreamer \
libreoffice-base libreoffice-base-core libreoffice-base-drivers libreoffice-calc \
libreoffice-common libreoffice-core libreoffice-draw libreoffice-gtk \
libreoffice-impress libreoffice-java-common libreoffice-math \
libreoffice-report-builder-bin libreoffice-sdbc-hsqldb libreoffice-style-galaxy \
libreoffice-writer bluej wolfram-engine scratch geany geany-common greenfoot \
sonic-pi
```

`sudo apt-get --purge -y remove minecraft-pi chromium-browser`


`sudo apt-get -y autoremove`



## Node.js
```bash
sudo apt-get -y update
sudo apt-get -y remove nodejs
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt-get install -y nodejs build-essential
sudo apt-get -y upgrade
```

## MongoDB
```bash
sudo apt-get install mongodb-server
sudo systemctl start mongod
sudo systemctl enable mongod
https://github.com/GabrielRF/Docker-MongoDB-RPi
https://andyfelong.com/2019/01/mongodb-3-2-64-bit-running-on-raspberry-pi-3-with-caveats/
```

## Docker
```
curl -sSL https://get.docker.com | sh
sudo usermod -aG docker pi
```

### Docker Compose
```
sudo apt-get install -y python3 python3-pip
sudo pip3 install docker-compose
```

## Flash Drive

https://www.raspberrypi.org/forums/viewtopic.php?f=28&t=176205

- `tail -f /var/log/messages`
  - handy command to look at system messages.

- `sudo blkid`
  - produces: /dev/sda1: UUID="8dd06116-a29c-459f-9002-c1cccd7892d5" TYPE="ext4" PARTUUID="eb5e7935-01"

- Used that output to add the following like to `/etc/fstab`: (Note: messing this up will brick the Pi)
-- `PARTUUID=eb5e7935-01 /media/usb ext4 defaults 0 0`

- rebooted and the drive was automounted to /media/usb


## Swap

https://raspberrypi.stackexchange.com/questions/70/how-to-set-up-swap-space

Raspbian uses dphys-swapfile, which is a swap-file based solution instead of the "standard" swap-partition based solution. It is much easier to change the size of the swap.

The configuration file is:

`/etc/dphys-swapfile`
The content is very simple. By default my Raspbian has 100MB of swap:

`CONF_SWAPSIZE=2000`
If you want to change the size, you need to modify the number and restart dphys-swapfile:

`sudo /etc/init.d/dphys-swapfile restart`
Edit: On Raspbian the default location is /var/swap, which is (of course) located on the SD card. I think it is a bad idea, so I would like to point out, that the /etc/dphys-swapfile can have the following option too: CONF_SWAPFILE=/media/btsync/swapfile


## Hostname
Reset the hostname of the RPi with these commands:
```
sudo nano /etc/hostname
sudo nano /etc/hosts
sudo reboot
hostname
```

Alternatively, can now use: `sudo raspbi-config` to set the hostname.
