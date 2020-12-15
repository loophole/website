---
type: blog
slug: get-started-with-loophole
title: Get Started with Loophole!
author: Aman Kalra
author_title: Loophole Core Team
author_url: https://github.com/amankalra172
author_image_url: https://avatars2.githubusercontent.com/u/49478659?v=4
tags: [quickstart, tunnel]
---

Aspire to expose your localhost to the Internet with minimal effort? Do you wish to avoid going through the tedious deployment process? Let me introduce you to Loophole. 

<!-- truncate -->

**So, what's Loophole?**

In simple words, Loophole allows you to make your Web application public without actually deploying on a cloud service. It provides a user-friendly domain that you can share with your remote users/friends/teammates to try/use your WebApp. 

**Let's give it a try!**

Firstly, create an account with Loophole . By creating an account, you get access to all the features loophole provides in its beta version. Next, [Download the latest version of Loophole here.](/download)

**Getting Started**
 
In windows, click the loophole.zip file to unzip. 

For Mac and Linux, use terminal with the following command:

 
```bash
$ unzip /path/to/loophole.zip
```

**Authenticating Loophole CLI for all feature access**

Once you've signed up, you need to configure loophole with the authtoken.with authtoken, you get access to account-only features. Loophole has a simple 'account' command to make this easy. Under the hood, the login command adds (or modify) the authtoken property in your loophole configuration file. 

![Authentication](https://media.giphy.com/media/S5Q7Hbp9kedjGJZqPb/giphy.gif)

**Running our local server project**

Meanwhile, we need to have a webapp running. Here we consider a simple gatsby server for representation purposes.

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
Now all we have to do is let Loophole know the port our local server is running on! After authentication,follow the below instructions:


![Authentication](https://media.giphy.com/media/9tZZ0SznwTWR0r0xUq/giphy.gif)


:::tip Tip
If your app is running on a different port, just replace 8000 with your respective port.
:::

**Example** - For an app running on port 3000, the command will be 

```bash
$ loophole http 3000

# or for 1.0.0-beta.8 and older
$ loophole 3000
```
and it fires a HTTPS secured tunnel for you.

Your website is now **LIVE**!

**Share the URL with people you want to show your web application. It is that simple**

There are endless possibilities with Loophole. You can create a custom domain, or share a QR code than a URL. I would cover those features individually in other blog posts. For more details, you can refer to the [documentation](/docs) here. 



