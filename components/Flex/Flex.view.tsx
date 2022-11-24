import { cx } from '@emotion/css';

import * as css from './Flex.styles';
import type { FlexProps } from "./Flex.types";

const FlexView = (props: FlexProps) => {

    const { className = '', children } = props;

    return (
        <div className={cx(css.container(props), className)}>
            {children}
        </div>
    );
}

export default FlexView;