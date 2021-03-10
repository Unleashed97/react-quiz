import React from 'react'

import Nav from './Nav';
import Burger from './Burger';

const Header = ({toggleSidebar, props}) => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <Nav toggleSidebar={toggleSidebar} props={props}/>
                </div>
            </div>
        </header>
    )
}

export default Header