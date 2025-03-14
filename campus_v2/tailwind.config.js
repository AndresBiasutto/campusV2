/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        light: "4px 4px 0 #09121A",
        dark: "4px 4px 0 #BFAEA8"
      },
      colors: {
        light: {
          background: "#F4FFFE",
          primary: "#F2BE5C",
          secondary: "#F2A71B",
          text: "#251A10",
          border: "#F27405",
          accent: "#F27405",
          redBtn: "#FDA4AF",
          redBtnHvr: "#F87171",
          blueBtn: "#7DD3FC",
          blueBtnHvr: "#38BDF8",
          boxShadow: {
            custom: "4px 4px 0 #09121A",
          },
        },
        dark: {
          background: "#09121A",
          primary: "#254159",
          secondary: "#325573",
          text: "#F7FFFE",
          border: "#BFAEA8",
          accent: "#BF8756",
          redBtn: "#FDA4AF",
          redBtnHvr: "#F87171",
          blueBtn: "#7DD3FC",
          blueBtnHvr: "#38BDF8",
        },
        // light: {
        //   background: "#F2B705",
        //   lightBackground: "#F2E0C9",
        //   text: "#000000",
        //   primary: "#F2BE5C",
        //   secondary: "#F2CE1B",
        //   accent: "#F2C288",
        //   redBtn: "#FDA4AF",
        //   redBtnHvr: "#F87171",
        //   blueBtn: "#7DD3FC",
        //   blueBtnHvr: "#38BDF8",
        // },
        // dark: {
        //   background: "#0A3A40",
        //   darkBackground: "#042326",
        //   text: "#ffffff",
        //   primary: "#0F5959",
        //   secondary: "#1D7373",
        //   accent: "#107361",
        //   redBtn: "#991B1B",
        //   redBtnHvr: "#7F1D1D",
        //   blueBtn: "#075985",
        //   blueBtnHvr: "#0C4A6E",
        // },
      },
      fontFamily: {
        primaryRegular: ["Regular"],
        primaryMedium: ["Medium"],
        primaryBold: ["Bold"],
        primaryItalic: ["Italic"],
        primaryLight: ["Light"],
      },
    },
  },
};