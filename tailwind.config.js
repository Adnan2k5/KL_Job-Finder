/** @type {import('tailwindcss').Config} */
export const content = [
	"./index.html",
	"./src/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
	extend: {
		borderRadius: {
			lg: 'var(--radius)',
			md: 'calc(var(--radius) - 2px)',
			sm: 'calc(var(--radius) - 4px)'
		},
		colors: {}
	}
};
export const plugins = [require("tailwindcss-animate")];
