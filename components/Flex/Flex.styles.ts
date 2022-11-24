import { css } from "@emotion/css";

import type { FlexProps } from "./Flex.types";

export const container = ({
    direction = 'row',
    justifyContent = 'flex-start',
    alignItems = 'stretch',
    alignContent = 'stretch',
    wrap = 'nowrap',
    inline = false,
    width = '',
    height = '',
} : FlexProps) =>  css`
    display: ${inline ? 'inline-flex' : 'flex'};

    flex-direction: ${direction};
    flex-wrap: ${wrap};

    justify-content: ${justifyContent};
    align-items: ${alignItems};
    align-content: ${alignContent};

    width: ${width};
    height: ${height};
`;