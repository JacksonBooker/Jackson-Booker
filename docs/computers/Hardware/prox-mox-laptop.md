---
title: How to Create a Proxmox Server With Old Laptop!
---

The laptop that I will be using is and Acer nitro 5. The specs are in the following photo. Something that makes this a good laptop for this server is that it has 16 GB's of RAM which will allow more VM's to run on the machine at once. 

![acer-specs](./img/acer-specs.png)

## Downloading Proxmox

The first step is to download the "Proxmox VE ISO Installer". You will want to download the latest version. For me that is 9.2. 

![proxmox-download](./img/proxmox-download.png)

Once that is downloaded, you can move on to booting Proxmox from you USB flash-drive. Download Balena Etcher, and select the ISO file that you just downloaded. Then select your thumb-drive as the target. 
**DO NOT SELECT YOUR C: DRIVE!!!**

![balanaetcher-photo.png](./img/balanaetcher-photo.png)

Safely eject your thumb drive and plug it into your computer that you are installing Proxmox on.

Boot Proxmox on your computer and then in the wizard choose install graphically. 

When choosing the file-system, I went with EXT4 because