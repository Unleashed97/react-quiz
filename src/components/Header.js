import React from 'react'

import Nav from './Nav';
import Burger from './Burger';

const Header = (props) => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <Nav />
                    <Burger toggleSidebar={props.toggleSidebar} handleBurgerBtnClick={props.onSidebarToggling}/>
                </div>
            </div>
        </header>
    )
}

export default Header