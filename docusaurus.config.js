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
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/loophole/website/edit/master/docs/",
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
          cacheTime: 600 * 1000, // 600 sec - cache purge period
          changefreq: "weekly",
          priority: 0.5,
          trailingSlash: false,
        },
      },
    ],
  ],
  plugins: ["docusaurus-plugin-sass", "@docusaurus/plugin-ideal-image"],
};
