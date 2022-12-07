import { defineConfig } from "astro/config";
import Unocss from "@unocss/astro";
import { presetWebFonts, presetWind } from "unocss";
import { presetScrollbar } from "unocss-preset-scrollbar";

// https://astro.build/config
import react from "@astrojs/react";

export const unoPresets = [
  presetWind(),
  presetWebFonts({
    provider: "google",
    fonts: {
      sans: ["Ubuntu:300,400,500,700", "Roboto"],
      bread: ["Nunito"],
    },
  }),
  presetScrollbar(),
];

// https://astro.build/config
export default defineConfig({
  integrations: [
    Unocss({
      presets: unoPresets,
    }),
    react(),
  ],
  vite: {
    optimizeDeps: {
      exclude: ["astro"]
    }
  }
});
