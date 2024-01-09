import React from 'react'
import Header from './RobotHeader';

const Layout = (props) => {
    return (
        // <div class='layout'>
            <>
            <Header />
            <div class='robot-layout'>
                
                <main>
                    {props.children}
                </main>
            </div>
            </>
        // </div>
    )
}

export default Layout;