import { useThemeContext } from "@/context/ThemeContext";
import { arrayBuffer } from "stream/consumers";

import * as css from './Projects.styles';

const ProjectsView = () => {
    
    const { isDarkTheme } = useThemeContext();

    return (
        <div id="projects" className={css.container(isDarkTheme)}>
            <div>Projects</div>
        </div>
    );
}


export default ProjectsView;