import React from 'react';

const Contact = () => {
  return (
    <div id='contact' className='container mx-auto min-h-screen p-16'>
      <h1>Let's work together!</h1>
      <div>
        <form>
          <div>
            <label>Full Name:</label>
            <input
            type='text'
            id='name'
            /> 
          </div>

          <div>
            <label>Email:</label>
            <input
            type='email'
            id='name'
            /> 
          </div>

          <div>
            <textarea 
            id='message'/> 
          </div>
          <button className='bg-blue-500 py-2 px-4 rounded hover:bg-blue-700' type='submit'>Submit</button>

        </form>
      </div>
        
    </div>
  )
}

export default Contact;
