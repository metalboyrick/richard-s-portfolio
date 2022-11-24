import { 
    GithubOutlined,
    LinkedinOutlined,
    WhatsAppOutlined,
    MailOutlined
} from "@ant-design/icons"; 

import { useThemeContext } from "@/context/ThemeContext";
import { GITHUB_URL, LINKEDIN_URL, WHATSAPP, MAIL } from "@/constants/links";
import Flex from "@/components/Flex";
import redirectTo from "@/helpers/redirectTo";

import * as css from './Sidebar.styles';

const SidebarView = () => {
    
    const { isDarkTheme } = useThemeContext();
    
    return (
        <Flex
            direction="column"
            justifyContent="space-between"
            className={css.container(isDarkTheme)}
        >
            <GithubOutlined onClick={() => redirectTo(GITHUB_URL, true)} className={css.sidebarIcon(isDarkTheme)} />
            <LinkedinOutlined onClick={() => redirectTo(LINKEDIN_URL, true)} className={css.sidebarIcon(isDarkTheme)} />
            <WhatsAppOutlined onClick={() => redirectTo(WHATSAPP, true)} className={css.sidebarIcon(isDarkTheme)} />
            <MailOutlined onClick={() => redirectTo(MAIL, true)} className={css.sidebarIcon(isDarkTheme)} />
        </Flex>
    );
};

export default SidebarView;