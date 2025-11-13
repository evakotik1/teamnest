    /** @type {import('tailwindcss').Config} */
    module.exports = {
        content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        ],
        theme: {
        extend: {
            fontFamily: {
            unbounded: ['var(--font-unbounded)', 'sans-serif'], // ТОЛЬКО для unbounded
            // sans останется как Inter (по умолчанию)
            },
        },
        },
    }