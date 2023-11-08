import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <div className='z-50'>
        <div className='flex flex-col text-md text-neutral-400 p-8 w-64'>
            <div className='flex flex-row gap-4 mb-8 transition-transform transform hover:-translate-y-1 hover:text-neutral-300 cursor-pointer'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-home"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            Home
            </div>

            <div className='flex flex-row gap-4 mb-8 transition-transform transform hover:-translate-y-1 hover:text-neutral-300 cursor-pointer'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-presentation"><path d="M2 3h20"/><path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"/><path d="m7 21 5-5 5 5"/></svg>
            Projects
            </div>

            <div className='flex flex-row gap-4 mb-8 transition-transform transform hover:-translate-y-1 hover:text-neutral-300 cursor-pointer'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-mails"><rect width="16" height="13" x="6" y="4" rx="2"/><path d="m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7"/><path d="M2 8v11c0 1.1.9 2 2 2h14"/></svg>
            Contact Me
            </div>

            <Link href='/Resume_Updated.pdf' target='_blank'>
            <div className='flex flex-row gap-4 mb-8 transition-transform transform hover:-translate-y-1 hover:text-neutral-300 cursor-pointer'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-scroll-text"><path d="M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4"/><path d="M19 17V5a2 2 0 0 0-2-2H4"/><path d="M15 8h-5"/><path d="M15 12h-5"/></svg>
            Resume
            </div>
            </Link>

        </div>

        <div className='flex flex-col text-md text-neutral-400 pl-6 '>
            Socials

            <Link href='https://github.com/annkkiitt' target='_blank'>
            <div className='mt-4 p-2 flex flex-row gap-4 mb-4 transition-transform transform hover:-translate-y-1 hover:text-neutral-300 cursor-pointer'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0efb35" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            Github
            </div>
            </Link>

            <Link href='https://www.linkedin.com/in/ankit-rawat-165b63204/' target='_blank'>
            <div className='p-2 flex flex-row gap-4 mb-4 transition-transform transform hover:-translate-y-1 hover:text-neutral-300 cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#005cf0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                LinkedIn
            </div>
            </Link>

            <Link href='https://leetcode.com/ankit2001rawat/' target='_blank'>
            <div className='p-2 flex flex-row gap-4 mb-4 transition-transform transform hover:-translate-y-1 hover:text-neutral-300 cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff8800" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-code"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                Leetcode
            </div>
            </Link>
        </div>
    </div>
  )
}

export default Sidebar