import Link from 'next/link'
import {MdOutlineLocationOn, MdOutlineMyLocation} from 'react-icons/md'

export default function Logo() {
  return (
    <div className='flex items-center justify-between gap-4'>
        <Link href="/" className=' sm:hidden w-8 max-h-8'>
            <img src="/logo_mobile_b.png" alt="Amazon Logo"  className='w-8 max-h-8  text-white'/>
        </Link>
        <Link href="/" className='hidden sm:block w-24 h-8 object-cover overflow-hidden'>
            <img src="/logo_desktop_w.jpeg" alt="Amazon Logo"  className='w-full h-full overflow-hidden text-white'/>
        </Link>
        <div className='flex gap-1 items-center sm:items-end sm:justify-end w-max'>
        <MdOutlineLocationOn className='order-1  sm:w-4 sm:h-4 h-6 w-6 text-gray-100'/>
            <span className='sm:order-2 text-xs text-gray-400 font-normal'>
                Deliver to
                <p className='hidden sm:block text-gray-100 font-bold'>Ethiopia</p>
            </span>
        </div>
    </div>
  )
};
