import React from 'react'
import HeaderLeft from './HeaderLeft'
import HeaderRight from './HeaderRight'
// import ImageOne from "./ima/responsive.png"


function Header() {
    return (
        <div className="header flex p-4 mb-6 w-[100%] justify-between">
           <HeaderLeft />
           <HeaderRight />
        </div>
    )
}

export default Header
