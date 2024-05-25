/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        main: {
          primary: "#2A85FF",
          1: "#F4F5F9",
        },
        neutral: {
          2: "#F4F4F6",
          4: "#D3D5DA",
          5: "#9EA3AE",
          6: "#6C727F",
          7: "#4D5461",
          8: "#212936",
          9: "#14151A",
        },
        sematic: {
          1: "#003B77",
          2: "#FF6A55",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        "krona-one": ["Krona One", "sans-serif"],
        "plus-jakarta-sans": ["Plus Jakarta Sans", "sans-serif"],
        mulish: ["Mulish", "sans-serif"],
      },
      aspectRatio: {
        "16/9": "16/9",
        "4/3": "4/3",
        "21/9": "21/9",
        "1/1": "1/1",
      },
      fontSize: {
        "12px": "12px",
        "14px": "14px",
        "16px": "16px",
        "18px": "18px",
        "20px": "20px",
        "24px": "24px",
        "28px": "28px",
        "32px": "32px",
        "36px": "36px",
        "40px": "40px",
        "44px": "44px",
        "48px": "48px",
        "52px": "52px",
        "56px": "56px",
        "60px": "60px",
        "64px": "64px",
        "68px": "68px",
        "72px": "72px",
        "76px": "76px",
        "80px": "80px",
        "84px": "84px",
        "88px": "88px",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
    plugin(function ({ addBase, theme }) {
      addBase({
        ".typo-s64-w400": {
          fontSize: "64px",
          fontWeight: "400",
          fontFamily: theme("fontFamily.krona-one"),
          textAlign: "left",
          letterSpacing: "-6px",
          "@media (max-width:768px )": {
            fontSize: "32px",
            letterSpacing: "-2px",
          },
        },
        ".typo-s48-w400": {
          fontSize: "48px",
          fontWeight: "400",
          fontFamily: theme("fontFamily.krona-one"),
          "@media (max-width:768px )": {
            fontSize: "24px",
          },
        },
        ".typo-s32-w400": {
          fontSize: "32px",
          fontWeight: "400",
          fontFamily: theme("fontFamily.krona-one"),
          "@media (max-width:768px )": {
            fontSize: "20px",
          },
        },
        ".typo-s24-w700": {
          fontSize: "24px",
          fontWeight: "700",
          fontFamily: theme("fontFamily.krona-one"),
          "@media (max-width:768px )": {
            fontSize: "20px",
          },
        },
        ".typo-s24-w500": {
          fontSize: "24px",
          fontWeight: "500",
          fontFamily: theme("fontFamily.krona-one"),
          textAlign: "left",
          "@media (max-width:768px )": {
            fontSize: "20px",
          },
        },
        ".typo-s24-w400": {
          fontSize: "24px",
          fontWeight: "400",
          fontFamily: theme("fontFamily.krona-one"),
          textAlign: "left",
          "@media (max-width:768px )": {
            fontSize: "20px",
          },
        },
        ".typo-s20-w700": {
          fontSize: "20px",
          fontWeight: "700",
          fontFamily: theme("fontFamily.plus-jakarta-sans"),
          "@media (max-width:768px )": {
            fontSize: "16px",
          },
        },
        ".typo-s20-w400": {
          fontSize: "20px",
          fontWeight: "400",
          fontFamily: theme("fontFamily.plus-jakarta-sans"),
          textAlign: "left",
          "@media (max-width:768px )": {
            fontSize: "16px",
          },
        },
        ".typo-s18-w700": {
          fontSize: "18px",
          fontWeight: "700",
          fontFamily: theme("fontFamily.plus-jakarta-sans"),
          color: theme("colors.neutral-4"),
        },
        ".typo-s18-w500": {
          fontSize: "18px",
          fontWeight: "400",
          fontFamily: theme("fontFamily.plus-jakarta-sans"),
          color: theme("colors.neutral-4"),
          "@media (max-width:768px )": {
            fontSize: "14px",
          },
        },
        ".typo-s18-w400": {
          fontSize: "18px",
          fontWeight: "400",
          fontFamily: theme("fontFamily.plus-jakarta-sans"),
          color: theme("colors.neutral-7"),
        },
        ".typo-s16-w500": {
          fontSize: "16px",
          fontWeight: "500",
          fontFamily: theme("fontFamily.plus-jakarta-sans"),
          "@media (max-width:768px )": {
            fontSize: "14px",
          },
        },
        ".typo-s16-w700": {
          fontSize: "16px",
          fontWeight: "700",
          fontFamily: theme("fontFamily.plus-jakarta-sans"),
          "@media (max-width:768px )": {
            fontSize: "14px",
          },
        },
        ".typo-s16-w400": {
          fontSize: "16px",
          fontWeight: "400",
          fontFamily: theme("fontFamily.plus-jakarta-sans"),
          "@media (max-width:768px )": {
            fontSize: "14px",
          },
        },
        ".typo-s14-w700": {
          fontSize: "14px",
          fontWeight: "700",
          fontFamily: theme("fontFamily.plus-jakarta-sans"),
          "@media (max-width:768px )": {
            fontSize: "12px",
          },
        },
        ".typo-s14-w500": {
          fontSize: "14px",
          fontWeight: "500",
          fontFamily: theme("fontFamily.plus-jakarta-sans"),
        },
        ".typo-s14-w400": {
          fontSize: "14px",
          fontWeight: "400",
          fontFamily: theme("fontFamily.plus-jakarta-sans"),
        },
        ".typo-s12-w700": {
          fontSize: "12px",
          fontWeight: "700",
          fontFamily: theme("fontFamily.plus-jakarta-sans"),
        },
        ".typo-s12-w500": {
          fontSize: "12px",
          fontWeight: "500",
          fontFamily: theme("fontFamily.plus-jakarta-sans"),
        },
        ".typo-s12-w400": {
          fontSize: "12px",
          fontWeight: "400",
          fontFamily: theme("fontFamily.plus-jakarta-sans"),
        },
      });
    }),
  ],
};
