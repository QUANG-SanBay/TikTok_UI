import clsx from "clsx";
import { Link } from "react-router-dom";
import styles from './TapControls.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket, faCompass, faEllipsis, faHouse, faTv, faUserCheck } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

function TapControls(){
    const taps = [
        {
            icon: faHouse,
            title: 'For you',
            path: '/'
        },
        {
            icon: faCompass,
            title: 'Explore',
            path: '/'
        },
        {
            icon: faUserCheck,
            title: 'Folowing',
            path: '/folowing'
        },
        {
            icon: faArrowUpFromBracket,
            title: 'Upload',
            path: '/upload'
        },
        {
            icon: faTv,
            title: 'LIVE',
            path: '/'
        },
        {
            icon: faUser,
            title: 'Profile',
            path: '/profile'
        },
        {
            icon: faEllipsis,
            title: 'More',
            path: '/'
        },
    ]

    return(
        <div className={clsx(styles.TapControls)}>
            <ul className={clsx(styles.listTaps)}>
                {taps.map((item, index) =>(
                    <li key={index} className={clsx(styles.tapItem)}>
                        <Link to={item.path} className={clsx(styles.tapLink)}>
                            <div className={clsx(styles.icon)}>
                                <FontAwesomeIcon icon={item.icon}/>
                            </div>
                            <div className={clsx(styles.tapTitle)}>
                                <span>{item.title}</span>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default TapControls;