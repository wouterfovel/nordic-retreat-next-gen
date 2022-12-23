import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  css: ['@/assets/css/roboto.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    [
      '@storyblok/nuxt',
      {
        accessToken: 'oJawF4KpCLNrdHws9Yqp9gtt',
        bridge: true,
      },
    ],
    '@nuxtjs/tailwindcss',
  ],
  runtimeConfig: {
    // these variables are overridden by .env
    // only available server-side
    public: {
      // also available client-side
    },
  },
});
