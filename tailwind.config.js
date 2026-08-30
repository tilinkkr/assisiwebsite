module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        crimson: {
          DEFAULT: '#7A1C1C',
          dark: '#601515',
          soft: '#FDF2F4',
        },
        ochre: {
          DEFAULT: '#B45309',
          dark: '#8C6239',
          soft: '#FEFCE8',
        },
        charcoal: '#1A202C',
      },
      fontFamily: {
        sans: ['Manjari', 'Gayathri', 'Noto Sans Malayalam', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
