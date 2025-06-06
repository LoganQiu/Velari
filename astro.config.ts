import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import remarkAlert from "remark-github-blockquote-alert";
import { SITE } from "./src/config";

// https://astro.build/config
export default defineConfig({
  site: SITE.website,
  integrations: [sitemap({
    filter: page => SITE.showArchives || !page.endsWith("/archives"),
  }), partytown({ config: { forward: ['dataLayer.push', 'gtag'] } })],
  markdown: {
    remarkPlugins: [remarkMath, remarkAlert],
    rehypePlugins: [rehypeKatex],
    shikiConfig: {
      // For more themes, visit https://shiki.style/themes
      themes: { light: "one-light", dark: "night-owl" },
      wrap: true,
    },
  },
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },
  image: {
    // Used for all Markdown images; not configurable per-image
    // Used for all `<Image />` and `<Picture />` components unless overridden with a prop
    experimentalLayout: "responsive",
  },
  experimental: {
    svg: true,
    responsiveImages: true,
    preserveScriptOrder: true,
  },
});