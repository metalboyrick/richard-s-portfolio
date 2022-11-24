import { css } from "@emotion/css";

import getThemedColor from "@/helpers/getThemedColor";
import hexToRGBA from "@/helpers/hexToRGBA";

export const container = (darkTheme: boolean, showShadow: boolean) => css`
    @keyframes fadeIn {
        0% { top: -10%; }
        100% { top: 0; }
    }
    
    padding: 24px 42px;
    width: 100%;
    background: ${ hexToRGBA(getThemedColor('background', darkTheme), 0.90)  };
    color: ${getThemedColor('foreground', darkTheme)};
    position: fixed;
    backdrop-filter: blur(10px);

    animation: fadeIn;
    animation-duration: 0.5s;
`;

export const menu = css`
    width: 45%;
`;

export const navLink = (darkTheme: boolean) => css`
    &:hover {
        color:  ${getThemedColor('primary', darkTheme)};
        cursor: pointer;
    }
`;