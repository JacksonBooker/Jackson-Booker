---
title: How to Create a ProxMox Server With Old Laptop!
---

The laptop that I will be using is and acer nitro 5. The specs are in the following photo. Something that makes this a good laptop for this server is that it has 16 GB's of RAM which will allow more VM's to run on the machine at once. 

![acer-specs](./img/acer-specs.png)

## Downloading ProxMox

The first step is to download the "Proxmox VE ISO Installer". You will want to download the lastest version. For me that is 9.2. 

![2942cfb019048d401d547bf62d80b3f4.png](./img/2942cfb019048d401d547bf62d80b3f4.png)

Once that is downloaded, you can move on to booting Proxmox from you USB flashdrive. Download Balena Etcher, and select the ISO file that you just downloaded. Then select your thumbdrive as the target. 
**DO NOT SELECT YOUR C: DRIVE!!!**

![balanaetcher-photo.png](./img/balanaetcher-photo.png)

Safely eject your thumbdrive and plug it into your computer that you are installing Proxmox on.

Boot proxmox on your computer and then in the wizard choose install graphically. 

When choosing the filesystem, I went with EXT4 because