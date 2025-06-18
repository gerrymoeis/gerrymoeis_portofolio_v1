// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class', // atau 'media' jika Anda lebih suka mode gelap berbasis sistem operasi
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Tiny5", "sans-serif"],
        mono: ["var(--font-geist-mono)"]
      },
      // Luna colour palette (Windows XP)
      colors: {
        luna: {
          blue: "#0A246A",  // title bar blue
          blueLight: "#3A6EA5",
          silver: "#C0C0C0", // window background
          silverLight: "#E3E3E3",
          greenStart: "#4CA42C" // start button
        }
      },
      // colors: {
      //   primary: '#your-primary-color',
      //   secondary: '#your-secondary-color',
      // },
    },
  },
  plugins: [
    require('tailwindcss-animate'), // Jika Anda menggunakan tailwindcss-animate
    // tambahkan plugin lain di sini jika perlu
  ],
};
export default config;
