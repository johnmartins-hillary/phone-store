import React from 'react'
import SidebarCenter from './SidebarCenter'
import SidebarTop from './SidebarTop'
import "./Sidebar.css"
import SidebarBottom from './SidebarBottom'


function Sidebar() {
    return (
        <div className="sidebar hidden md:block w-[30%] h-full">
            <SidebarTop />
            <SidebarCenter />
            <div className="sidebar_center">

            </div>
            <div className="sidebar_bottom">
                <SidebarBottom />
            </div>
            
        </div>
    )
}

export default Sidebar
