import React from 'react'
import Products from './Products'
import Sidebar from './Sidebar'
import "./Appbody.css"

function AppBody() {
    return (
        <div className="appbody gap-x-8 w-full">
            <Sidebar />
            <Products />
        </div>
    )
}

export default AppBody
