---
slug: "faq"
title: "FAQ"
order: 10
---

### Frequently Asked Questions

### What even is Loophole?

Loophole is a service you can run on your local machine which allows you to securely expose services running on that machine to the web, even if they're behind a firewall or NAT. Currently, Loophole will work for any TCP Service, whether it's a database like MongoDB, or a NodeJS app serving HTTP requests. As a bonus, all traffic from the internet to your local machine will be encrypted with SSL certificates using lets-encrypt. Authentication using Auth0 provides the security to your Loophole Tunnels.

### What information is stored about my tunnels?

Loophole does not log or store any data transmitted through your tunneled connections. The tunnel is end to end encrypted from user to the client end. Loophole does log some information about the connections which are used for debugging purposes and metrics like the name of the tunnel and the duration of connections.

### How much does Loophole Cost?

Right now, during the Beta period, Loophole is completely free for unlimited use - we want to test our infrastructure and make sure your Loophole Tunnels load as quickly as possible. In the future, our goal is to make Loophole the most affordable and reliable solution of its kind on the market.

### Is Loophole available for Self - hosting?

We understand, sometimes it's better if your traffic is best through your serves rather than ours. The idea is to develop loophole from the ground up to be a completely self-hosted platform. We are also considering the setup to be as simple as possible. For now, however, we wish to stabilize our systems via the beta period. Hopefully to have self-hosting available next year.
