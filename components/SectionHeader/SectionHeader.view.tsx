import { useThemeContext } from "@/context/ThemeContext";

import * as css from './SectionHeader.style';
import type { SectionHeaderProps } from "./SectionHeader.types";

const SectionHeaderView = ({ text }: SectionHeaderProps) => {
    
    const { isDarkTheme } = useThemeContext();

    return (
        <h1 className={css.header(isDarkTheme)}>{text}</h1>
    );
}

export default SectionHeaderView;