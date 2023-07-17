/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "vision-green": "#14E736",
        "vision-gray": "#D9D9D9",
        "vision-dark-gray": "#8F8F8F",
      },
    },
  },
  plugins: [],
};
