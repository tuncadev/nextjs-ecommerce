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
				secondaryBackground: "var(--secondary-background)",
				secondaryForeground: "var(--secondary-foreground)",
				customGreen: "var(--customGreen)",
				customRed: "var(--customRed)",
      },

		},
  },
  plugins: [
    plugin(),
  ],
};
