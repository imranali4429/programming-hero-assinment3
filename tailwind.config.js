// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{html,js}", // adjust if needed
//     "./index.html",
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         manrope: ["Manrope", "sans-serif"], // new font
//       },
//     },
//   },
//   plugins: [require("daisyui")],
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
