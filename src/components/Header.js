import React from 'react'

import Nav from './Nav';
import Burger from './Burger';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <Nav/>
                    {/* <Burger/> */}
                </div>
            </div>
        </header>
    )
}

export default Header