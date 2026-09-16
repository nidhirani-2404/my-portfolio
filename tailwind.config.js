/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FBF8F1',
        canvas: '#F5F1E6',
        ink: '#0F0F0F',
        violet: {
          DEFAULT: '#6C5CE7',
          soft: '#C9C0FA',
          tint: '#EDE9FE',
        },
        sun: '#FFD84D',
        mint: '#3DDC84',
        sky: '#4EA8F5',
        coral: '#FF7A5C',
      },
      fontFamily: {
        display: ['Outfit', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        brut: '4px 4px 0 0 #0F0F0F',
        'brut-md': '6px 6px 0 0 #0F0F0F',
        'brut-lg': '8px 8px 0 0 #0F0F0F',
        'brut-sm': '3px 3px 0 0 #0F0F0F',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        marquee: 'marquee 32s linear infinite',
      },
    },
  },
  plugins: [],
}
