import Link from 'next/link'
import React from 'react'

const Navbar = ({toggleSidebar}: {toggleSidebar: React.MouseEventHandler}) => {
  return (
    <>
    <div className='h-16 p-4 text-neutral-300 text-lg bg-slate-900 flex flex-row items-center sticky top-0 z-10' >
    <div className="w-12 md:hidden fixed">
      <button id="sidebar-toggle" className="p-2 focus:outline-none" onClick={toggleSidebar}>
        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>
        
        <div className='mr-3 ml-10'>
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#24bdf0" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-crown"><path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"/></svg>
        </div>
        
        <Link href='/'>
        <div className='cursor-pointer'>
        devAnkit
        </div>
        </Link>
    </div>

    </>
  )
}

export default Navbar