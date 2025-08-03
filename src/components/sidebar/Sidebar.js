import clsx from "clsx";
import styles from './Sidebar.module.scss'

function Sidebar(){

    return(
        <aside className={clsx(styles.sidebar)}>
            <h1>This is sidebar</h1>
        </aside>
    )
}
export default Sidebar;