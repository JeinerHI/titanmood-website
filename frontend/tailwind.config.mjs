/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1349ec',
          dark: '#0f3bc5',
          light: '#3b6ef5',
        },
        bg: {
          white: '#ffffff',
          light: '#f8fafc',
          navy: '#0a0e1a',
        },
        surface: {
          navy: '#161c2d',
          'navy-light': '#1f293d',
          light: '#f1f5f9',
        },
        text: {
          primary: '#0f172a',
          secondary: '#64748b',
          white: '#ffffff',
          gray: '#94a3b8',
          dim: '#cbd5e1',
        },
        accent: {
          orange: '#ff6b35',
          success: '#10b981',
          warning: '#f59e0b',
          error: '#ef4444',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 2px 15px rgba(0, 0, 0, 0.08)',
        medium: '0 4px 25px rgba(0, 0, 0, 0.12)',
        strong: '0 8px 40px rgba(19, 73, 236, 0.15)',
        glow: '0 0 30px rgba(19, 73, 236, 0.3)',
      },
    },
  },
  plugins: [],
}