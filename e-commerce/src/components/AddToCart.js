"use client"
import toast, { Toaster } from 'react-hot-toast';
import { useCart } from '../utils/useCart';

const AddToCart = ({product}) => {
    const {addItem} = useCart()
    const handleCartAdd = ()=>{
      addItem(product)
      toast.success(`${product.name} Item added to cart`)
    }
  return (
    <div>
        <button onClick={handleCartAdd} className='w-full mt-4 py-2 px-6 bg-orange-500 text-white hover:bg-red-600 rounded-md'>
            Add To Cart
        </button>
        <Toaster />
    </div>
  )
}

export default AddToCart