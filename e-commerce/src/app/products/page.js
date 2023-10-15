import React from 'react'
import ProductCard from '../../components/ProductCard'
import { getProducts } from '../../services/productService'


// export const revalidate = 30

const Product = async () => {
    console.log("All product retuned")
    const products = await getProducts()
    return (
        <div
            className='my-4 mx-12 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'
        >
            {products.data.map((item,index)=>  <ProductCard key={item.id}  item={item} index={index}/> )}
        </div>
    )
}

export default Product