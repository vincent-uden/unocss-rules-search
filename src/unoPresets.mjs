import { presetWebFonts, presetWind } from "unocss";
import { presetScrollbar } from "unocss-preset-scrollbar";

export default [
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