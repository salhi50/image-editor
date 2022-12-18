/**
 * brightness
 * contrast
 * grayscale
 * saturate
 * sepia
 * invert
 */

const adjusmentTools = [
    {
        name: 'brightness',
        range: {
            default: 100,
            min: 0,
            max: 200
        }
    },
    {
        name: 'contrast',
        range: {
            default: 100,
            min: 0,
            max: 200
        }
    },
    {
        name: 'grayscale',
        range: {
            default: 0,
            min: 0,
            max: 100
        }
    },
    {
        name: 'saturate',
        range: {
            default: 100,
            min: 0,
            max: 200
        }
    },
    {
        name: 'sepia',
        range: {
            default: 0,
            min: 0,
            max: 100
        }
    },
    {
        name: 'invert',
        range: {
            default: 0,
            min: 0,
            max: 100
        }
    },
]
export {adjusmentTools};