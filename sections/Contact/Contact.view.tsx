import { useThemeContext } from "@/context/ThemeContext";

import * as css from './Contact.styles';

const ContactView = () => {
    
    const { isDarkTheme } = useThemeContext();

    return (
        <div id="contact" className={css.container(isDarkTheme)}>
            <div>Contact</div>
        </div>
    );
}

export default ContactView;