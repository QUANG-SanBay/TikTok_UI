import clsx from 'clsx';

import { Button } from '../button';
import styles from './boxFixedTopRight.module.scss'
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faDownload, faMobileScreen } from '@fortawesome/free-solid-svg-icons';

function BoxFixedTopRight() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.inner}>
                <ul className={styles.listAction}>
                    <li className={styles.actionGetCoins}>
                        <Button capsule leftIcon={faTiktok} size={'small'}>
                            <span className={styles.text}>Get coins</span>
                        </Button>
                    </li>
                    <li className={styles.actionGetApp}>
                        <Button capsule leftIcon={faMobileScreen} size={'small'}>
                            <span className={styles.text}>Get App</span>
                        </Button>
                    </li>
                    <li className={styles.actionPcApp}>
                        <Button capsule leftIcon={faDownload} size={'small'}>
                            <span className={styles.text}>PC App</span>
                        </Button>
                    </li>
                </ul>
                <div className={styles.Account}>
                    {false ? (
                        // Render something if true
                        null
                    ) : (
                        // Render something else if false
                        <Button primary capsule size={'small'}>
                            <span>Log in</span>
                        </Button>
                    )}
                </div>
            </div>
        </div>
    )
}
export default BoxFixedTopRight;