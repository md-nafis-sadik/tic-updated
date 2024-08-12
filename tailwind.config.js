/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "pageheader-bg": "url('/images/bg.jpg')",
        "about-bg": "url('/images/about/bgShape.svg')",
        "overview-bg": "url('/images/sponsor/overviewBg.svg')",
        "service-bg": "url('/images/service/01.jpg')",
        "hero-bg": "url('/images/bg/bg4.png')",
      },
      colors: {
        graydark: "#4a5568",
        boxdark: "#24303F",
        bodydark: "#AEB7C0",
        bodydark1: "#DEE4EE",
        bodydark2: "#8A99AF",
        customGray: "#1011151a",
        customOrg: "#f16126",
        dipOrg: "rgb(241, 97, 38)",
        customGrayDark: "#555",
        midDark: "#101115",
        bg_green: "rgb(38, 201, 118)",
        bg_dipdark: "#212529",
        bg_white: "rgb(255, 255, 255)",
        deep_custom_gray: "#66666685",
        custom_white: "rgba(255, 255, 255, 0.87)",
        custom_pink: "#ff70d2",
        custom_purple: "#8b74ff",
        custom_yellow: "#fdca92",
        custom_light_dark: "#0a0606",
      },
      boxShadow: {
        standard:
          "0px 2px 3px -1px rgba(0, 0, 0, 0.1), 0px 1px 0px 0px rgba(25, 28, 33, 0.02), 0px 0px 0px 1px rgba(25, 28, 33, 0.08)",
      },
      screens: {
        "max-575px": { max: "575px" },
        "max-654px": { max: "654px" },
        "max-991px": { max: "991px" },
        "min-992px": { min: "992px" },
        "max-767px": { max: "767px" },
        "max-1199px": { max: "1199px" },
        "min-1200px": { min: "1200px" },
        "max-1238px": { max: "1238px" },
      },
      width: {
        "10px": "10px",
        "25px": "25px",
        150: "150px",
        "220px": "220px",
        "70%": "70%",
        "84%": "84%",
      },
      maxWidth: {
        "1/4%": "25%",
      },
      minWidth: {
        "1/4%": "25%",
      },
      height: {
        "2px": "2px",
      },
      flexDirection: {
        "row-important": "row",
      },
      fontSize: {
        "5px": "5px",
        "10px": "10px",
        "13px": "13px",
        "15px": "15px",
        "20px": "20px",
        "25px": "25px",
        "30px": "30px",
      },
      spacing: {
        "5px": "5px",
        "10px": "10px",
        15: "15px",
        25: "25px",
        17: "17px",
      },
      padding: {
        "3px": "3px",
        "5px": "5px",
        "6px": "6px",
        "10px": "10px",
        "15px": "15px",
        "20px": "20px",
      },
      margin: {
        "10px": "10px",
        "15px": "15px",
      },
      inset: {
        "4%": "4%",
        "20%": "20%",
        "39.8%": "39.8%",
        "54%": "54%",
      },
      lineHeight: {
        "c-1.3": "1.3",
      },
      borderRadius: {
        "custom-tl-2": "2px", // Top-left corner
        "custom-tr-0": "0px", // Top-right corner
        "custom-br-0": "0px", // Bottom-right corner
        "custom-bl-2": "2px", // Bottom-left corner
      },
      animation: {
        "infinite-scroll": "infinite-scroll 25s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "wireframe"],
  },
};
