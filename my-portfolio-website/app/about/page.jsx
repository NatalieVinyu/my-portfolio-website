import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact  } from '@fortawesome/free-brands-svg-icons';

const About = () => {
  return (
    <div id='about' className='container mx-auto min-h-screen flex flex-col justify-between'>
      <div className='flex justify-center items-center flex-grow'>
        <div className='grid grid-cols-2 gap-4'>
          <p className='font-sans'>
            <span className='text-3xl'>Hello! I am Natalie Vinyu, and I’m a passionate self-taught front-end developer.</span>
            
            <br />
            My journey into web development began out of sheer curiosity, which quickly grew into a full-fledged passion. I’ve spent countless hours honing my skills in HTML, CSS, JavaScript, and React, building everything from simple landing pages to dynamic, responsive web applications. I’m always eager to learn and embrace new challenges, and I thrive in environments where creativity meets technology. I’m excited to bring my self-driven, problem-solving mindset to new projects and collaborate with like-minded individuals to create impactful digital experiences.</p>

            <br />

            <a href="/" class="group flex items-center gap-2 text-sm font-semibold text-blue-400 transition-all duration-500 ">Download Resume 
                <svg class="transition-all duration-500  group-hover:translate-x-1" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.25 9L14.25 9M10.5 13.5L14.4697 9.53033C14.7197 9.28033 14.8447 9.15533 14.8447 9C14.8447 8.84467 14.7197 8.71967 14.4697 8.46967L10.5 4.5" stroke="rgb(96 165 250)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </a>
        </div>
        
      </div>

      <div className='pb-8'>
        <div className='flex items-center justify-center space-x-16'>
          <FontAwesomeIcon 
            icon={faHtml5}  
            className='text-orange-600 w-8 h-8 hover:w-14 h-14 transition-transform duration-300' 
          />
          <FontAwesomeIcon
            icon={faCss3Alt}
            className='text-blue-600 w-8 h-8 hover:w-14 h-14 transition-transform duration-300' 
           />
          <FontAwesomeIcon 
           icon={faJs} 
           className='text-yellow-300 w-8 h-8 hover:w-14 h-14 transition-transform duration-300' 
           />
          <FontAwesomeIcon 
           icon={faReact} 
           className='text-blue-400 w-8 h-8 hover:w-14 h-14 transition-transform duration-300' 
           />
        </div>       
      </div>   
    </div>
    
  )
}

export default About;
