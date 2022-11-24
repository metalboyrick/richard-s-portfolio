import { css } from '@emotion/css';

import getColor from '@/helpers/getColor';

export const container = (darkTheme : boolean) =>  css`
    color: ${getColor('foreground', darkTheme)};
    background: ${getColor('background', darkTheme)};
    height: 100vh;
`; 