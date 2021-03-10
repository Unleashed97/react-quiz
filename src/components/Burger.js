import React from 'react'

const Burger = ({toggleSidebar, handleBurgerBtnClick}) => {
    const classes =[]
    if(toggleSidebar){
        classes.push('active')
    }
    else classes.pop()

    return (
        <button className={`burger ${classes.join(' ')}`} onClick={handleBurgerBtnClick}>
            <div className="burger__item"></div>
            <div className="burger__item"></div>
            <div className="burger__item"></div>
        </button>
    )
}

export default Burger
