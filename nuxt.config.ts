import Aura from '@primevue/themes/aura'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: [
    '@nuxt/fonts',
    '@nuxtjs/tailwindcss',
    '@primevue/nuxt-module',
  ],
  css: [
    '~/assets/styles.scss',
    '~/assets/tailwind.css',
  ],
  postcss: {
    plugins: {
      'postcss-import': {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  ssr: false, // useLayout composable needs to be adjusted for SSR
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
        options: {
          darkModeSelector: '.app-dark',
        }
      }
    }
  }
})
