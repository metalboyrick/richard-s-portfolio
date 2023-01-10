import { useEffect, useState } from 'react';
import Image from 'next/image';

import { MenuOutlined, PicCenterOutlined } from '@ant-design/icons';

import { useThemeContext } from '@/context/ThemeContext';
import Flex from '@/components/Flex';
import Button from '@/components/Button';

import rsLogo from './assets/rs-logo.svg';
import * as css from './Navigation.styles';
import redirectTo from '@/helpers/redirectTo';
import useMobile from '@/hooks/useMobile';
import { RESUME } from '@/constants/links';

const NavigationView = () => {

    const { isDarkTheme } = useThemeContext();
    const { isMobile } = useMobile();

    const [scrollY, setScrollY] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

    const renderMenu = () => {
        return (
            <>
                <div onClick={() => redirectTo('#about', false)} className={css.navLink(isDarkTheme)}>about</div>
                <div onClick={() => redirectTo('#experience', false)} className={css.navLink(isDarkTheme)}>experiences</div>
                <div onClick={() => redirectTo('#projects', false)} className={css.navLink(isDarkTheme)}>projects</div>
                <div onClick={() => redirectTo('#contact', false)} className={css.navLink(isDarkTheme)}>contact</div>
                <div className={css.navLink(isDarkTheme)}>
                    <Button
                        type="primary"
                        padding="8px 24px"
                        onClick={() => redirectTo(RESUME, true)}
                    >
                        resume
                    </Button>
                </div>

            </>
        );
    };

    // for scroll event handler
    useEffect(() => {
        const handleScroll = () => {

            if (window.scrollY > scrollY) {
                setIsVisible(false);
            } else if (window.scrollY < scrollY) {
                setIsMobileMenuVisible(false);
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
                            {
                                isMobile ? <MenuOutlined onClick={() => setIsMobileMenuVisible(!isMobileMenuVisible)} /> : (
                                    <Flex
                                        className={css.menu}
                                        justifyContent='space-between'
                                        alignItems='center'
                                    >
                                        {renderMenu()}
                                    </Flex>
                                )
                            }

                        </Flex>
                        {
                            isMobileMenuVisible && (
                                <Flex
                                    className={css.mobileMenu}
                                    direction="column"
                                >
                                    {renderMenu()}
                                </Flex>
                            )
                        }
                    </div>
                )
            }
        </>

    );
}

export default NavigationView;