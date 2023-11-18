/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				cinzel: ["Cinzel", "serif"],
			},
			colors: {
				"primary-cl": "#ebf2fa",
				"secondary-cl": "#cae9ff",
				"logo-cl": "#3a86ff",
			},
		},
	},
	plugins: [],
};
