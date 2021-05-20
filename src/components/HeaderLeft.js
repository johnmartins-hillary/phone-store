import React from 'react'

function HeaderLeft() {
    return (
    <div className="gap-y-4 pb-4 w">
        <h2 className="text-lg pb-2 md:text-4xl">SHOP OUR LATEST</h2>
        <h2 className="text-lg pb-4 md:text-4xl">AVAILABLE STOCK HERE</h2>
        <form className="flex justify-between ">
            <input type="text" className="text-black p-2 rounded w-[80%] outline-none border-none md:w-80 lg:w-96" placeholder="Enter Search Term (e.g iphone x, 128GB or A1) "/>
            <input type="submit" className="bg-blue-800 rounded ml-2 p-2 outline-none border-none" value="SEARCH" />
        </form>
    </div>
    )
}

export default HeaderLeft
