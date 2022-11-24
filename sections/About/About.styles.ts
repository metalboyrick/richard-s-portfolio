import { css } from '@emotion/css';

import getThemedColor from '@/helpers/getThemedColor';
import hexToRGBA from '@/helpers/hexToRGBA';

export const container = (darkTheme : boolean) =>  css`
    color: ${getThemedColor('foreground', darkTheme)};
    background: ${getThemedColor('background', darkTheme)};
    width: 100%;
`; 

export const innerContainer = (darkTheme: boolean) => css`
    background: ${hexToRGBA(getThemedColor('primary', darkTheme), 0.25)};
    width: 100%;

`;

export const nestInnerContainer = css`
    width: 60%;
    margin: 128px 0;
`;



export const profileImg = css`
    width: 40%;
    height: auto;
    margin-right: 36px;
`;

export const rightColumn = css`
    width: 60%;
`;

export const description = (darkTheme: boolean) => css`
    font-size: 20px;
    font-weight: 300;
    margin:  24px 0 0 0;
    padding: 0 0 24px 0;
    border-bottom: 10.5px solid ${getThemedColor('primary', darkTheme)};
`;

export const stackSection = css`
    margin-top: 24px;
`;