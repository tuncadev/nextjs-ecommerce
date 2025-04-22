import { plugin, content } from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    content(),
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(),
  ],
};
