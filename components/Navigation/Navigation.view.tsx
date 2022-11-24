import { useEffect, useState } from 'react';
import Image from 'next/image';

import { useThemeContext } from '@/context/ThemeContext';
import Flex from '@/components/Flex';
import Button from '@/components/Button';

import rsLogo from './assets/rs-logo.svg';
import * as css from './Navigation.styles';
import redirectTo from '@/helpers/redirectTo';
import { RESUME } from '@/constants/links';

const NavigationView = () => {

    const { isDarkTheme } = useThemeContext();
    const [scrollY, setScrollY] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {

            if (window.scrollY > scrollY){
                setIsVisible(false);
            } else if (window.scrollY < scrollY) {
                setIsVisible(true);
            };

            setScrollY(window.scrollY);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });

    return (
        <>
            {
                isVisible &&
                (
                    <div className={css.container(isDarkTheme)}>
                        <Flex
                            justifyContent='space-between'
                            alignItems='center'
                        >
                            <Image
                                src={rsLogo}
                                alt="richard sulisthio logo"
                                width={80}
                                onClick={() => redirectTo('/', false)}
                            />
                            <Flex
                                className={css.menu}
                                justifyContent='space-between'
                                alignItems='center'
                            >
                                <div onClick={() => redirectTo('#about', false)} className={css.navLink(isDarkTheme)}>about</div>
                                <div onClick={() => redirectTo('#experience', false)} className={css.navLink(isDarkTheme)}>experiences</div>
                                <div onClick={() => redirectTo('#projects', false)} className={css.navLink(isDarkTheme)}>projects</div>
                                <div onClick={() => redirectTo('#contact', false)} className={css.navLink(isDarkTheme)}>contact</div>
                                <Button
                                    type="primary"
                                    padding="8px 24px"
                                    onClick={() => redirectTo(RESUME, true)}
                                > 
                                    resume 
                                </Button>
                            </Flex>
                        </Flex>
                    </div>
                )
            }
        </>

    );
}

export default NavigationView;