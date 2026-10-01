import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          50: "#f5f5f6",
          100: "#e5e6e8",
          200: "#ced0d3",
          300: "#abaeb5",
          400: "#82868e",
          500: "#666973",
          600: "#585a62",
          700: "#4b4c53",
          800: "#424348",
          900: "#3a3b3f",
          950: "#242528",
        },
        primary: {
          50: "#e7f6ff",
          100: "#d3eeff",
          200: "#b0ddff",
          300: "#81c5ff",
          400: "#4f9dff",
          500: "#2872ff",
          600: "#0445ff",
          700: "#0043ff",
          800: "#003be2",
          900: "#0b36a4",
          950: "#071e5f",
        },
        secondary: {
          50: "#fdffe4",
          100: "#faffc5",
          200: "#f2ff92",
          300: "#e4ff54",
          400: "#d4fb20",
          500: "#cbfc01",
          600: "#8cb400",
          700: "#6a8902",
          800: "#546b09",
          900: "#465a0d",
          950: "#243300",
        },
        ink: "#040819",
        surface: "#ffffff",
        "surface-muted": "#fafafa",
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "var(--font-satoshi)", "system-ui", "sans-serif"],
        body: ["var(--font-satoshi)", "var(--font-poppins)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
        page: "1440px",
      },
      boxShadow: {
        card: "0 2px 8px rgba(0, 0, 0, 0.06), 0 8px 24px rgba(0, 0, 0, 0.04)",
        "card-hover": "0 8px 24px rgba(0, 0, 0, 0.06)",
      },
      dropShadow: {
        figure: [
          "0.52px 0.74px 3.04px rgba(0, 0, 0, 0.04)",
          "2.23px 3.19px 5.72px rgba(0, 0, 0, 0.06)",
          "5.38px 7.69px 9.57px rgba(0, 0, 0, 0.07)",
          "10.2px 14.58px 16.09px rgba(0, 0, 0, 0.08)",
          "16.95px 24.21px 24px rgba(0, 0, 0, 0.09)",
          "25.84px 36.91px 36px rgba(0, 0, 0, 0.1)",
          "37.12px 53.03px 56px rgba(0, 0, 0, 0.105)",
          "51.04px 72.91px 72px rgba(0, 0, 0, 0.13)",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
