import { css } from "@emotion/css";

import getThemedColor from "@/helpers/getThemedColor";
import hexToRGBA from "@/helpers/hexToRGBA";
import { Light } from "@/constants/colors";

export const container = css`
    position: relative;
    margin: 100px auto;
    
    @media screen and (max-width: 768px){
        margin: 24px auto;
    }

`;

export const imageContainer = css`
    width: 700px;
    height: auto;

    @media screen and (max-width: 768px) {
        width: 100%;
        border-radius: 24px 24px 0 0;
    }

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

    @media screen and (max-width: 768px) {

        font-size: 14px;
        width: 100%;
        border-radius: 0 0 24px 24px;

        position: relative;
        left: 0;
        top: 0px;

        box-shadow: none;
    
    }
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

    @media screen and (max-width: 768px){
        position: relative;
        left: 0;        
        border-radius: 0;
    }
`;

export const icon = css`
    font-size: 36px;

    &:hover{
        cursor: pointer;
        opacity: 0.7;
    }

    margin: 0 12px;
`;