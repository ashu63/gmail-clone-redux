import React from 'react'
import './SidebarRow.css'

function SidebarRow({title, Icon, selected, noOfMails}) {
    return (
        <div className= {`sidebarRow ${selected && "sidebarRow--active"}`} >
            <Icon className={`sidebarRowIcon ${selected && "sidebarRowIcon--active"}`}/>
        <h2 className={`sidebarTitle ${selected && "sidebarTitle--active"}`}>{title}</h2>
        <p>{noOfMails}</p>
        </div>
    )
}

export default SidebarRow 
