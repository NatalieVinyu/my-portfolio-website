import React from 'react'
import Card from '../card/page';

const Mywork = () => {
  return (
      <div className='container mx-auto p-4'>
        <h1 className='text-4xl font-bold mb-6'>Card Example</h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            <Card 
              title='Card Title 1'
              content='This is just an example for the projects i have done'
              imageUrl='coming.soon'
            />
            <Card 
            title='Card Title 2'
            content='This is just an example for the projects i have done'
            imageUrl='coming.soon'
            />
            <Card 
            title='Card Title 3'
            content='This is just an example for the projects i have done'
            imageUrl='coming.soon'
            />
             <Card 
            title='Card Title 4'
            content='This is just an example for the projects i have done'
            imageUrl='coming.soon'
            />             
          </div>
      </div>
    
  )
}

export default Mywork;
