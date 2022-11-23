import { useThemeContext } from "@/context/ThemeContext";

import * as css from './Cover.styles';

const CoverView = () => {
    
    const { isDarkTheme } = useThemeContext();

    return (
        <div className={css.container(isDarkTheme)}>
            <div>Hello World</div>
        </div>
    );
}

export default CoverView;