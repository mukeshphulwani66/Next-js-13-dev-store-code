import Link from "next/link"
import ShareBtn from "../components/ShareBtn"
import ProductCard from "../components/ProductCard"
import { getProducts } from "../services/productService"

// export const revalidate = 30

const Page = async () => {
    console.log("home page returned")
    const products = await getProducts(5)
    return (
        <div>
            {/* banner */}
           <div className="bg-gray-900 h-72">
               <h1 className="text-white text-center text-5xl font-bold pt-20">Indias most loved <span className="text-orange-400">fashion</span> platform for <span className="text-rose-500">coders!</span></h1>
           </div>
           {/* cards */}
           <div className="m-4 flex flex-wrap gap-2">
            {products.data.map((item,index)=>  <ProductCard key={item.id} item={item} index={index} /> )}
    
           </div>
           <Link href="/products" className="inline-block text-orange-400 p-4 font-bold hover:underline">View All {">"}</Link>
        </div>
    )
}

export default Page