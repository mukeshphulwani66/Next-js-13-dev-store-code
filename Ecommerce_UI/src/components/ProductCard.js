import Link from 'next/link'

const ProductCard = () => {
    return (
        <Link href="/products/p1" className="w-full sm:w-64 h-62 rounded border border-gray-200 hover:cursor-pointer hover:shadow-xl">
            <img src="/images/1.png" className="w-full h-40" />
            <div className="flex justify-between p-2">
                <div>
                    <h1 className="font-bold">Coding shirt 1</h1>
                    <p className="w-40 truncate">this is description very long very very long</p>
                </div>
                <div className="text-green-500 py-2 font-bold">
                    20000
                </div>
            </div>
        </Link>
    )
}

export default ProductCard