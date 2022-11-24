import { css } from '@emotion/css';

import getThemedColor from '@/helpers/getThemedColor';

export const container = (darkTheme : boolean) =>  css`
    color: ${getThemedColor('foreground', darkTheme)};
    background: ${getThemedColor('background', darkTheme)};
    height: 100vh;
`; 

export const secondaryText = css`
    font-size: 36px;
    font-weight: 300;
`;

export const strongText = (darkTheme : boolean) => css`
    font-size: 42px;
    font-weight: 800;
    color: ${getThemedColor('primary', darkTheme)};
`;

export const innerContainer = css`

    @keyframes coverEntrance {
        from {
            left : -50px;
            opacity: 0;
        }

        to {
            left: 0px;
            opacity: 1;
        }
    };

    position: relative;
    width: 70%;

    animation: coverEntrance;
    animation-duration: 1s;
    animation-iteration-count: 1;
`;