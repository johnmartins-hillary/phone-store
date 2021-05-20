import React from 'react'


function SidebarCenter() {
  return (
    <div>
     <div className="flex flex-col pl-4 w-40 text-left items-center">
       <input type="number"  min="100" className="bg-white p-2 text-black rounded w-20 border-none outline-none" placeholder="min"/>
       <p>|</p>
       <input type="number" min="0" max="1000" className="bg-white p-2 text-black rounded w-20 border-none outline-none" placeholder="max"/>
     </div>
    </div>
  )
}

export default SidebarCenter
