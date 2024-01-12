/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
        'color': {
          transparent: 'transparent',
          // 50: '#faf5ff',
          // 100: '#f3e8ff',
          // 200: '#e9d5ff',
          // 300: '#d8b4fe',
          // 400: '#c084fc',
          // 500: '#a855f7',
          // 600: '#9333ea',
          // 700: '#7e22ce',
          // 800: '#6b21a8',
          // 900: '#581c87',
          // 950: '#3b0764'
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        'accent': {
          //all: "#f97316"
          all: "#f59e0b"
        }
      }
		},
	},
	plugins: [],
}
