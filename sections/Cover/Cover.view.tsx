import { useThemeContext } from "@/context/ThemeContext";

import redirectTo from "@/helpers/redirectTo";
import { RESUME } from "@/constants/links";

import Flex from "@/components/Flex";
import Button from "@/components/Button";

import * as css from './Cover.styles';

const CoverView = () => {
    
    const { isDarkTheme } = useThemeContext();

    return (
            <Flex
                justifyContent="center"
                alignItems="center"
                direction="column"
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
                <Flex
                    className={css.ctaContainer}
                >
                    <Button
                        type="primary"
                        padding="12px 24px"
                        margin="64px 32px"
                        onClick={() => redirectTo(RESUME, true)}
                    > 
                       <strong>download resume</strong>
                    </Button>
                </Flex>
            </Flex>
    );
}

export default CoverView;