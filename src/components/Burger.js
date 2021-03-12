import React from 'react'

const Burger = (props) => {
    const classes =[]
    if(props.toggleSidebar){
        classes.push('active')
    }
    else classes.pop()

    return (
        <button className={`burger ${classes.join(' ')}`} onClick={props.handleBurgerBtnClick}>
            <div className="burger__item"></div>
            <div className="burger__item"></div>
            <div className="burger__item"></div>
        </button>
    )
}

export default Burger
