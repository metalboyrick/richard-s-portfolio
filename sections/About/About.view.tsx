import Image from "next/image";

import { useThemeContext } from "@/context/ThemeContext";

import Flex from "@/components/Flex";
import SectionHeader from "@/components/SectionHeader";

import rsProfile from './assets/rs-profile.png';
import StackCard from "./components/StackCard";

import * as css from './About.styles';
import { STACKS } from "./About.constants";

const AboutView = () => {
    
    const { isDarkTheme } = useThemeContext();

    return (
        <div id="about" className={css.container(isDarkTheme)}>
            <Flex 
                justifyContent="center"
                alignItems="center"
                className={css.innerContainer(isDarkTheme)}
            >
                <Flex
                    className={css.nestInnerContainer}
                    alignItems="center"
                >
                    <Image 
                        src={rsProfile}
                        alt="richard sulisthio profile"
                        className={css.profileImg}
                    />
                    <div
                        className={css.rightColumn}
                    >
                        <SectionHeader text="about me."/>
                        <div className={css.description(isDarkTheme)}>
                        Ex-Tokopedia and Tsinghua University - educated Software Engineer. Mainly dabbles in the front-end and UI/UX space. I have 1 year experience of delivering high-quality web-based applications. Let’s build outstanding software together !
                        </div>
                        <Flex
                            wrap='wrap'
                            className={css.stackSection}
                        >
                            {
                                STACKS.map((item, index) => <StackCard key={index} {...item}/>)
                            }
                        </Flex>
                    </div>
                </Flex>
            </Flex>
        </div>
    );
}

export default AboutView;