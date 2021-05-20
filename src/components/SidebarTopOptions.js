import React from 'react'

function SidebarTopOptions({title, storage, checked}) {
    return (
        <div className="pt-2 pb-2 pl-3 flex gap-x-2 items-center"> 
        {storage && <input type="radio" name="storageSize" checked/>}
        <h4>{title}</h4>
      
        </div>
    )
}

export default SidebarTopOptions
