import React from 'react'
import Header from '../RobotHeader';

const Layout = (props) => {
    return (
        // <div class='layout'>
        <>
            <div class='layout-two'>
            <Header/>
                <main>
                    {props.children}
                </main>
            </div>
        </>
        // </div>
    )
}

export default Layout;