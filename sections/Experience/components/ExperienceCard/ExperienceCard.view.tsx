import { CaretRightFilled } from "@ant-design/icons";

import { useThemeContext } from "@/context/ThemeContext";

import Flex from "@/components/Flex";

import type { ExperienceCardProps } from "./ExperienceCard.types";
import { convertToCamelCase } from "./ExperienceCard.helpers";
import * as css from './ExperienceCard.styles';


const ExperienceCardView = ( props: ExperienceCardProps ) => {

    const { isDarkTheme } = useThemeContext();
    const { role, company, startDate, endDate = 'present', description, isRightSided = false} = props;

    return (
        <Flex
            direction="column"
            className={css.wrapper(isRightSided, isDarkTheme)}
        >
            <div className={css.role}>{role}{' '} <span className={css.company(isDarkTheme)}>{`@${convertToCamelCase(company)}`}</span></div>
            <div className={css.date(isDarkTheme)}>{`${startDate} - ${endDate}`}</div>
            <Flex
                direction="column"
            >
                {
                    description.map((item, index) => 
                        <Flex 
                            key={index}
                            justifyContent="flex-start"
                            alignItems="flex-start"
                            className={css.descGroup}
                        >
                            <CaretRightFilled className={css.descBullet(isDarkTheme)}/>
                            <div className={css.descText}>{item}</div>
                        </Flex>)
                }
                            
            </Flex>
            
            <div className={css.ornament(isRightSided)}>
                <div className={css.outerCircle(isDarkTheme)}/>
                <div className={css.innerCircle}/>
            </div>

        </Flex>
    );
};

export default ExperienceCardView;

