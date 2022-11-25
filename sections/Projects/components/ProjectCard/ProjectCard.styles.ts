import { css } from "@emotion/css";

import getThemedColor from "@/helpers/getThemedColor";
import hexToRGBA from "@/helpers/hexToRGBA";
import { Light } from "@/constants/colors";

export const container = css`
    position: relative;
    margin: 100px auto;
    
`;

export const imageContainer = css`
    width: 700px;
    height: auto;
`;

export const infoCard = (darkTheme: boolean) => css`
    font-size: 20px;
    font-weight: 300;
    background: ${getThemedColor('background', darkTheme)};
    width: 600px;
    padding: 24px;
    border-radius: 24px;
    box-shadow: 11px 12px 33px rgba(0, 0, 0, 0.25);

    position: absolute;
    left: 256px;
    bottom: -100px;
`;

export const infoTitle = css`
    font-weight: 700;
    margin-bottom: 12px;
`;

export const linkContainer = (darkTheme : boolean) => css`
    background: ${hexToRGBA(Light.background, darkTheme ? 0.25: 0.5)};
    width: auto;
    padding:  12px 0;

    position: absolute;
    left: 20px;
    border-radius: 0 0 24px 24px;
`;

export const icon = css`
    font-size: 36px;

    &:hover{
        cursor: pointer;
        opacity: 0.7;
    }

    margin: 0 12px;
`;