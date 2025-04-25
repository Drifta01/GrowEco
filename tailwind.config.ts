/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
theme: {
  extend: {
    "@layer base": {
      body: {
        backgroundColor: "#1e293b",
        color: "#ffffff",
      },
 
      h1: {
        fontSize: "2rem",
        fontWeight: "bold",
      },
      h2: {
        fontSize: "1.5rem",
        fontWeight: "bold",
      },
      h3: {
        fontSize: "1.25rem",
        fontWeight: "bold",
      },
      p: {
        fontSize: "1rem",
        lineHeight: "1.5",
      },
    },
  },
},
  plugins: [],
};
