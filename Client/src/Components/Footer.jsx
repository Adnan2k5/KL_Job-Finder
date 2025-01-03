import React from 'react'
import { Instagram, Linkedin, Twitter } from 'lucide-react'

export const Footer = () => {
  return (
    <div className='w-screen flex items-center justify-between px-4 py-5'>
        <div className="logo text-center px-3 font-bold tracking-wider text-xl">
            <h1>KLU Job Portal</h1>
        </div>
        <div className="socials px-5">
            <ul className='flex space-x-3 text-xl'>
                <li><Instagram /></li>
                <li><Linkedin /></li>
                <li><Twitter /></li>
            </ul>
        </div>
    </div>
  )
}
