import React from 'react'
import SidebarTopOptions from './SidebarTopOptions'

function SidebarTop() {
    return (
        <div className="pt-2">
            Categories
            <SidebarTopOptions title="All"/>
            <SidebarTopOptions title="iphone"/>
            <SidebarTopOptions title="Samsung"/>
            <SidebarTopOptions title="ipad"/>
            <SidebarTopOptions title="MacBook"/>
            <SidebarTopOptions title="AirPods"/>
        </div>
    )
}

export default SidebarTop
