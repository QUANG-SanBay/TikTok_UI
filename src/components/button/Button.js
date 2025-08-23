import { Link } from 'react-router-dom';
import clsx from 'clsx';
import styles from './Button.module.scss'
function Button({ to, href, children, primary = false, textOnly = false, size, capsule, className, ...props }) {
    let Component = 'button';
    const propsIn = {
        ...props,
    }
    if (to) {
        Component = Link;
        propsIn.to = to;
    } else if (href) {
        Component = 'a'
        propsIn.href = href;
    }
    const classes = {
        [styles.primary]: primary,
        [styles.textOnly]: textOnly,
        [styles.capsule]: capsule,
        [styles[size]]: size,
        ...className,
    }
    return (
        <Component

            className={clsx(
                styles.wrapper,
                {
                    ...classes,
                }
            )}
            {...propsIn}>
            {children}
        </Component>
    )

}
export default Button;