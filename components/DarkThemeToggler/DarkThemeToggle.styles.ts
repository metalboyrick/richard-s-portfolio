import { css } from '@emotion/css';

import getThemedColor from '@/helpers/getThemedColor';

export const container = (darkTheme: boolean) => css`
    background-color: ${getThemedColor('background', darkTheme)};
    border-radius: 9999px;
    width: 80px;
    height: 80px;
    box-shadow: 0px 0px 29px rgba(0, 0, 0, 0.50);
    
    position: fixed;
    bottom: 16px;
    right: 16px;

    &:hover * {
        cursor: pointer;
        background-color: ${getThemedColor('background', !darkTheme)};
        border-radius: 9999px;
        > span {
            color: ${getThemedColor('foreground', !darkTheme)} !important;
        }
    }
`;

export const bulbIcon = (darkTheme: boolean) => css`
    color: ${getThemedColor('foreground', darkTheme)};
    font-size: 24px;
`;