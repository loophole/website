---
slug: "expose"
title: "Expose a local resource to the Internet"
---

If you don't know what port your web server is listening on, check in the logs of your running application, it should tell you that.
Some of the most common ones are 8080, 8000, 3000 or 1313.

Example: Expose a web server on port 8000 of your local machine to the Internet.

```bash
$ loophole http 8000

# or for 1.0.0-beta.8 and older
$ loophole 8000
```

Example: Expose a directory from your local machine to the Internet.
```bash
$ loophole dir ./my/local/path --hostname myhostname
```

### Custom Subdomain Names

Loophole assigns random hexadecimal names to the HTTP tunnels it opens for you. This is okay for one-time personal uses. But if you're displaying the URL at a hackathon or integrating with a third-party webhook, it can be frustrating if the tunnel name changes or is difficult to read.

You can specify a custom subdomain for your tunnel URL with the `--hostname` flag

Usage:

```bash
$ loophole http 8000 --hostname myhostname

# or for 1.0.0-beta.8 and older
$ loophole 8000 --hostname myhostname
```
```bash
$ loophole dir ./my/local/path --hostname myhostname
```

### Verbose Mode

Verbose mode flag helps you understand loophole in a greater context. It provides the verbose output for the command used along.

```bash
$ loophole http 8000 --verbose

# or for 1.0.0-beta.8 and older
$ loophole 8000 --verbose
```
```bash
$ loophole dir ./my/local/path --verbose
```

After starting the tunnel with the above command you'll start seeing some `DEBUG` level logs together with the default `INFO` entries.
It may be useful in case something is not working and you want to share more details to the Loophole dev team.