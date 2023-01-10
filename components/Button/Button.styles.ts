import { css } from '@emotion/css';

import getThemedColor from '@/helpers/getThemedColor';
import type { ButtonProps } from './Button.types';

export const btnContainer = (
    props: ButtonProps,
    darkTheme: boolean,
): string => {

    const { margin, padding, type = 'primary', borderRadius = '12px' } = props;

    const btnAttributes = {
        'primary': {
            color: getThemedColor('foreground', true),
            bgColor: getThemedColor('primary', darkTheme),
            borderColor: getThemedColor('primary', darkTheme),
        },
        'outlined-neutral': {
            color: getThemedColor('foreground', darkTheme),
            bgColor: 'transparent',
            borderColor: getThemedColor('foreground', darkTheme),
        },
        'outlined-primary': {
            color: getThemedColor('primary', darkTheme),
            bgColor: 'transparent',
            borderColor: getThemedColor('primary', darkTheme),
        },
        'danger': {
            color: getThemedColor('foreground', true),
            bgColor: getThemedColor('danger', darkTheme),
            borderColor: getThemedColor('danger', darkTheme),
        },
        'success': {
            color: getThemedColor('foreground', true),
            bgColor: getThemedColor('success', darkTheme),
            borderColor: getThemedColor('success', darkTheme),
        },

    }

    return css`

        @keyframes fadeIn {
            0% { opacity: 1 }
            100% { opacity: 0.7 }
        }

        margin: ${margin};
        padding: ${padding};
        color: ${btnAttributes[type].color};
        background-color: ${btnAttributes[type].bgColor};
        border-color: ${btnAttributes[type].bgColor};
        border-width: 2px;
        border-radius: ${borderRadius};
        text-align: center;

        &:hover {
            cursor: pointer;
            opacity: 0.7;
            animation: fadeIn;
            animation-duration: 0.25s;
        }
    `;
} ;