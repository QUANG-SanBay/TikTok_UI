import clsx from "clsx";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import styles from './Sidebar.module.scss'
import {LogoDark} from '~/assets/imgs/'

function Sidebar(){
    return(
        <aside className={clsx(styles.sidebar)}>
            <div className={clsx(styles.logo)}>
                <LogoDark className={clsx(styles.logoItem)}></LogoDark>
            </div>
            <div className={clsx(styles.search)}>
                <button className={clsx(styles.searchBtn)}>
                    <div className={clsx(styles.searchBtnIcon)}>
                        <span className={clsx(styles.searchIcon)}>
                            <FontAwesomeIcon icon={faMagnifyingGlass}/>
                        </span>
                    </div>
                    <div className={clsx(styles.searchPlacehodler)}>
                        <p>Tìm kiếm</p>
                    </div>
                </button>
            </div>  
        </aside>
    )
}
export default Sidebar;