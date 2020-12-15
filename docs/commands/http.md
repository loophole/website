---
slug: http
title: http
---

:::caution
Syntax for this command changed between [1.0.0-beta.8](https://github.com/loophole/cli/releases/tag/1.0.0-beta.8) and [1.0.0-beta.10](https://github.com/loophole/cli/releases/tag/1.0.0-beta.10)*

\**(1.0.0-beta.9 is removed release)*
:::

Expose http server on given port to the public

### Synopsis

Exposes http server running locally, or on locally available machine to the public via loophole tunnel.

To expose server running locally on port 3000 simply use `loophole http 3000`.
To expose port running on some local host e.g. 192.168.1.20 use `loophole http <port> 192.168.1.20`

## Usage

```bash
loophole http <port> [host] [flags]
```

### Options

```
  -p, --basic-auth-password string   Basic authentication password to protect site with
  -u, --basic-auth-username string   Basic authentication username to protect site with
  -h, --help                         help for http
      --hostname string              custom hostname you want to run service on
  -i, --identity-file string         private key path (default "$HOME/.loophole/.ssh/id_rsa")
      --qr                           use if you want a QR version of your url to be shown
```

### Options inherited from parent commands

```
  -v, --verbose   verbose output
```
