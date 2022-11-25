import { useThemeContext } from "@/context/ThemeContext";

import Flex from "@/components/Flex";
import SectionHeader from "@/components/SectionHeader";

import ExperienceCard from "./components/ExperienceCard";

import * as css from './Experience.styles';
import { EXPERIENCES } from "./Experience.constants";


const ExperienceView = () => {
    
    const { isDarkTheme } = useThemeContext();

    return (
        <div id="experience" className={css.container(isDarkTheme)}>
            <Flex
                className={css.innerContainer}
                justifyContent="flex-start"
                direction="column"
            >
                <SectionHeader text="my experiences." />
                <Flex
                    direction="column"
                    className={css.contentContainer}
                >
                    {
                        EXPERIENCES.map((item, index) => {
                            return index % 2 === 0 ? <ExperienceCard key={index} {...item} /> : <ExperienceCard key={index} {...item} isRightSided/>
                        } )
                    }
                </Flex>
            </Flex>
        </div>
    );
}

export default ExperienceView;