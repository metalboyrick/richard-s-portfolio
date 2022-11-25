import { css } from '@emotion/css';

import getThemedColor from '@/helpers/getThemedColor';
import hexToRGBA from '@/helpers/hexToRGBA';

export const container = (darkTheme : boolean) =>  css`
    color: ${getThemedColor('foreground', darkTheme)};
    background: ${getThemedColor('background', darkTheme)};
`; 

export const innerContainer = (darkTheme: boolean) =>  css`
    width: 100%;
    background: ${hexToRGBA(getThemedColor('primary', darkTheme), 0.25)}; 
    padding-bottom: 64px;
`;

export const nestInnerContainer = css`
    width: 80%;
`;

export const sectionHeader = css`
    align-self: flex-end;
    margin: 48px 0;
`;