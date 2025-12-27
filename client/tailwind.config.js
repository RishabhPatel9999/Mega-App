/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          primary: { DEFAULT: "#6366f1" },
          ink: "#0f172a"
        },
        boxShadow: {
          soft: "0 8px 30px rgba(0,0,0,0.08)"
        },
        keyframes: {
          fadeIn: { "0%": {opacity: 0, transform: "translateY(6px)"}, "100%": {opacity: 1, transform: "translateY(0)" } },
          pop: { "0%": { transform: "scale(.98)", opacity:.6}, "100%": { transform: "scale(1)", opacity:1 } }
        },
        animation: {
          fadeIn: "fadeIn .4s ease-out both",
          pop: "pop .15s ease-out both"
        }
      },
    },
    plugins: [],
  }
  