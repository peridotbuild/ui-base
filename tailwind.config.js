const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./demo/*.html'],
  safelist: [
    {
      pattern: /^pv2-.*/,
    },
    {
      pattern: /^(bg|text|font|border)-.*/,
      variants: ['hocus', 'hover', 'focus'],
    },
    {
      pattern:
        /^(-|)((items|flex|justify|max|antialiased|truncate|fixed|whitespace|rounded|shadow|space)|((p|m)(x|y|l|b|r|t|)-)).*/,
      variants: ['sm', 'md'],
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('hocus', ['&:hover', '&:focus']);
    }),
  ],
};
