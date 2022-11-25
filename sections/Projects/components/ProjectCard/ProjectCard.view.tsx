import { GithubOutlined, LinkOutlined } from "@ant-design/icons";
import Image from "next/image";

import { useThemeContext } from "@/context/ThemeContext";
import redirectTo from "@/helpers/redirectTo";

import Flex from "@/components/Flex";

import type { ProjectCardProps } from "./ProjectCard.types";
import * as css from './ProjectCard.styles';
import iconFigma from './assets/icon-figma.png';

const ProjectCardView = (props: ProjectCardProps) => {

    const { 
        coverImg,
        coverAlt,
        title,
        description,
        URLs
    } = props;

    const { isDarkTheme } = useThemeContext();

    const iconMappings = {
        "github": <GithubOutlined className={css.icon} />,
        "figma": <Image src={iconFigma} alt="figma icon" width={36} height={36} className={css.icon}/>,
        "link": <LinkOutlined className={css.icon} />
    }

    return (
        <div className={css.container}>
            <Image 
                src={coverImg}
                alt={coverAlt}
                className={css.imageContainer}
            />
            <Flex
                className={css.linkContainer(isDarkTheme)}
                justifyContent="space-between"
            >
                {
                    URLs.map((item, index) => 
                        <div key={index} onClick={() => redirectTo(item.URL, true)}>
                            {iconMappings[item.icon]}
                        </div>
                    )
                }
            </Flex>
            <Flex 
                direction="column"
                className={css.infoCard(isDarkTheme)}
            >
                <div className={css.infoTitle}>{title}</div>
                <div>{description}</div>
            </Flex>

        </div>
    );
};

export default ProjectCardView;