module.exports = {
  docs: [
    "overview",
    {
      type: "category",
      label: "Commands",
      items: [
        {
          type: "category",
          label: "account",
          items: ["commands/account/login", "commands/account/logout"],
        },
        "commands/completion",
        "commands/http",
        "commands/path",
        "commands/webdav",
        "commands/help",
      ],
    },
    {
      type: "category",
      label: "Guides",
      items: ["guides/auth", "guides/expose"],
    },
    "faq",
  ],
};
