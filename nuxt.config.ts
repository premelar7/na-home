export default defineNuxtConfig({
  modules: [
    "@nuxt/devtools",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          "Noto Sans Thai": true,
          download: true,
          inject: true,
        },
      },
    ],
  ],
  css: ["~/assets/styles/main.scss", "vuetify/lib/styles/main.sass"],
  build: {
    transpile: ["vuetify"],
  },
});
