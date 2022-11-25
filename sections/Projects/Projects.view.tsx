import { useThemeContext } from "@/context/ThemeContext";

import SectionHeader from "@/components/SectionHeader";
import Flex from "@/components/Flex";

import * as css from './Projects.styles';
import ProjectCard from "./components/ProjectCard";
import { PROJECTS } from "./Projects.constants";

const ProjectsView = () => {
    
    const { isDarkTheme } = useThemeContext();

    return (
        <div id="projects" className={css.container(isDarkTheme)}>
            <Flex
                justifyContent="center"
                className={css.innerContainer(isDarkTheme)}
            >
                <Flex
                    className={css.nestInnerContainer}
                    direction="column"
                    justifyContent="center"
                >
                    <div className={css.sectionHeader}>
                        <SectionHeader text="featured projects." />
                    </div>
                    {
                        PROJECTS.map((item, index) => <ProjectCard key={index} {...item}/>)
                    }
                </Flex>
            </Flex>
        </div>
    );
}


export default ProjectsView;