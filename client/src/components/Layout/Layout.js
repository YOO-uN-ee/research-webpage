import React from 'react'
import Header from './Header';
import Footer from './Footer';

const Layout = (props) => {
    return (
        <div class='layout'>
            <main style={{minHeight: '80vh'}}>
                {props.children}
            </main>

        </div>
    );
};

export default Layout;