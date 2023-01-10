import { 
    GithubOutlined,
    LinkedinOutlined,
    WhatsAppOutlined,
    MailOutlined
} from "@ant-design/icons"; 
import Image from "next/image";

import { GITHUB_URL, LINKEDIN_URL, WHATSAPP, MAIL } from "@/constants/links";
import { useThemeContext } from "@/context/ThemeContext";
import redirectTo from "@/helpers/redirectTo";

import SectionHeader from "@/components/SectionHeader";
import Flex from "@/components/Flex";
import Button from "@/components/Button";

import * as css from './Contact.styles';
import rsLogoWhite from './assets/rs-logo-white.svg';
import useMobile from "@/hooks/useMobile";

const ContactView = () => {

    const { isDarkTheme } = useThemeContext();
    const { isMobile } = useMobile();

    const contactList = [
        {
            icon: <GithubOutlined/>,
            link: GITHUB_URL
        },
        {
            icon: <LinkedinOutlined/>,
            link: LINKEDIN_URL
        },
        {
            icon: <WhatsAppOutlined/>,
            link: WHATSAPP
        },
    ]

    return (
        <div id="contact" className={css.container(isDarkTheme)}>
            <Flex
                direction="column"
                justifyContent="center"
                alignItems="center"
                className={css.innerContainer}
            >
                <SectionHeader text="get in touch." />
                <h2 className={css.promptText}>let&lsquo;s build awesome software together!</h2>
                <Button
                    type="primary"
                    onClick={() => redirectTo(MAIL, true)}
                    padding="24px"
                    borderRadius="24px"
                >
                    <span className={css.mailBtn}>
                        <MailOutlined />
                        <span>Let&lsquo;s talk !</span>
                    </span>
                </Button>
                <h2 className={css.promptText}>or, contact me via one of these</h2>
                <Flex
                    justifyContent="space-between"
                    className={css.linkBtnContainer}
                >
                    {
                        contactList.map((item, index) => 
                        <div className={css.linkBtn(isDarkTheme)} key={index} onClick={() => redirectTo(item.link, true)}>
                            {item.icon}
                        </div>
                        )
                    }
                </Flex>
            </Flex>
            {
                !isMobile &&  <Flex
                justifyContent="center"
                className={css.footerContainer(isDarkTheme)}
            >
                <Image
                    src={rsLogoWhite}
                    alt="richard sulisthio logo"
                    width={80}
                />
            </Flex>
            }

        </div>
    );
}

export default ContactView;