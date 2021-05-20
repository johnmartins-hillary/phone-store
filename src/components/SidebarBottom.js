import React from 'react'
import SidebarTopOptions from './SidebarTopOptions'

function SidebarBottom() {
    const storage = true;
    
    return (
        <div className="group pt-2">
        Storage
        <SidebarTopOptions title="32GB" storage={storage}/>
        <SidebarTopOptions title="64GB" storage={storage}/>
        <SidebarTopOptions title="128GB" storage={storage}/>
        <SidebarTopOptions title="254GB" storage={storage}/>
    </div>
    )
}

export default SidebarBottom
