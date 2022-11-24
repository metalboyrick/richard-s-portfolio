import { useThemeContext } from "@/context/ThemeContext";

import * as css from './Cover.styles';

const CoverView = () => {
    
    const { isDarkTheme } = useThemeContext();

    return (
        <div id="cover" className={css.container(isDarkTheme)}>
            <div>Cover</div>
        </div>
    );
}

export default CoverView;