/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1f3fff',
          50: '#eef1ff',
          100: '#e0e5ff',
          200: '#c7d0ff',
          300: '#a5b3ff',
          400: '#8491ff',
          500: '#476bff',
          600: '#1f3fff', // Main brand color
          700: '#0026ff',
          800: '#001ce6',
          900: '#0016bd',
          950: '#000d70',
        },
        secondary: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
        },
        theme: {
          bg: 'var(--color-bg)',
          text: 'var(--color-text)',
        },
        neutral: {
          50: '#f5f5f5',
          900: '#1a1a1d',
          950: '#0f0f11',
        }
      },
      fontFamily: {
        display: ['Clash Display', 'Satoshi', 'system-ui', 'sans-serif'],
        body: ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'card-hover': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'glow': '0 0 15px rgba(31, 63, 255, 0.5)',
        'glow-sm': '0 0 10px rgba(31, 63, 255, 0.3)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}; 