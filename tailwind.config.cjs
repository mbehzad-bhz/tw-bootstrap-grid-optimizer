const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ['./src/**/*.{js,jsx,ts,tsx,css,scss}', './index.html'],
  darkMode: 'media', // or 'media' or 'class',
  development: true,
  mode: "jit",
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tw-bootstrap-grid-optimizer')
  ],
});
