import Header from '../header/Header'
import Sidebar from '../sidebar/Sidebar'

function DefaultLayout({children}){

    return(
        <>
            <Header></Header>
            <div className='content'>
                <Sidebar></Sidebar>
                {children}
            </div>
        </>
    )
}
export default DefaultLayout;