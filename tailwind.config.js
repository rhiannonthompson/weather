module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      "main-dark-blue": "#100E1D",
      "secondary-dark-blue": "#1E213A",
      "primary-gray": "#6E707A",
      "text-gray": "#A09FB1",
      "text-white": "#E7E7EB",
      "accent-yellow": "#FFEC65",
      "rain-blue": "#57A0EE",
      "black": "#000000",
    },
    extend: {
      fontFamily: {
        Raleway: ["Raleway", "sans-serif"],
       },
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "960px",
        // => @media (min-width: 1024px) { ... }

        xl: "1440px",
        // => @media (min-width: 1280px) { ... }
      },
      rotate: {
        'NE': '45deg',
        'E': '90deg',
        'SE': '135deg',
        'S': '180deg',
        'SW': '225deg',
        'W': '270deg',
        'NW': '315deg',
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
        94: "25rem",
        104: "26rem",
        112: "28rem",
        130: "30rem",
        138: "32rem",
        154: "36rem",
        172: "40rem",
        190: "48rem",
        206: "58rem",
        218: "64rem",
        224: "84rem",
        300: "100rem",
      },
      width: {
        "1%": "1%",
        "2%": "2%",
        "3%": "3%",
        "4%": "4%",
        "5%": "5%",
        "6%": "6%",
        "7%": "7%",
        "8%": "8%",
        "9%": "9%",
        "10%": "10%",
        "11%": "11%",
        "12%": "12%",
        "13%": "13%",
        "14%": "14%",
        "15%": "15%",
        "16%": "16%",
        "17%": "17%",
        "18%": "18%",
        "19%": "19%",
        "20%": "20%",
        "21%": "21%",
        "22%": "22%",
        "23%": "23%",
        "24%": "24%",
        "25%": "25%",
        "26%": "26%",
        "27%": "27%",
        "28%": "28%",
        "29%": "29%",
        "30%": "30%",
        "31%": "31%",
        "32%": "32%",
        "33%": "33%",
        "34%": "34%",
        "35%": "35%",
        "36%": "36%",
        "37%": "37%",
        "38%": "38%",
        "39%": "39%",
        "40%": "40%",
        "41%": "41%",
        "42%": "42%",
        "43%": "43%",
        "44%": "44%",
        "45%": "45%",
        "46%": "46%",
        "47%": "47%",
        "48%": "48%",
        "49%": "49%",
        "50%": "50%",
        "51%": "51%",
        "52%": "52%",
        "53%": "53%",
        "54%": "54%",
        "55%": "55%",
        "56%": "56%",
        "57%": "57%",
        "58%": "58%",
        "59%": "59%",
        "60%": "60%",
        "61%": "61%",
        "62%": "62%",
        "63%": "63%",
        "64%": "64%",
        "65%": "65%",
        "66%": "66%",
        "67%": "67%",
        "68%": "68%",
        "69%": "69%",
        "70%": "70%",
        "71%": "71%",
        "72%": "72%",
        "73%": "73%",
        "74%": "74%",
        "75%": "75%",
        "76%": "76%",
        "77%": "77%",
        "78%": "78%",
        "79%": "79%",
        "80%": "80%",
        "81%": "81%",
        "82%": "82%",
        "83%": "83%",
        "84%": "84%",
        "85%": "85%",
        "86%": "86%",
        "87%": "87%",
        "88%": "88%",
        "89%": "89%",
        "90%": "90%",
        "91%": "91%",
        "92%": "92%",
        "93%": "93%",
        "94%": "94%",
        "95%": "95%",
        "96%": "96%",
        "97%": "97%",
        "98%": "98%",
        "99%": "99%",
        "100%": "100%",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/images/Cloud-background.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
