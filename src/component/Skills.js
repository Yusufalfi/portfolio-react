import React from 'react'
import { skills } from '../data'

const Skills = () => {
  return (
    <section id='skills' className='bg-tertiary py-12'>
      <div className="container mx-auto">
      <div className='flex flex-col items-center text-center'>
            <h2 className='section-title before:content-skills relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block'>What Tech I Use</h2>
         </div>
        <div className='grid mt-9 mb-8 grid-cols-8 md:grid-flow-row mt-2'>
          {skills.map((item, index) => {
            return(
              <div className='flex items-center justify-center' key={index}>
                  <img src={item.image} alt='img' />
              </div>
            )
          })}
        </div>
        
      </div>
    </section>
  )
}

export default Skills