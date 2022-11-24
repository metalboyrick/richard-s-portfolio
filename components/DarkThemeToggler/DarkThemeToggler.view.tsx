import { BulbOutlined } from '@ant-design/icons';

import { useThemeContext } from '@/context/ThemeContext';
import Flex from '@/components/Flex';

import * as css from './DarkThemeToggle.styles';

const DarkThemeTogglerView = () => {

    const { isDarkTheme, setDarkTheme } = useThemeContext();

    return (
        <div className={css.container(isDarkTheme)} onClick={() => setDarkTheme(!isDarkTheme)}>
            <Flex
                justifyContent='center'
                alignItems='center'
                width='100%'
                height='100%'
            >
                <BulbOutlined className={css.bulbIcon(isDarkTheme)}/>
            </Flex>
        </div>

    );
};

export default DarkThemeTogglerView;