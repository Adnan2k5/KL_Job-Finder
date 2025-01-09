import React from 'react'
import { Instagram, Linkedin, Twitter } from 'lucide-react'

export const Footer = () => {
  return (
    <div className='w-screen flex flex-col items-start px-4 py-5 bg-black bg-opacity-50'>
        <div className="logo text-left px-3 font-bold tracking-wider text-3xl mb-10">
            <h1>Contact US</h1>
        </div>
        <div className="contact-info px-3 mb-10">
          <ul className="text-left tracking-wider text-s">
            <p>Address: Vaddeswaram, vijayawada, andhra pradesh</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: KL_jobs@example.com</p>
          </ul>
        </div>
        <div className="socials px-3 mt-auto">
            <ul className='flex space-x-3 text-xl'>
                <li className='hover:text-purple-300'><Instagram /></li>
                <li className='hover:text-blue-500'><Linkedin /></li>
                <li className='hover:text-blue-300'><Twitter /></li>
            </ul>
        </div>
    </div>
  )
}