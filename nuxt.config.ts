import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  css: ['@/assets/css/roboto.css'],
  modules: [
    [
      '@storyblok/nuxt',
      {
        accessToken: 'oJawF4KpCLNrdHws9Yqp9gtt',
      },
    ],
    '@nuxtjs/tailwindcss',
  ],
});
