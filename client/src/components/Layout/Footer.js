import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer(prev, after) {
    return (
        <div className="bg-dark text-light p-3">
            <NavLink to={prev}><button className="prev_button">Previous</button></NavLink>
            <NavLink to={after}><button className="after_button">Next</button></NavLink>
        </div>
    );
};

export default Footer;