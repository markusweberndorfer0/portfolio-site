/** @type {import('tailwindcss').Config} */
// COLOR #062133

export default {
    content: [],
    theme: {
        extend: {
            colors: {
                'custom-blue': '#062133',
            },
            screens: {
                md: '810px',
            },
        },

        cursor: {
            default: 'url(assets/cursor.svg), default',
            pointer: 'url(assets/cursor.svg), pointer',
        },
    },
    plugins: [],
};
