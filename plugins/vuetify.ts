import { createVuetify } from "vuetify";
import { light, dark } from "../utils/themes"
import { defaults } from "../utils/defaults"
import { aliases, custom } from "../utils/customIcons"

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    defaults,
    theme: {
      themes: {
        light,
        dark
      }
    },
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
