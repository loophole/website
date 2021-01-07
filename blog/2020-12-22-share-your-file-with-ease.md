---
type: blog
slug: share-your-files-with-ease
title: Share your files with ease! 
author: Aman Kalra
author_title: Loophole Core Team
author_url: https://github.com/amankalra172
author_image_url: https://avatars2.githubusercontent.com/u/49478659?v=4
tags: [tunnel, hosting, file sharing, cli]
---

Developers often get caught in this problem: You have a huge file that you wish to transfer to your friend. The file is too big to be sent via email or instant messenger. 

<!-- truncate -->

A simple approach could be to upload it to Dropbox or similar cloud services, but what if you don't have/want an account with them, or just don't have enough storage freed up. Well, there could be a scenario where you want to bypass the big giants altogether that comes with huge security concerns. 


Instead of going through that hassle, you can save time by transferring files (big and small) to your friend by using Loophole. You do not need to encrypt your files before the transfer because they are being tunneled through a very secure SSH protocol.

**But wait, I have something more!** If you want to share multiple files with any number of users, you can add them to the specified folder location while your buddies can browse through that section of your PC. Sharing files can be a whole lot simpler and quicker with this method. All you have to do is drag and drop, and let them know they can now download the file(s).

![filesharing](/img/blog/2020/undraw_upload_87y9.svg)
*source: [undraw.co](https://undraw.co)*

## Setting up Loophole

### Download

We begin with setting up a loophole tunnel in Windows. [You can download the file here](/download). For Mac and Linux users, the process shouldn't be much different. Choose the relevant download option. 

Once downloaded, open the command prompt and go to the location where loophole.exe is stored *(often in the download folder)*.

### Login

Your loophole client needs to be authenticated before we can start the tunnel. For authentication, simply use the below command :

```
loophole account login
```

![Login](/img/blog/2020/loophole_12_login.gif)

## File Sharing

### Setting up the path

Once you are ready to begin hosting the file, use the following command to activate a secured HTTPS tunnel :

```
loophole path <path to the local directoy> 
```

![Login](/img/blog/2020/loophole_12_path.gif)

:::note Note
In order to give a longer path name, use double quotes ```" "```. Example : 
```
Loophole path "c:\Users\My File Manager" 
```
:::


### Secure Connection

Loophole by default provides an end to end encryoted and secured tunnel. You can furthur add your own authentication with a username and password that restricts the directory access control. To do so, simply use the flag ```-u``` and ```-p``` after the ```path``` command.

```
loophole path <path to the local directoy>  -u <username> -p <password>
```

![Login](/img/blog/2020/loophole_12_path_auth.gif)

### Directory Access

On the successful start of the tunnel, you can now share the URL generated with your friends. **This tunnel is HTTPS secured using Let's encrypt and is valid for a time period of 60 minutes.**

:::tip Tip
Make sure you give the right local directory path and have some files stored to test the transfer.
:::


### Bonus Tip!!

You can use the following command to generate a custom domain URL. The URL needs to be a minimum of 6 letters and must follow the domain naming convention. The domain name is reserved for a user for next 30 days to reuse.

``` 
loophole path <path to the local directory> --hostname <custom hostname>
```
![Login](/img/blog/2020/loophole_12_path_domain.gif)


Now you can share local files(big or small) with your friends over a secured tunnel in under 5 minutes. To know more about Loophole, head to www.loophole.cloud or explore our [docs!](/docs)
