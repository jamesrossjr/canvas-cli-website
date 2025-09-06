/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/components/**/*.{js,vue,ts}',
    './app/pages/**/*.vue',
    './app/plugins/**/*.{js,ts}',
    './app/app.vue',
    './app/error.vue',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}