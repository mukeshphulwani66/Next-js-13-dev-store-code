import { LinkIcon } from '@heroicons/react/24/solid'
const ShareBtn = () => {

    return (
        <button
            className="text-orange-400 inline-block font-bold hover:cursor-pointer hover:text-red-600"
        >
            <LinkIcon className='inline-block mr-2 w-5 h-5' />
            Share Link
        </button>
    )
}

export default ShareBtn