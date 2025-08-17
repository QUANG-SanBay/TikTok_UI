import clsx from "clsx";
import styles from './ButtonLogin.module.scss'

function ButtonLogin(){
    return(
        <div className={clsx(styles.buttonLoginCtn)}>
            <button className={clsx(styles.buttonLogin)}>
                <span>Log in</span>
            </button>
        </div>
    )
}
export default ButtonLogin;