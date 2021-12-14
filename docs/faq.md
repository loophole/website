---
id: faq
title: "Frequently Asked Questions"
---

### What does Loophole do?

Loophole is a service you can run on your local machine which allows you to securely expose services running on that machine to the web, even if they're behind a firewall or NAT. Currently, Loophole serves HTTP/HTTPs requests and plan to introduce TCP connections in future. As a bonus, all traffic from the internet to your local machine will be encrypted with SSL certificates using lets-encrypt. Authentication using Auth0 provides the security to your Loophole tunnels. Loophole lets you have multiple parallel tunnels running with custom hostnames at any given point along with end-to-end encryption.

### How secure is Loophole?
Loophole commits to offer end-to-end SSL encryption for all tunnel services - your data is secure all the way to your local services. Additionally, Loophole uses Let's Encrypt to create certificates on the fly and stores them for you so that you don't have to set them up. 

### Why is Loophole free?
We have thought enough about this and have decided to keep our services free for all. Yes you heard that right, even TLS and custom domains will be available for use. However, in order to keep the services and continuous development on track, we urge you to [donate.](https://www.buymeacoffee.com/loophole) If our services have been useful to you, please feel free to buy us a coffee or contribute for a piece of pie we could enjoy.


### How do I share my files using Loophole?
Loophole lets you expose your [directory](/docs/commands/path) via secured tunnels or use the [Webdav](/docs/commands/webdav) option which can be mounted on the client machines. Read [docs](/docs) to create your first tunnel.

### How to setup TCP connection using Loophole?
Loophole currently supports http/https connection only. We have plans to host TCP protocol in our product roadmap. However, we cannot commit a release date yet. We will keep you updated via twitter for our latest release.

### Is it possible to use my own custom domain?

Loophole lets you use `https://www.<YourDomainName>.loophole.site`. However, it is currently not possible to redirect the traffic to your own domain.

### Is Loophole available for Self - hosting?

We understand, sometimes it's better if your traffic is best through your serves rather than ours. The idea is to develop loophole from the ground up to be a completely self-hosted platform. We are also considering the setup to be as simple as possible. For now, however, we wish to stabilize our systems via the beta period. Hopefully to have self-hosting available next year.

### Is it possible to host a minecraft server using Loophole?
Minecraft uses raw TCP protocol. Currently, Loophole supports http/https only. Hosting TCP traffic is a few releases away unfortunately. 

### How do I donate to Loophole?

We are extremely happy to hear that Loophole has been useful to you. Your donation is a contribution to maintaining Loophole’s secure and stable infrastructure active and updated.[You can buy us a coffee or a piece of our favorite pie.](https://www.buymeacoffee.com/loophole) In case you have any questions, feel free to reach out to us at loophole@main.dev.

