import { css } from '@emotion/css';

import getThemedColor from '@/helpers/getThemedColor';

export const container = (darkTheme: boolean) => css`

    z-index: 9999;

    position: fixed;
    width: 56px;
    height: 224px;
    background-color: ${getThemedColor('background', darkTheme)};
    top: 45%;
    padding: 16px;
    border-radius: 0 12px 12px 0;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);

    @media screen and (max-width: 768px) {
        width: 100%;
        height: auto;
        top: auto;
        bottom: 0;
        left: 0;
        right: 0;
        border-radius: 0;
    };
`;

export const sidebarIcon = (darkTheme: boolean) => css`
    color: ${getThemedColor('foreground', darkTheme)};
    font-size: 24px;

    &:hover {
        color: ${getThemedColor('primary', darkTheme)};
        cursor: pointer;
    }
`;