import React from 'react'

const Sidebar = ({toggleSidebar}) => {
    const classes = []

    if(toggleSidebar){
        classes.push('active');
    }
    else{
        classes.pop();
    }
    return (
        <div className={`sidebar ${classes.join(' ')}`}>
            ajgl
        </div>
    )
}

export default Sidebar
