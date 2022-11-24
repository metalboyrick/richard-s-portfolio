import { useThemeContext } from "@/context/ThemeContext";

import * as css from './Button.styles';
import type { ButtonProps } from "./Button.types";

const ButtonView = (props: ButtonProps) => {

    const { isDarkTheme } = useThemeContext();

    const { onClick, children } = props;

    return (
        <div className={css.btnContainer(props, isDarkTheme)} onClick={onClick}>
            {children}
        </div>
    );
};

export default ButtonView;