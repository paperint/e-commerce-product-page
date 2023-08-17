/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-orange": "hsl(26, 100%, 55%)",
        "primary-pale-orange": "hsl(25, 100%, 94%)",
        "neutral-verydarkblue": "hsl(220, 13%, 13%)",
        "neutral-darkgrayishblue": "hsl(219, 9%, 45%)",
        "neutral-grayishblue": "hsl(220, 14%, 75%)",
        "neutral-lightgrayishblue": "hsl(223, 64%, 98%)",
      },
    },
  },
  plugins: [],
};
