module.exports = {
  content: [
    './index.html',
    './imprint.html',
    './privacy.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'hsl(var(--bg))',
        surface: 'hsl(var(--surface))',
        text: 'hsl(var(--text))',
        muted: 'hsl(var(--muted))',
        accent: 'hsl(var(--accent))',
        'accent-strong': 'hsl(var(--accent-strong))',
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', 'sans-serif'],
        serif: ['"IBM Plex Serif"', 'serif'],
      },
      boxShadow: {
        soft: '0 16px 40px -20px rgba(0, 0, 0, 0.75)',
        glow: '0 0 0 1px rgba(255, 255, 255, 0.04), 0 25px 50px -30px rgba(0, 0, 0, 0.9)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: 0, transform: 'translateY(18px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: 0.65 },
          '50%': { opacity: 1 },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s ease-out both',
        'pulse-soft': 'pulse-soft 3.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
