import { defineConfig } from "vitepress";

export const shared = defineConfig({
  title: " ",
  description:
    "Discover prayer spaces across Üsküdar University's campuses. Find detailed information, and get access to Quranic resources. Available in English and Turkish.",

  cleanUrls: true,

  sitemap: {
    hostname: "https://uskudarmescit.com",
    transformItems(items) {
      return items.filter((item) => !item.url.includes("migration"));
    },
  },

  /* prettier-ignore */
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicons/favicon.svg' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/favicons/favicon-small.png' }],
    ['meta', { name: 'theme-color', content: '#07BCB6' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'en' }],
    ['meta', { property: 'og:title', content: 'Üsküdar University Mescit | Pray, study, and learn.' }],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ['meta', { property: 'og:image', content: '/og/3.jpg' }],
    ['meta', { property: 'og:url', content: 'https://uskudarmescit.com/' }],
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.css' }],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.umd.js' }],
  ],

  themeConfig: {
    logo: { light: "/logos/logo-dark.svg", dark: "/logos/logo-light.svg" },

    /* socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],

    search: {
      provider: "algolia",
      options: {
        appId: "8J64VVRP8K",
        apiKey: "a18e2f4cc5665f6602c5631fd868adfd",
        indexName: "vitepress",
        locales: { ...zhSearch, ...ptSearch, ...ruSearch },
      },
    }, */
  },
});
