/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0b0b0c',
        paper: '#f2eee6',
        mute: '#8b8882',
        line: 'rgba(242,238,230,0.12)',
        accent: '#cfae6f',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'Times New Roman', 'serif'],
        sans: ['"Hanken Grotesk"', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      letterSpacing: { widest2: '0.28em' },
    },
  },
  plugins: [],
}
