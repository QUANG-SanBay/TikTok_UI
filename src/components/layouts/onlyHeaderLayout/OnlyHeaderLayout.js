import Header from '../../header/Header'

function OnlyHeaderLayout({children}){

    return(
        <>
            <Header></Header>
            <div className='content'>
                {children}
            </div>
        </>
    )
}
export default OnlyHeaderLayout;