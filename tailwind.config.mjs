import { plugin, content } from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    content(),
  ],
  theme: {
    extend: {
			colors: {
        primaryBackground: "var(--primary-background)",
        primaryForeground: "var(--primary-foreground)",
				customGreen: "var(--customGreen)",
				customRed: "var(--customRed)",
      },

		},
  },
  plugins: [
    plugin(),
  ],
};
