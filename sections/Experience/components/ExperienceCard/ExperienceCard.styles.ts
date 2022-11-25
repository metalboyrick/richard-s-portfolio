import { css } from "@emotion/css";

import getThemedColor from "@/helpers/getThemedColor";

export const wrapper = (isRightSided: boolean, darkTheme: boolean) => css`
    width: ${ isRightSided ? 'calc(50% + 6px)' : '50%' };
    align-self: ${ isRightSided ? 'flex-end' : 'flex-start' };
    padding: ${isRightSided ? '0 0 0 36px' : '0 30px 0 0'};
    ${isRightSided ?
        `border-left: 6px solid ${getThemedColor('primary', darkTheme)};`
    :
        `border-right: 6px solid ${getThemedColor('primary', darkTheme)};`    
    }
    position: relative;
`

export const role = css`
    font-size: 28px;
    font-weight: 700;
`;

export const company = (darkTheme: boolean) => css`
    color : ${getThemedColor('primary', darkTheme)};
`; 

export const date = (darkTheme: boolean) => css`
    color : ${getThemedColor('weak', darkTheme)};
    font-style: italic;
    font-size: 24px;
    margin: 4px 0;
`; 

export const descGroup = css`
    margin: 4px 0;
`;

export const descBullet = (darkTheme: boolean) => css`
    color: ${getThemedColor('primary', darkTheme)};
    margin-right: 12px;
`
export const descText = css`
    font-size: 16px;
`;

export const ornament = (isRightSided: boolean) => css`
    position: absolute;
    ${isRightSided ? 'left: -19px' : 'right: 13px' };
    top: 40%;
`;

export const outerCircle = (darkTheme: boolean) => css`
    width: 32px;
    height: 32px;
    background: ${getThemedColor('primary', darkTheme)};
    position: absolute;
    border-radius: 9999px;
`;

export const innerCircle = css`
    width: 16px;
    height: 16px;
    background: ${getThemedColor('foreground', true)};
    position: absolute;
    border-radius: 9999px;
    top: 8px;
    left: 8px;
`