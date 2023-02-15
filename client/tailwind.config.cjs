/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin")

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        blink: {
          "0%, 100%": { opacity: 0.2 },
          "20%": { opacity: 0.7 }
        }
      },
      animation: {
        blink: "blink 1s linear infinite"
      }
    }
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          "animation-delay": (value) => ({ "animation-delay": value })
        },
        {
          values: theme("transitionDelay")
        }
      )
    })
  ]
}
