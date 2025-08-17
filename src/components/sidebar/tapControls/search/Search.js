import clsx from 'clsx'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';

import Suggest from './suggest/Suggest';
import styles from './Search.module.scss'

function Search(){
    return(
        <div className={clsx(styles.searchContainer)}>
            <div className={clsx(styles.searchHeader)}>
                <h2>Search</h2>
                <div className={clsx(styles.searchIcon)}>
                    <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                </div>
            </div>
            <div className={styles.searchBody}>
                <div className={styles.searchForm}>
                    <form className={styles.from}>
                        <input type='search' className={styles.formInput} placeholder='Tìm kiếm...'></input>
                        <div className={styles.formIconCtn}>
                            <FontAwesomeIcon icon={faCircleXmark} className={styles.formIcon}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faSpinner} className={styles.formIcon}></FontAwesomeIcon>
                        </div>
                    </form>
                </div>
                <div className={styles.searchResultCtn}>
                    <Suggest></Suggest>
                </div>
            </div>
        </div>
    )
}
export default Search;