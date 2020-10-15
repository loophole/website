---
slug: "commands/Help"
title: "Instant help on CLI"
---

With help command, you can get an instant brief description on the command and the flags that can be used along.


```bash
$ loophole [command] --help
```

Example output:

```
Loophole - End to end TLS encrypted TCP communication between you and your clients

Usage:
  loophole <port> [host] [flags]
  loophole [command]

Available Commands:
  account     Parent for commands concerning your loophole account. Always use with one of the following: login, logout
  completion  Generates bash completion scripts
  help        Help about any command

Flags:
  -h, --help                   help for loophole
      --hostname string        custom hostname you want to run service on
  -i, --identity-file string   private key path (default "/home/lukasz/.ssh/id_rsa")
      --qr                     use if you want a QR version of your url to be shown
  -v, --verbose                verbose output
      --version                version for loophole

Use "loophole [command] --help" for more information about a command.
```