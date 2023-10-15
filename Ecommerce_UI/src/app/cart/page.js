import { TrashIcon, XCircleIcon } from '@heroicons/react/24/outline'
import { MinusIcon, PlusIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
const page = () => {
    const cartCount = 1
    return (
        <div className='m-5 px-20'>
            {cartCount > 0 ? (
                <>
                    <h2 className='text-4xl font-semibold'>Cart Items: {cartCount}</h2>
                    <button className='text-orange-400 mt-2 font-bold hover:text-red-600 hover:cursor-pointer'>
                        Clear all <TrashIcon className='inline-block w-4 h-4' />
                    </button>
                </>
            ) : (
                <>
                    <h2 className='text-4xl font-semibold'>Your shopping cart is empty !</h2>
                    <Link href='/products' className='text-xl mt-1 text-orange-500 underline'>Shop here</Link>
                </>
            )}

            {
                cartCount > 0 && (
                    <div>
                        <div className='flex justify-between border rounded-md p-4 my-2 bg-white hover:shadow-lg'>
                            <Link href="/product/p1" className='flex items-center'>
                                <img src="/images/1.png" className='w-20 h-auto' />
                                <p className='font-semibold text-xl ml-2'>coding shirt</p>
                            </Link>
                            <div className='flex items-center gap-5'>
                                <div className='flex items-center gap-3'>
                                    <button className='p-1 rounded-md text-orange-500 hover:bg-orange-500 hover:text-white disabled:cursor-not-allowed'>
                                        <MinusIcon className='w-6 h-6' />
                                    </button>
                                    <p className='font-semibold text-xl'>0</p>
                                    <button className='p-1 rounded-md text-orange-500 hover:bg-orange-500 hover:text-white disabled:cursor-not-allowed'>
                                        <PlusIcon className='w-6 h-6' />
                                    </button>
                                </div>
                                <p>x <span className='text-xl font-semibold'>999</span></p>
                                <button className='text-orange-500 hover:text-red-600'>
                                    <XCircleIcon className='w-6 h-6' />
                                </button>
                            </div>
                        </div>

                        <div className='flex flex-col items-end border-t py-4 mt-8'>
                            <p className='text-xl'>
                                Total <span className='font-bold text-green-500'>5000</span>
                            </p>
                            <button className='mt-4 py-2 px-6 bg-orange-500 text-white hover:bg-red-600 rounded-md'>
                                Checkout
                            </button>
                        </div>
                    </div>
                )
            }

        </div>
    )
}

export default page