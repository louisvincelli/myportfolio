// const config = {
//   plugins: ["@tailwindcss/postcss"],
// };
//required for turbopack ^^^^^^^

// const config = {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//   },
// }

// export default config;
//required for webpack^^^^^^^


const config= {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
}

export default config;
