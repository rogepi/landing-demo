/** @type {import("prettier").Config} */
const config = {
  singleQuote: true,
  semi: false,
  plugins: [
    require.resolve('prettier-plugin-tailwindcss'),
    require.resolve('prettier-plugin-packagejson'),
  ],
}

module.exports = config