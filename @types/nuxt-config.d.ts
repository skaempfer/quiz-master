import type ModuleOptions from '@primevue/nuxt-module'

declare module '@nuxt/schema' {
  interface DefineNuxtConfig {
      primevue?: ModuleOptions;
  }
}
