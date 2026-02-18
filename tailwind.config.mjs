// Tailwind v4: Most configuration moved to CSS (@theme in globals.css)
// This file only handles plugins that require JavaScript
// eslint-disable-next-line @typescript-eslint/no-require-imports
const flattenColorPalette = require("tailwindcss/lib/util/flattenColorPalette");
// mini-svg-data-uri is CommonJS (module.exports); ESM default import breaks at build
// eslint-disable-next-line @typescript-eslint/no-require-imports
const svgToDataUri = require("mini-svg-data-uri");

const config = {
  plugins: [
    // Custom plugin: Add CSS variables for all colors
    function addVariablesForColors({ addBase, theme }) {
      const colors = theme("colors");
      const allColors = flattenColorPalette(colors);
      const newVars = {};
      Object.entries(allColors).forEach(([key, val]) => {
        newVars[`--${key}`] = String(val);
      });

      addBase({
        ":root": newVars,
      });
    },
    // Custom plugin: bg-grid utilities
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "bg-grid": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="100" height="100" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { 
          values: flattenColorPalette(theme("backgroundColor")), 
          type: "color" 
        }
      );
    },
  ],
};

export default config;
