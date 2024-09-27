import React from 'react'
import Card from '../card/page';

const cardData = [
  { title: 'Card Title 1', content: 'This is just an example for the projects i have done', imageUrl: 'coming soon' },
  { title: 'Card Title 2', content: 'This is just an example for the projects i have done', imageUrl: 'coming soon' }
]

const Mywork = () => {
  return (
      <div id='mywork' className='container mx-auto min-h-screen '>
        <h1 className='text-4xl font-bold mb-6 pt-16'>What i do</h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            { cardData.map(({ title, content, imageUrl }, index ) => 
            ( <Card key={index} title={title} content={content} imageUrl={imageUrl} /> 
            ))}
          </div>
      </div>
    
  )
}

export default Mywork;
