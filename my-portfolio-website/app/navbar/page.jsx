import React from 'react';
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='fixed w-full bg-transparent shadow-lg p-6'>
      <nav className='flex justify-center'>
        <div className='container'>
          <ul className='flex justify-center space-x-4'>
            <li>
              <Link href='/'>
                About me
              </Link>
            </li>
            <li>
              <Link href='/about'>
                My Work
              </Link>
            </li>
            <li>
              <Link href='/contact'>
                Contact me
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
