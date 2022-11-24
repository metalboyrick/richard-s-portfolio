import { useThemeContext } from "@/context/ThemeContext";

import * as css from './Experience.styles';

const ExperienceView = () => {
    
    const { isDarkTheme } = useThemeContext();

    return (
        <div id="experience" className={css.container(isDarkTheme)}>
            <div>Experience</div>
        </div>
    );
}

export default ExperienceView;