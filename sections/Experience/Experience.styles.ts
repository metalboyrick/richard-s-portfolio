import { css } from '@emotion/css';

import getThemedColor from '@/helpers/getThemedColor';

export const container = (darkTheme : boolean) =>  css`
    color: ${getThemedColor('foreground', darkTheme)};
    background: ${getThemedColor('background', darkTheme)};
    height: 100vh;
`; 