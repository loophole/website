---
slug: webdav
title: webdav
---

:::note
Introduced in [1.0.0-beta.11](https://github.com/loophole/cli/releases/tag/1.0.0-beta.11)
:::

Expose given directory to the public via WebDav

### Synopsis

Exposes local directory to the public via WebDav via loophole tunnel.

This can then be even mounted on other machines in the Windows Explorer, macOS Finder, Linux Gnome Files or Linux KDE Konqueror etc.

To expose local directory via webdav (e.g. `/data/my-data`) simply use `loophole webdav /data/my-data`.

## Usage

```bash
loophole webdav <path> [flags]
```

### Options

```
  -p, --basic-auth-password string   Basic authentication password to protect site with
  -u, --basic-auth-username string   Basic authentication username to protect site with
  -h, --help                         help for webdav
      --hostname string              custom hostname you want to run service on
  -i, --identity-file string         private key path (default "$HOME/.loophole/.ssh/id_rsa")
      --qr                           use if you want a QR version of your url to be shown
```

### Options inherited from parent commands

```
  -v, --verbose   verbose output
```
