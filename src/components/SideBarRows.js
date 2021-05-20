import React from 'react'
import '../styles/sidebarrows.css'

const SideBarRows = ({selected, Icons, title}) => {
    return (
        <div className={`sidebar_rows ${selected && "selected"}`}>
            <Icons  className="sidebar_icons"/>
            <h2 className="sidebar_title">{title}</h2>
        </div>
    )
}

export default SideBarRows

