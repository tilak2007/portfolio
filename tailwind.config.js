/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#050505',
          surface: '#0A0A0A',
          card: '#0E0E0E',
          cardHover: '#141414',
          subtle: '#181818',
          border: 'rgba(255, 255, 255, 0.07)',
          borderHover: 'rgba(220, 38, 38, 0.4)',
          muted: '#A1A1AA',
          text: '#FFFFFF',
        },
        crimson: {
          50: '#FEF2F2',
          100: '#FEE2E2',
          200: '#FECACA',
          300: '#FCA5A5',
          400: '#F87171',
          500: '#EF4444',
          600: '#DC2626', // Primary accent
          700: '#B91C1C',
          800: '#991B1B', // Secondary accent
          900: '#7F1D1D',
          950: '#450A0A',
          DEFAULT: '#DC2626',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
        display: ['Space Grotesk', 'Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.65)',
        'glow-red': '0 0 25px -4px rgba(220, 38, 38, 0.35)',
        'glow-red-subtle': '0 0 35px -8px rgba(220, 38, 38, 0.18)',
        'glow-red-lg': '0 0 50px -10px rgba(220, 38, 38, 0.45)',
        'card-depth': '0 20px 40px -15px rgba(0, 0, 0, 0.9), 0 0 1px 1px rgba(255, 255, 255, 0.05)',
      },
      backgroundImage: {
        'grid-pattern': "radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
        'grid-pattern-red': "radial-gradient(rgba(220, 38, 38, 0.12) 1px, transparent 1px)",
        'radial-crimson': "radial-gradient(circle at 50% 0%, rgba(220, 38, 38, 0.15), transparent 70%)",
        'radial-crimson-subtle': "radial-gradient(circle at 50% 50%, rgba(220, 38, 38, 0.06), transparent 70%)",
      },
      animation: {
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'float-reverse': 'floatReverse 7s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(1.5deg)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(10px) rotate(-1.5deg)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.85' },
        },
      }
    },
  },
  plugins: [],
}
