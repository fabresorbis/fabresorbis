const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    purge: [
        './public/**/*.html',
        './src/**/*.vue',
    ],
    theme: {
        fontFamily: {
            'MyFont': ['"Roboto"', 'serif']
        },
        extend: {
            zIndex: {
                '2001': '2001',
                '2002': '2002'
            },
            height: {
                '4xl': '56rem'
            },
            minWidth: {
                '3xl': '48rem',
                'screen-xl': '1280px'
            },
            maxWidth: {
                '75': '18.75rem',
                '120': '30rem',
            },
            minHeight: {
                '75': '18.75rem',
                '120': '30rem',
                '4xl': '56rem'
            },
            maxHeight: {
                'xs': '20rem',
                '100': '25rem0'
            },
            backgroundPosition: {
                'center-center': 'center center'
            },
            transitionDuration: {
                '0': '0s',
                '600': '600ms'
            },
            gridRow: {
                '3': '3'
            },
            gridColumn: {
                '1-5': '1 / 5',
                '1-7': '1 / 7',
                '1-9': '1 / 9'
            },
            colors: {
                yellow: {
                    ...colors.yellow,
                    '400': '#ffce00'
                },
                blue: {
                    ...colors.blue,
                    '900': '#13304b'
                }
            },
            inset: {
                '5': '5%',
                '10': '10%',
                '20': '20%',
                '50': '50%'
            }
        }
    },
    variants: {},
    plugins: [],
}
