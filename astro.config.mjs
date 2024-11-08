// @ts-check
import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  experimental: {
    directRenderScript: true,
  },
  output: "server",
  adapter: vercel({ imageService: true }),
});
