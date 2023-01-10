import { css } from "@emotion/css";

import { Light } from "@/constants/colors";
import hexToRGBA from "@/helpers/hexToRGBA";

export const card = (darkTheme: boolean) => css`
    background: ${hexToRGBA(Light.background, darkTheme ? 0.25: 0.5)};
    font-size: 20px;
    padding: 8px 12px ;
    border-radius: 16px;
    margin: 0 12px 12px 0;

    @media screen and (max-width: 768px){
        font-size: 16px;
    }
`;

export const text = css`
    margin-left: 8px;
`;