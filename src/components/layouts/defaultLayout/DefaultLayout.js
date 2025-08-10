import styles from './DefaultLayout.module.scss'
import clsx from 'clsx'
import Sidebar from '../../sidebar/Sidebar'

function DefaultLayout({children}){


    return(
        <div className={clsx(styles.wrapper)}>
            <main className={clsx(styles.content)}>
                <div className={clsx(styles.innerContent)}>
                    <Sidebar />
                    <div className={styles.mainContent}>
                        {children}
                    </div>
                </div>
            </main>
        </div>
    )
}
export default DefaultLayout;