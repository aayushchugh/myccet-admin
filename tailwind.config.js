/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#346CAC",
				secondary: "#ba2121",
			},
			fontFamily: {
				"nunito-sans": ["Nunito Sans", "sans-serif"],
			},
		},
	},

	plugins: [],
};
