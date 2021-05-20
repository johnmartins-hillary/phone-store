import React from 'react'
import ProductOptions from './ProductOptions'
import {ProductData} from "../data/ProductData"

function Products() {
    return (
        <div>
            <ProductOptions products={ProductData}/>
        </div>
    )
}

export default Products
