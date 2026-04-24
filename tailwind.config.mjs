export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        forest: '#2E7D32',
        leaf: '#4CAF50',
        sage: '#81C784',
        mist: '#F1F8F1',
        bark: '#3E2723',
        clay: '#BCAAA4',
        cream: 'rgb(250 250 247 / <alpha-value>)',  // ← fixes bg-cream/98 too
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      transitionDuration: {
        400: '400ms',  // ← fixes duration-400
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeUp: {
          'from': { opacity: '0', transform: 'translateY(22px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
};