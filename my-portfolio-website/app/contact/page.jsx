import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faenvelope  } from '@fortawesome/free-brands-svg-icons';

const contact = () => {
  return (
    <div id='contact' className='bg-blue-900 p-4'>
      <h1>Contact me at</h1>
        <div className='grid grid-cols-1'>
        <FontAwesomeIcon 
            icon={faenvelope}  
            className='w-10 h-10 hover:w-15 h-15' 
          />
        </div>
    </div>
  )
}

export default contact;
