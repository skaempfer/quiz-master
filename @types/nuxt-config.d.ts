import type { ModuleOptions as PrimeVueModuleOptions } from '@primevue/nuxt-module'
import type { ModuleOptions as FontsModuleOptions } from '@nuxt/fonts'
import type { ModuleOptions as TailwindModuleOptions } from '@nuxtjs/tailwindcss'

declare module '@nuxt/schema' {
  interface DefineNuxtConfig {
    fonts?: FontsModuleOptions
    primevue?: PrimeVueModuleOptions
    tailwindcss?: TailwindModuleOptions
  }
}
