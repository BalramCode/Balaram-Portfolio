/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(222 30% 18%)",
        background: "hsl(222 47% 6%)",
        foreground: "hsl(210 20% 96%)",
        primary: "hsl(190 100% 50%)",
        secondary: "hsl(222 30% 14%)",
        muted: "hsl(222 30% 14%)",
        accent: "hsl(258 90% 66%)",
      },
    },
  },
  plugins: [],
};
