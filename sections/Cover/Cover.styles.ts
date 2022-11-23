import { css } from '@emotion/css';

import * as color from '@/constants/colors';

export const container = (darkTheme : boolean) =>  css`
    color: ${darkTheme ? color.Dark.foreground : color.Light.foreground};
    background: ${darkTheme ? color.Dark.background : color.Light.background};
    height: 100vh;
`; 