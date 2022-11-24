import { useThemeContext } from "@/context/ThemeContext";

import * as css from './About.styles';

const AboutView = () => {
    
    const { isDarkTheme } = useThemeContext();

    return (
        <div id="about" className={css.container(isDarkTheme)}>
            <div>About</div>
        </div>
    );
}

export default AboutView;