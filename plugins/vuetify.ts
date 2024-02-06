import { createVuetify } from "vuetify";
import { light, dark } from "../utils/themes";
import { defaults } from "../utils/defaults";
import { aliases, custom } from "../utils/customIcons";

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    // ssr: true,
    defaults,
    // add theme
    theme: {
      themes: {
        light,
        dark,
      },
      // add color variations
      //   variations: {
      //     colors: ["primary", "secondary"],
      //     lighten: 3,
      //     darken: 3,
      //   },
    },
    // Add the custom iconset
    icons: {
      defaultSet: "custom",
      aliases,
      sets: {
        custom,
      },
    },
  });

  app.vueApp.use(vuetify);
});
