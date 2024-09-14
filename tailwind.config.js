/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				"great-vibes": ['"Great Vibes"', "cursive"],
				"zcool-xiaowei": ['"ZCOOL XiaoWei"', "sans-serif"],
				poppins: ['"Poppins"', "sans-serif"],
			},
			colors: {
				primary: "#ff9524",
				lightPrimary: "#fffae5",
				secondary: "#000000",
				backgroundColor: "#F8F8F8",
			},
			container: {
				center: true,
				padding: {
					DEFAULT: "1rem",
					sm: "2rem",
					lg: "3rem",
					xl: "4rem",
					"2xl": "5rem",
				},
			},
			fontSize: {
				BigFont: "20rem", // Custom font size
			},
		},
	},
	plugins: [],
};
