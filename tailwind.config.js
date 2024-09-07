/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
module.exports = {
  theme: {
    extend: {
      backgroundImage: {
        'custom-ellipse': 'radial-gradient(35.19% 35.19% at 50% 50%, rgba(59, 149, 255, 0.17) 0%, rgba(28, 106, 197, 0) 100%)',
      },
    },
  },
}