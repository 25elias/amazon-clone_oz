import React from 'react'
import navItems from '../navItems';
import { FaBars } from 'react-icons/fa6';



export default function NavBars() {
  return (
    <div className='flex items-center gap-2 w-full py-2'>
        <button className='text-gray-100'>
            <FaBars className='w-4 h-4 text-gray-100'/>
        </button>
        {
            navItems.map(({title, path}) => {
                return (
                    <ul key={path} className='hidden sm:flex'>
                        <li className="p-2 text-xs text-white/90 font-semibold tracking-wide">{title}</li>
                    </ul>

                );
            })
        }
    </div>
  )
}
