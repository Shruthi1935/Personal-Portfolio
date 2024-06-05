///** @type {import('tailwindcss').Config} */
//export default {
  //content: ["./index.html",
  //"./src/**/*.{js,ts,jsx,tsx}",],
  //theme: {
    //extend: {},
  //},
  //plugins: [],
//}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};



