import type { ModuleOptions as PrimeVueModuleOptions } from '@primevue/nuxt-module'
import type { ModuleOptions as FontsModuleOptions } from '@nuxt/fonts'

declare module '@nuxt/schema' {
  interface DefineNuxtConfig {
    fonts?: FontsModuleOptions
    primevue?: PrimeVueModuleOptions
  }
}
