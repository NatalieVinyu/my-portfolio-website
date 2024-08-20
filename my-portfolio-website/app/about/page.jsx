import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact  } from '@fortawesome/free-brands-svg-icons';


const About = () => {
  return (
    <div id='about' className='container mx-auto'>
      <div className='grid grid-cols-2 gap-4'>
        <p>
          <span className='text-2xl'>Hello! My I am Natalie Vinyu, and I’m a passionate self-taught front-end developer.</span>
        <br />
           My journey into web development began out of sheer curiosity, which quickly grew into a full-fledged passion. I’ve spent countless hours honing my skills in HTML, CSS, JavaScript, and React, building everything from simple landing pages to dynamic, responsive web applications. I’m always eager to learn and embrace new challenges, and I thrive in environments where creativity meets technology. I’m excited to bring my self-driven, problem-solving mindset to new projects and collaborate with like-minded individuals to create impactful digital experiences.</p>
      </div>
      <div className='pt-8'>
        <div className='flex items-center justify-center space-x-10'>
          <FontAwesomeIcon 
            icon={faHtml5}  
            className='text-orange-600 w-10 h-10 hover:w-15 h-15' 
          />
          <FontAwesomeIcon
            icon={faCss3Alt}
            className='text-blue-600 w-10 h-10' 
           />
          <FontAwesomeIcon 
           icon={faJs} 
           className='text-yellow-300 w-10 h-10' 
           />
          <FontAwesomeIcon 
           icon={faReact} 
           className='text-blue-400 w-10 h-10' 
           />
        </div>       
      </div>      
    </div>
  )
}

export default About;
