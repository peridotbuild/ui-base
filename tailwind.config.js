const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./demo/*.html'],
  safelist: [
    {
      pattern: /pv2-.*/,
    },
    {
      pattern: /^antialiased|truncate|fixed|whitespace-normal$/,
    },
    {
      pattern: /^(-|)(p|m)(x|y|l|b|r|t|)-.*/,
    },
    {
      pattern: /^text-.*/,
    },
    {
      pattern: /^font-.*/,
    },
    {
      pattern: /^(bg|text)-(white|slate-100|blue-.*|green-.*)/,
    },
    {
      pattern: /^rounded-lg/,
    },
    {
      pattern: /^shadow-lg/,
    },
    {
      pattern: /^space.*/,
    },
    {
      pattern: /^border.*/,
    },
    {
      pattern: /^(max-|)(w|h)-.*/,
    },
    {
      pattern: /^(items|flex|justify)(|.*)/,
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
