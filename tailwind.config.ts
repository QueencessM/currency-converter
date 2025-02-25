import type { Config } from 'tailwindcss';

// https://nextjs.org/docs/app/building-your-application/optimizing/fonts#with-tailwind-css
const config: Config = {
	content: [
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				adlam: ['var(--font-adlam)'],
				nunito: ['var(--font-nunito)'],
			},
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
			},
            width: {
                screen: '100dvw',
            },
            height: {
                screen: '100dvh',
            },
		},
	},
	plugins: [],
};

export default config;