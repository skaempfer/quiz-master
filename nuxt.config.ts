import Aura from '@primevue/themes/aura'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxt/fonts',
    '@primevue/nuxt-module',
  ],
  fonts: {
    defaults: {
      preload: true,
      styles: [
        'normal',
        'italic',
        'oblique',
      ]
    }
  },
  primevue: {
    options: {
      theme: {
        preset: Aura,
      }
    }
  }
})
