import { useThemeContext } from "@/context/ThemeContext";

import Flex from "@/components/Flex";

import * as css from './Cover.styles';

const CoverView = () => {
    
    const { isDarkTheme } = useThemeContext();

    return (
            <Flex
                justifyContent="center"
                alignItems="center"
                className={css.container(isDarkTheme)}
            >
                <div id="cover" className={css.innerContainer}>
                    <div className={css.secondaryText}>
                        greetings, my name is <span className={css.strongText(isDarkTheme)}>richard sulisthio.</span>
                    </div>
                    <div className={css.secondaryText}>
                        currently <span className={css.strongText(isDarkTheme)}>solving problems</span> with my expertise in <span className={css.strongText(isDarkTheme)}>software engineering.</span>
                    </div>
                </div>
            </Flex>
    );
}

export default CoverView;