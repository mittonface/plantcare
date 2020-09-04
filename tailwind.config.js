module.exports = {
  purge: ["./src/components/*.tsx", "./src/pages/*.tsx"],
  theme: {
    extend: {},
  },
  future: {
    removeDeprecatedGapUtilities: true,
  },
  variants: {},
  plugins: [require("@tailwindcss/ui")],
}
