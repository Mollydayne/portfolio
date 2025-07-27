// tailwind.config.js

module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      animation: {
        slowspin: 'spin 90s linear infinite',
      },
      fontFamily: {
        grenze: ['"Grenze Gotisch"', 'serif'],
      },
    },
  },
  plugins: [],
}
