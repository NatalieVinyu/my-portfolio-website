import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <div id='contact' className='container mx-auto min-h-screen p-16'>
      <h1>You can reach me at</h1>
      <div>
        <form>
          form here
        </form>
      </div>
        <div className='grid grid-cols-1'>
          <div className='flex'>
            <FontAwesomeIcon 
            icon={faEnvelope}  
            className='w-5 h-5' 
            />
            <p className='ml-3'>Email: natalievinyu@gmail.com</p>
          </div>
        
        </div>
    </div>
  )
}

export default Contact;
