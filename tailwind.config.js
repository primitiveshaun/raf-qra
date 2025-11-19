/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryRed: "#C60C30",
        primaryBlue: "#002F5F",
        lightRed: "#FA0C3A",
        white: "#FFFFFF",
        gray: "#535353",
        bodyText: "#232B2A",
        link: "#000000",
      },
      fontFamily: {
        myriad: ["'Myriad Pro'", "sans-serif"],
      },
      fontSize: {
        h1: ["60px", { lineHeight: "1", letterSpacing: "1px" }],
        h2: ["44px", { lineHeight: "1", letterSpacing: "1px" }],
        h3: ["30px", { lineHeight: "1", letterSpacing: "0.5px" }],
        h4: ["24px", { lineHeight: "1", letterSpacing: "1px" }],
        h5: ["20px", { lineHeight: "1", letterSpacing: "1px" }],
        standfirst: ["24px", { lineHeight: "32px", letterSpacing: "0.5px" }],
        bold: ["20px", { lineHeight: "28px", letterSpacing: "1px" }],
        body: ["19px", { lineHeight: "24px", letterSpacing: "0.5px" }],
      },
      fontWeight: {
        black: "900",
        bold: "700",
        semibold: "600",
        regular: "400",
      },
    },
  },
  plugins: [],
};
