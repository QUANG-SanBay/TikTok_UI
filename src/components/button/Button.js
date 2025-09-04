import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Button.module.scss'
function Button({ to, href, children, primary = false, textOnly = false, size, capsule, leftIcon, rightIcon, className, ...props }) {
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
            {leftIcon ? (
                <span className={styles.icon}>
                    <FontAwesomeIcon icon={leftIcon} />
                </span>
            ) : null}

                {children}

            {rightIcon ? (
                <span className={styles.icon}>
                    <FontAwesomeIcon icon={rightIcon} />
                </span>
            ) : null}
        </Component>
    )

}
export default Button;