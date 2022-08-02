import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='bg-black flex'>
        <div className='logo pt-2 pl-8  flex-[2]'>
            <Image src="/favicon.ico" width="50" height="40" alt="logo"/>
        </div>
 
        <ul className='flex items-end justify-evenly flex-[2]'>
            <li className='text-white pb-2 font-mono cursor-pointer hover:text-lime-100' >
              <a href="#about">1. About</a>
              </li>
            <li className='text-white pb-2 font-mono cursor-pointer hover:text-lime-100'>         
              <a href="#main-project">2. Main Project</a>
              </li>
            <li className='text-white pb-2 font-mono cursor-pointer hover:text-lime-100'>
              <a href='#mini-project'>3. Mini Project</a>
              </li>
            <li className='text-white pb-2 font-mono cursor-pointer hover:text-lime-100'>
              <a href="#contact">4. Contact</a>
              </li>
        </ul>
    
    </div>
  )
}

export default Navbar