import styles from './DefaultLayout.module.scss'
import clsx from 'clsx'
import Header from '../../header/Header'
import Sidebar from '../../sidebar/Sidebar'

function DefaultLayout({children}){


    return(
        <div className={clsx(styles.wrapper)}>
            <Header />
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