import React from 'react'

const Layout = (props) => {
    return (
        // <div class='layout'>
            <div class='intro-layout'>
                <main>
                    {props.children}
                </main>
            </div>
        // </div>
    )
}

export default Layout;