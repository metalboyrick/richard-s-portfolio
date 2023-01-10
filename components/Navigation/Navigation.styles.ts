import { css } from "@emotion/css";

import getThemedColor from "@/helpers/getThemedColor";
import hexToRGBA from "@/helpers/hexToRGBA";

export const container = (darkTheme: boolean) => css`
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

    z-index: 100;
`;

export const menu = css`
    width: 45%;
`;

export const mobileMenu = css`
    position: relative;
    top: 24px;
`;

export const navLink = (darkTheme: boolean) => css`
    &:hover {
        color:  ${getThemedColor('primary', darkTheme)};
        cursor: pointer;
    }

    @media screen and (max-width: 768px){
        position: relative;
        left: -42px;
        width: 100vw;
        padding: 16px 42px;
    }
`;