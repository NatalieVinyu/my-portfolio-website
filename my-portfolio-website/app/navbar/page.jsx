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
                Home
              </Link>
            </li>
            <li>
              <Link href='/about'>
                About
              </Link>
            </li>
            <li>
              <Link href='/contact'>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
