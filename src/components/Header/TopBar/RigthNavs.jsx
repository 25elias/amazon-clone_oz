import React from 'react'
import { MdArrowDropDown, MdShoppingCart } from 'react-icons/md'


export default function RigthNavs() {
  return (
    <div className='flex items-center justify-center gap-4'>
        <ul className='p-0 m-0 hidden md:flex items-center justify-center gap-4'>
            <li>
                <span className='flex items-center gap-1'>
                    <div className='w-6 h-4'>
                        <img src="./us_flag.png" alt="us-flag" 
                        className='w-full h-full'/>
                    </div>
                    <p className='text-xs text-gray-100 font-bold flex items-center gap-1'>
                        EN
                        <MdArrowDropDown className="w-5 h-5" />
                    </p>
                </span>
            </li>
            <li>
                <span className='text-xs text-gray-400 font-light leading-2'>
                    Hello, sign <br />
                    <p className='capitalise text-xs text-gray-100 font-bold flex items-center gap-1'>
                        Account & lists
                        <MdArrowDropDown className="w-5 h-5" />
                    </p>
                </span>
            </li>
            <li>
                <a href='#' className='text-xs text-gray-400 font-light leading-2'>
                    Returns <br />
                    <p className='capitalise text-xs text-gray-100 font-bold flex items-center gap-1'>
                        & Orders
                    </p>
                </a>
            </li>
        </ul>
        <a href='#' className='text-xs text-gray-100 font-bold flex items-center gap-1'>
            Cart
            <MdShoppingCart className="w-10 h-10 ml-0.5" />
        </a>
    </div>
  )
};
