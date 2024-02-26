import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

const config = {
  darkMode: ['class'],
  content: ['./components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}'],
  prefix: '',
  theme: {
    colors: {
      primary: '#E11D48',
      secondary: '#4F46E5',
      success: '#34D399',
      black: colors.slate[800],
      light: colors.slate[300],
      white: colors.white,
      red: colors.red,
      rose: colors.rose,
      slate: colors.slate,
      transparent: colors.transparent,
      green: colors.green
    },
    extend: {
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
} satisfies Config

export default config
