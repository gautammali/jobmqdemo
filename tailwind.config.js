/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    spacing: {
      px: '1px',
      0: '0',
      0.5: '2px',
      1: '4px',
      1.5: '6px',
      2: '8px',
      2.5: '10px',
      3: '12px',
      3.5: '14px',
      4: '16px',
      5: '20px',
      6: '24px',
      7: '28px',
      8: '32px',
      9: '36px',
      10: '40px',
      11: '44px',
      12: '48px',
      14: '56px',
      16: '64px',
      18: '72px',
      20: '80px',
      24: '96px',
      28: '112px',
      32: '128px',
      36: '144px',
      40: '160px',
      44: '176px',
      48: '192px',
      52: '208px',
      56: '224px',
      60: '240px',
      64: '256px',
      72: '288px',
      80: '320px',
      96: '384px',
    },
    container: {
      center: true,
    },
    screens: {
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '960px',
      // => @media (min-width: 960px) { ... }

      'lg': '1140px',
      // => @media (min-width: 1140px) { ... }

      'xl': '1440px',
      // => @media (min-width: 1440px) { ... }
    },

    extend: {
      colors: {
        primary: "#0076bd",
        'site-bg': {
          100: "#F3F3F3",
          200: "#d2f7f7",
          300: "#091732",
        },
        'site-border': {
          100: "#D1CFCF",
          200: "#C7C7C7",
          300: "#E9E9E9",
          400: "#E9E7E7",
        },
        'site-text': {
          100: "#3B5998",
          200: "#363535",
          300: "#082354",
        },
        'link': {
          100: "#0759A4",
         
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        public: ["Public Sans", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      fontSize: {
        'lg-22': ['22px', { lineHeight: '33px', letterSpacing: '-0.09px', fontWeight: '500' }],
      },
    },
  },
  plugins: [],
};
