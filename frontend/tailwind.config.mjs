/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Primary (de la app móvil)
        primary: {
          DEFAULT: '#1349ec',   // Azul principal
          dark: '#0f3bc5',      // Hover/pressed
          light: '#3b6ef5',     // Variante más clara
        },
        
        // Backgrounds & Surfaces (adaptado para web)
        bg: {
          white: '#ffffff',      // Fondo principal web
          light: '#f8fafc',      // Secciones alternadas
          navy: '#0a0e1a',       // Hero, Footer (igual app)
        },
        
        surface: {
          navy: '#161c2d',       // Cards en dark sections
          'navy-light': '#1f293d', // Borders, hovers
          light: '#f1f5f9',      // Cards en light sections
        },
        
        // Text (de la app)
        text: {
          primary: '#0f172a',    // Texto principal (oscuro)
          secondary: '#64748b',  // Texto secundario
          white: '#ffffff',      // Texto en fondos oscuros
          gray: '#94a3b8',       // Labels
          dim: '#cbd5e1',        // Placeholders
        },
        
        // Accent (de la app + naranja para web)
        accent: {
          orange: '#ff6b35',     // CTA secundario, energía
          success: '#10b981',    // De la app
          warning: '#f59e0b',    // De la app
          error: '#ef4444',      // De la app
        },
      },
      
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      
      fontSize: {
        // Display sizes (títulos grandes)
        'display-xl': ['5rem', { lineHeight: '1', fontWeight: '800' }],         // 80px
        'display-lg': ['4rem', { lineHeight: '1.1', fontWeight: '700' }],       // 64px
        'display-md': ['3rem', { lineHeight: '1.2', fontWeight: '700' }],       // 48px
        'display-sm': ['2.25rem', { lineHeight: '1.3', fontWeight: '600' }],    // 36px
        
        // Heading sizes
        'heading-lg': ['2rem', { lineHeight: '1.3', fontWeight: '600' }],       // 32px
        'heading-md': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],     // 24px
        'heading-sm': ['1.25rem', { lineHeight: '1.5', fontWeight: '600' }],    // 20px
        
        // Body sizes
        'body-lg': ['1.125rem', { lineHeight: '1.7' }],  // 18px
        'body-md': ['1rem', { lineHeight: '1.6' }],      // 16px
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],  // 14px
        'body-xs': ['0.75rem', { lineHeight: '1.4' }],   // 12px
      },
      
      spacing: {
        '18': '4.5rem',   // 72px
        '88': '22rem',    // 352px
        '128': '32rem',   // 512px
      },
      
      borderRadius: {
        'xl': '1rem',     // 16px
        '2xl': '1.5rem',  // 24px
        '3xl': '2rem',    // 32px
      },
      
      boxShadow: {
        'soft': '0 2px 15px rgba(0, 0, 0, 0.08)',
        'medium': '0 4px 25px rgba(0, 0, 0, 0.12)',
        'strong': '0 8px 40px rgba(19, 73, 236, 0.15)',  // Sombra azul para CTAs
        'glow': '0 0 30px rgba(19, 73, 236, 0.3)',       // Efecto glow azul
      },
      
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
