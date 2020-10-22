---
slug: "commands/expose"
title: "Expose a local webserver to the internet "
---

If you don't know what port your web server is listening on, it's probably port 8000, the default for HTTP.

Example:  Expose a web server on port 8000 of your local machine to the internet.

```bash
$ loophole 8000
```


## Flags:


### Custom Subdomain Names 

Loophole assigns random hexadecimal names to the HTTP tunnels it opens for you. This is okay for one-time personal uses. But if you're displaying the URL at a hackathon or integrating with a third-party webhook, it can be frustrating if the tunnel name changes or is difficult to read. 

You can specify a custom subdomain for your tunnel URL with the `--hostname` flag

Usage:
```bash
$ loophole 8000 --hostname testmywebsite
```


### QR Version

Loopole URLs can now be incorporated as QR codes too. Simply use the QR flag while defining the port number. Share this QR code at an event or a seminar with 100s of users simultaneously.

```bash
$ loophole 8000 --qr
```

### Identity File

Identity file flag lets you add the private key path. Default path will always be shown in the CLI.

```bash
 --i, --identity-file string
```

### Verbose Mode

Verbose mode flag helps you understand loophole in a greater context. It provides the verbose output for the command used along.

```bash
$ loophole 8000 --verbose
```
or you could simply use --v 

```bash
$ loophole 8000 --v
```

### Current Loophole Version

Version flag provides the current installed version of Loophole in your local machine. This flag can be used directly without any command or any parameter as below:

```bash
$ loophole --version
```