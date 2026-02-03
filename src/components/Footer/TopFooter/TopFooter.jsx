import Link from 'next/link'
import React from 'react'
import TopNavs from './TopNavs'
import FooterLogo from './FooterLogo'

export default function TopFooter() {
  return (
    <div className=''>
        <div className=' wrapper bg-gray-500 py-2 text-center uppercase'>
            <Link href='/' className='text-sm text-gray-100 tra'>Top of page</Link>
        </div>
        <div className='wrapper bg-gray-900 py-2'>
            <TopNavs />
        </div>
        <div className='wrapper bg-gray-950 py-8'>
          <FooterLogo />
        </div>
    </div>
  )
}
