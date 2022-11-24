import { css } from "@emotion/css";

import getThemedColor from "@/helpers/getThemedColor";

export const header = (darkTheme: boolean) => css`
    font-size: 56px;
    font-weight: 800;
    color: ${getThemedColor('foreground', darkTheme)};
    border-bottom: 10.5px solid ${getThemedColor('primary', darkTheme)};
    margin-bottom: 10.5px;
`; 