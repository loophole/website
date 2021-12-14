module.exports = {
  title: "Loophole",
  tagline: "Instant hosting, right from your local machine",
  customFields: {
    description:
      "No more hassle with port-forwarding, bypassing firewalls, or setting up dynamic DNS. Do what you are best at, CODING. We take care of the rest!",
  },
  url: "https://loophole.cloud",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/icon.png",
  organizationName: "loophole",
  projectName: "website",
  themeConfig: {
    navbar: {
      title: "",
      logo: {
        alt: "Loophole",
        src: "img/logo.png",
      },
      items: [
        {
          to: "download",
          label: "Download",
          position: "left",
        },
        {
          to: "docs",
          activeBasePath: "docs",
          label: "Documentation",
          position: "left",
        },
        {
          to: "blog",
          label: "Blog",
          position: "left",
        },
        {
          to: "/docs/faq",
          label: "FAQ",
          position: "left",
        },
      ],
    },
    footer: {
      style: "light",
      links: [
        {
          title: "Company",
          items: [
            {
              label: "Contact",
              to: "contact",
            },
            {
              label: "Terms and Conditions",
              to: "terms-and-conditions",
            },
            {
              label: "Privacy Policy",
              to: "privacy-policy",
            },
            {
              label: "Report Abuse",
              to: "report-abuse",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Github",
              href: "https://github.com/loophole/cli/discussions",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/loophole_cloud",
            },
            {
              label: "Product hunt",
              href: "https://www.producthunt.com/posts/loophole",
            },
          ],
        },
        {
          title: "Sponsor Us!",
          items: [
            {
              label: "Why Donate?",
              href: "https://github.com/loophole/cli/discussions",
            },
            {
              label: "Buy me a Coffee",
              href: "https://www.buymeacoffee.com/loophole",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Main Development GmbH. All rights reserved.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarCollapsible: false, // For now when we have small amount of documents
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/loophole/website/edit/master/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: "all",
            copyright: `Copyright © ${new Date().getFullYear()} Main Development GmbH. All rights reserved.`,
          },
          blogSidebarCount: "ALL",
          blogSidebarTitle: "All our posts",
          truncateMarker: /<!--\s*(truncate)\s*-->/,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          trailingSlash: false,
        },
      },
    ],
  ],
  plugins: ["docusaurus-plugin-sass", "@docusaurus/plugin-ideal-image"],
};
