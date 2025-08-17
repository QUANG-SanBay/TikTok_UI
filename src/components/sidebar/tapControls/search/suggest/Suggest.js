import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Suggest.module.scss';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

function Suggest() {
    return (
        <div className={styles.suggestCtn}>
            <div className={styles.suggestTitle}>You may like</div>
            <ul className={styles.suggestList}>
                <li className={styles.suggestItem}>
                    <div className={styles.suggestIcon}>
                        <FontAwesomeIcon icon={faCircle} />
                    </div>
                    <div className={styles.suggestText}>
                        <h4>Suggest</h4>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Suggest;