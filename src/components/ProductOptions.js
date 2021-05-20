import React from 'react'
import "./Products.css"
function ProductOptions({products}) {
    return (
        <div className="grid grid-cols-3 grid-rows-3 gap-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7">
            {products.map((product, index) => {
                return (
                    <div className="product md:p-2">
                        <p className="text-right text-gray-400">{product.label}</p>
                        <img src={product.image} alt={product.itle} className="w-20 h-20 md:w-40 md:h-40"/> 
                        <h4 className="text-gray-400 md:text-lg ">{product.title}</h4>
                        <p className="text-gray-400 text-sm truncate">Unlocked|128GB</p>
                        <p className="text-gray-400 text-xs">unit price</p>
                        <h3>{product.price}</h3>
                        <p className="text-gray-400 text-sm">{product.avail} Available</p>
                        <div className="text-center">
                        <input type="submit" value="BUY" className="bg-blue-800 rounded  pl-6 pr-6 pt-41 pb-1 mt-4 cursor-pointer" />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ProductOptions
