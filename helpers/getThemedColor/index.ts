import { Light, Dark } from '@/constants/colors';

import type { ColorConst } from './types';

const getThemedColor = (colorType: string, isDarkTheme: boolean) : string => {
    try {
        return isDarkTheme ? Dark[colorType as keyof ColorConst] : Light[colorType as keyof ColorConst];
    } 
    catch (e) {
        throw e;
    }
};

export default getThemedColor;