---
slug: path
title: path
---

:::note
Introduced in [1.0.0-beta.10](https://github.com/loophole/cli/releases/tag/1.0.0-beta.10)
:::

Expose given directory to the public

### Synopsis

Exposes local directory to the public via loophole tunnel.

To expose local directory (e.g. `/data/my-data`) simply use `loophole path /data/my-data`.

## Usage

```bash
loophole path <path> [flags]
```

### Options

```
  -p, --basic-auth-password string   Basic authentication password to protect site with
  -u, --basic-auth-username string   Basic authentication username to protect site with
  -h, --help                         help for path
      --hostname string              custom hostname you want to run service on
  -i, --identity-file string         private key path (default "$HOME/.loophole/.ssh/id_rsa")
      --qr                           use if you want a QR version of your url to be shown
```

### Options inherited from parent commands

```
  -v, --verbose   verbose output
```
