import { CheckIcon } from '@heroicons/react/24/solid'
import ShareBtn from '../../../components/ShareBtn'
import AddToCart from '../../../components/AddToCart'
const Product1 = () => {
    return (
        <div className='m-2 px-20'>
            <div className='flex justify-around items-center flex-wrap'>
                <div className='w-80 h-80'>
                    <img
                        src='/images/2.png'
                        className='w-full h-auto'
                    />
                </div>
                <div className='flex-1 max-w-md border rounded-md shadow-lg p-6 bg-white'>
                    <h2 className='text-3xl font-semibold'>Coding shirt</h2>
                    <div className='flex pt-2 gap-2'>
                        <CheckIcon className='text-lime-500 w-5 h-5' />
                        <span className='font-semibold'>In stock</span> |
                        <ShareBtn />
                    </div>
                    <div className='mt-4 border-t pt-4'>
                        <p className='text-gray-500'>Price:</p>
                        <p className='text-xl font-semibold'>3000</p>
                    </div>
                    <AddToCart />
                </div>
            </div>
            <p className='mt-8 text-2xl'>
                this will contain product descriptionb
            </p>
        </div>
    )
}

export default Product1