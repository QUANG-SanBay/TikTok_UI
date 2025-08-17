import clsx from "clsx";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import Tippy from "@tippyjs/react";

import TapControls from "./tapControls/TapControls";
import Search from "./tapControls/search/Search";
import styles from './Sidebar.module.scss'
import {LogoDark, LogoNoTitleDark} from '~/assets/imgs/'
import ButtonLogin from "./buttonLogin/ButtonLogin";

function Sidebar(){
    return(
        <aside className={clsx(styles.sidebar)}>
            <div className={clsx(styles.logo)}>
                <LogoDark className={clsx(styles.logoItem)}></LogoDark>
                <LogoNoTitleDark className={clsx(styles.logoItem)}></LogoNoTitleDark>
            </div>
            <div className={clsx(styles.search)}>
                
                <Tippy content={<Search></Search>} trigger="click" placement="right">
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
                </Tippy>
            </div>  
            <TapControls></TapControls>
            <ButtonLogin></ButtonLogin>
        </aside>
    )
}
export default Sidebar;