import { css } from '@emotion/css';

import getThemedColor from '@/helpers/getThemedColor';

export const container = (darkTheme : boolean) =>  css`
    color: ${getThemedColor('foreground', darkTheme)};
    background: ${getThemedColor('background', darkTheme)};
    height: 100vh;
`; 

export const innerContainer = css`
    width: 80%;
    margin: auto;
    padding: 48px 0;
`;

export const contentContainer = css`
    margin: 32px 0px;
`;