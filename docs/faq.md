---
id: faq
title: "Frequently Asked Questions"
---

### What does Loophole do?

Loophole is a service you can run on your local machine which allows you to securely expose services running on that machine to the web, even if they're behind a firewall or NAT. Currently, Loophole serves HTTP/HTTPs requests and plan to introduce TCP connections in future. As a bonus, all traffic from the internet to your local machine will be encrypted with SSL certificates using lets-encrypt. Authentication using Auth0 provides the security to your Loophole tunnels. Loophole lets you have multiple parallel tunnels running with custom host names at any given point along with end-to-end encryption.

### How secure is Loophole?

Loophole commits to offer a full end-to-end encryption for your tunnels. We are not able to inspect any of your traffic. Loophole relies on Let's Encrypt certificates for encrypting the https traffic. The certificates are negotiated by the loophole cli client and are stored on your local machine only. Our servers forward the raw TCP traffic to the cli on your machine and only there the traffic is decrypted. Additionally, any communication between the cli on your machine and our servers happens via secure SSH connections and are securely encrypted as well.

### Why is Loophole free?

We have thought enough about this and have decided to keep our services free for all. Yes you heard that right, even TLS and custom domains will be available for use. We took donations in the past, but handling the tax for that was a nightmare. So we stopped taking donations. We are happy if you are happy. Share your joy with us by reaching out to loophole@main.dev.

### Are there any limitations?

We do not enforce any limitations on concurrent connections, number of requests or bandwidth. Neither in the cli nor in our proxy servers. Please be gentle, though. We reserve the right to block malicious users.

### How do I share my files using Loophole?

Loophole lets you expose your [directory](/docs/commands/path) via secured tunnels or use the [Webdav](/docs/commands/webdav) option which can be mounted on the client machines. Read [docs](/docs) to create your first tunnel.

### How to setup TCP connection using Loophole?

Loophole currently supports http/https connections only. We have plans to host TCP protocol in our product roadmap. However, we cannot commit a release date yet. We will keep you updated via twitter for our latest release.

### Is it possible to use my own custom domain?

Loophole lets you use `https://www.<YourDomainName>.loophole.site`. However, it is currently not possible to redirect the traffic to your own domain.

### Is Loophole available for self-hosting?

We understand, sometimes it's better if your traffic is best through your serves rather than ours. The idea is to develop loophole from the ground up to be a completely self-hosted platform. We are also considering the setup to be as simple as possible. For now, however, we wish to stabilize our systems via the beta period. Hopefully to have self-hosting available next year.

### Is it possible to host a minecraft server using Loophole?

Minecraft uses raw TCP protocol. Currently, Loophole supports http/https only. Hosting TCP traffic is a few releases away unfortunately.

## Still left unanswered?

In case you have any questions or comments, feel free to reach out to us at loophole@main.dev.
