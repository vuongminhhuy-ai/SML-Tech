import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#1A1F3C', // Navy Blue
                    light: '#2A2F4C',
                },
                accent: {
                    DEFAULT: '#00BCD4', // Cyan
                    hover: '#00ACC1',
                },
                success: '#28A745',
                warning: '#FF9800',
                danger: '#DC3545',
            },
            fontFamily: {
                sans: ['var(--font-open-sans)', 'system-ui', 'sans-serif'],
                heading: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
            },
            spacing: {
                'section': '4rem',
                'section-lg': '6rem',
            },
        },
    },
    plugins: [],
}
export default config
