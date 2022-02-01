---
type: blog
slug: choose-your-custom-domain
title: Choose your Custom Domains
author: Aman Kalra
author_title: Loophole Core Team
author_url: https://github.com/amankalra172
author_image_url: https://avatars2.githubusercontent.com/u/49478659?v=4
tags: [tunnel, hosting, custom domain, qrcode, webapp]
---

Web developers usually develop on localhost using their preferred tools and languages. They often utilize the local server to test the web apps. Have you come across a situation where you might need to showcase your work to a client or a colleague for feedback/progress? I am sure it wouldn't be worth the effort to deploy the web app after every tiny change on the site. Even worse, the time it takes to deploy these changes takes forever. 

<!-- truncate -->

Perhaps, you could use Loophole or similar services like Ngrok, Localhost.run, or Server. These services are reverse proxies that allow you to expose your local development server. For now, we focus on Loophole. Simply because it offers all of its premium services free of use in its current beta version. Follow along and learn how to put this into your toolbelt of applications.


**How to?**

Before we dive deep into using Loophole, let us have our web app running. If you do not have a web app to test, you could use a simple Node js app as shown below. This app is running on port 8000.

:::note Note
The webapp is running on port 8000
:::

```javascript
const os = require('os');
const express = require('express');

const port = process.env.PORT || 8000;
const app = express();

app.get('/*', function (req, res) {
  const hostname = os.hostname();
  res.json({hostname, version: '2'});
});

app.listen(port, () => {
  console.log(`demo-app listening on port ${port}`);
});
```

**Moving On!**

Now that our web app is running on our local server, let us start by downloading the right binary file of Loophole. This process is broken down into three simple steps:

1. [Download Loophole for your OS](/download)
2. Unpack it (Unzip).
3. Launch CMD and go to the file downloaded path.

Ta-dah! you are one step close now.

Here we will try establishing a loophole tunnel for Windows. It would be easy peasy for Linux and macOS too. I have moved the loophole file to my home directory. 

:::note Note
The custom domain name is reserved for the next 30 days under your account from the day of first usage. Whereas, random generated URLs are only valid for 60 minutes.
:::

**Now, let's play!**

Remember, our local web app was running on 8000 port. Let us share this with Loophole and see it's magic.

``` 
loophole 8000 --hostname <yourdomainname>
```


![Tunnel](/img/blog/loophole_12_domain.gif)


The flag ```--hostname``` lets you set a custom domain name. This is an ideal scenario while sharing it with the client and wouldn't prefer sharing a random generated domain URL. I have used the name ```qrtesting``` as my custom domain name. You are free to choose any name that you like. 



**QR code? Why not.**

While loophole is being used mainly for the testing environment, another ideal use case is to share locally created feedback forms to a large audience or survey forms for your upcoming product. To ease this process, you can now generate QR codes along with your custom domains by simply using 

```
loophole 8000 -qr --hostname <yourdomainname>
```

![Tunnel](/img/blog/loophole_12_domain_qr.gif)


This fires up a bunch of commands. notice, the link ```https://qrtesting.loophole.site``` points to our local port 8000 where our sample app is hosted. You can share this link with your friends and colleagues and have your server running locally.


:::tip Tip
The web url will be live till the time your local tunnel is running. It automatically terminates once loophole session is terminated. 
:::


If you have any questions or want to share your experience with us, feel free to write to us at loophole@main.dev. To see more on Loophole, head to [documentation](/docs) .

### Latest news from Loophole

Your support will keep us motivated to keep building Loophole. If you want to request a special feature or wish to share your feedback about Loophole, feel free to fill out the [google form](https://forms.gle/TYXKnZ8USbuox1ub8) or email us at loophole@main.dev.

Lastly, Loophole has pledged to never turn into a commerical business! To support our development, don't forget to [buy us a coffee or a cookie](https://www.buymeacoffee.com/loophole). We are also open for some beers. Cheers!