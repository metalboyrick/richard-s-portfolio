import Image from "next/image";

import { useThemeContext } from "@/context/ThemeContext";
import useMobile from "@/hooks/useMobile";
import Flex from "@/components/Flex";

import type { StackCardProps } from "./StackCard.types";
import * as css from './StackCard.styles';


const StackCardView = ({ img, name }: StackCardProps) => {
    
    const { isDarkTheme } = useThemeContext();
    const { isMobile } = useMobile();

    return (
        <Flex
            justifyContent="center"
            alignItems="center"
            className={css.card(isDarkTheme)}
        >
            <Image
                src={img}
                alt={`${name} icon`}
                width={isMobile ? 18 : 36}
            />
            <div className={css.text}>
                {name}
            </div>
        </Flex>
    );
};

export default StackCardView;