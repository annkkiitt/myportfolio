'use client'
import Image from 'next/image'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import Contact from './components/Contact'
import { useState } from 'react'

export default function Home() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <div>
      <Navbar toggleSidebar={toggleSidebar}/>
      
      <div className='flex flex-row p-2 relative'>
        <div className={`bg-neutral h-screen rounded-md sticky top-20 z-50 ${isOpen ? 'block' : 'hidden'} sm:block`}>
          <Sidebar/>
        </div>

      <div className='w-auto'>

        <div >
          <Dashboard/>
        </div>

          <div>
          <Contact/>
        </div>

      </div>
      </div>

      
    </div>
    </>
  )
}
