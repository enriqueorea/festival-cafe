/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-purple": "#1A1734",
        "light-brown": "#AB855B",
        'yellow': '#f5d429',
        'black-pink': '#ed86b4',
        'dark-orange': '#e85428',
        'light-green': '#8aa127',
        'dark-green': '#257a37'
      },
    },
  },
  plugins: [],
};
