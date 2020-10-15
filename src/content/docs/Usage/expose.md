---
slug: "Commands/Basic command"
title: "Expose a local webserver to the internet "
---

<br>
If you don't know what port your web server is listening on, it's probably port 8000, the default for HTTP.

Example:  Expose a web server on port 8000 of your local machine to the internet. <br /> <br />
<divs style="background-color:black;color:white;padding:10px;font-size: 105%;clear: left;display: table;justify-content: left align-items: left; flex-direction: column;">$ loophole 8000 </div>


## Flags:


### 1. Custom Subdomain Names 

Loophole assigns random hexadecimal names to the HTTP tunnels it opens for you. This is okay for one-time personal uses. But if you're displaying the URL at a hackathon or integrating with a third-party webhook, it can be frustrating if the tunnel name changes or is difficult to read. 

You can specify a custom subdomain for your tunnel URL with the --hostname flag

<b> Usage : </b>

<divs style="background-color:black;color:white;padding:10px;font-size: 105%;clear: left;display: table;justify-content: left align-items: left; flex-direction: column;">$ loophole 8000 --hostname testmywebsite  </div>

### 2. Verbose Mode

Verbose mode flag helps you understand loophole in a greater context. IT provides the verbose output for the command used along.

<divs style="background-color:black;color:white;padding:10px;font-size: 105%;clear: left;display: table;justify-content: left align-items: left; flex-direction: column;">$ loophole 8000 --verbose </div>

### 3. Current Loophole Version

Version flag provides the current installed version of Loophole in your local machine. This flag can be used directly without any command or any parameter as below:

<divs style="background-color:black;color:white;padding:10px;font-size: 105%;clear: left;display: table;justify-content: left align-items: left; flex-direction: column;">$ loophole --version </div>