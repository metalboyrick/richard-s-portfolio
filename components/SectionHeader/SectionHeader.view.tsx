import { useThemeContext } from "@/context/ThemeContext";

import * as css from './SectionHeader.style';
import type { SectionHeaderProps } from "./SectionHeader.types";

const SectionHeaderView = ({ text }: SectionHeaderProps) => {
    
    const { isDarkTheme } = useThemeContext();

    return (
        <div className={css.wrapper}>
            <span className={css.header(isDarkTheme)}>{text}</span>
        </div>
    );
}

export default SectionHeaderView;