import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f7ff',
          100: '#b3e5ff',
          200: '#80d4ff',
          300: '#4dc3ff',
          400: '#1ab3ff',
          500: '#00a3e0',
          600: '#0082b3',
          700: '#006186',
          800: '#004059',
          900: '#00202d',
        },
        accent: {
          50: '#fff3e6',
          100: '#ffd9b3',
          200: '#ffbf80',
          300: '#ffa64d',
          400: '#ff8c1a',
          500: '#ff6600',
          600: '#cc5200',
          700: '#993d00',
          800: '#662900',
          900: '#331400',
        },
        yellow: {
          500: '#ffd700',
        },
      },
    },
  },
  plugins: [],
}
export default config
