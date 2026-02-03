import React from 'react'
import { MdSearch } from 'react-icons/md'

export default function SearchBar() {
  return (
    <div className='hidden sm:block w-full'>
        <span className='flex flex-1 items-center'>
            <div className='rounded-l-sm overflow-visible'>
                <select className='bg-gray-300 w-13 h-9 px-1'>
                    <option name="" id="">All</option>
                </select>
            </div>
            <input type="text"  className='bg-white w-full h-9 px-3 border-none outline-none'/>
            <button className='bg-amber-500 h-9 w-max px-3 rounded-r-sm overflow-hidden'>
                <MdSearch className='w-6 h-6 text-gray-900'/>
            </button>
        </span>
    </div>
  )
}
