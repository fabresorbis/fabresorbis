module.exports = {
    future: {
        // removeDeprecatedGapUtilities: true,
        // purgeLayersByDefault: true,
    },
    purge: false,
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
            minHeight: {
                '4xl': '56rem'
            },
            maxHeight: {
                'xs': '20rem'
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
            }
        }
    },
    variants: {},
    plugins: [],
}
