import { css } from '@emotion/css';

import getThemedColor from '@/helpers/getThemedColor';

export const container = (darkTheme : boolean) =>  css`
    color: ${getThemedColor('foreground', darkTheme)};
    background: ${getThemedColor('background', darkTheme)};
    height: auto;
`; 

export const innerContainer = css`

    padding: 64px 0 64px 0;

    > h2 {
        font-weight: 300;
        margin: 32px 0;
    }
`;

export const promptText = css`
    text-align: center;
`;

export const mailBtn = css`
    font-size: 24px;

    > span {
        margin-left: 18px;
        font-weight: 700;
    }
`

export const linkBtnContainer = css`
    width: 30%;

    @media screen and (max-width: 768px){
        visibility: hidden;
    }
`;

export const linkBtn = (darkTheme: boolean) => css`
    color: ${getThemedColor('primary', darkTheme)};
    border: 2px solid ${getThemedColor('primary', darkTheme)};
    font-size: 36px;
    width: 80px;
    height: 80px;
    border-radius: 9999px;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        cursor: pointer;
        background-color: ${getThemedColor('primary', darkTheme)};
        color: ${getThemedColor('foreground', true)};
    }

    @media screen and (max-width: 768px){
        width: 60px;
        height: 60px;
    }
`;

export const footerContainer = (darkTheme: boolean) => css`
    background-color: ${getThemedColor('primary', darkTheme)};
    padding: 24px;
`;