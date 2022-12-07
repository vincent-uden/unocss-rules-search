import { defineConfig } from "astro/config";
import Unocss from "@unocss/astro";
import unoPresets from "./src/unoPresets.mjs";

// https://astro.build/config
import react from "@astrojs/react";


// https://astro.build/config
export default defineConfig({
  integrations: [
    Unocss({
      presets: unoPresets,
    }),
    react(),
  ],
});
