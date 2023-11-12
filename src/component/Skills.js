import React from 'react'
import { skills } from '../data'

const Skills = () => {
  return (
    <section id='skills' className='bg-tertiary py-12'>
      <div className="container mx-auto">
      <div className='flex flex-col items-center text-center'>
            <h2 className='section-title before:content-skills relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block'>What Tech I Use</h2>
         </div>
        <div className='grid mb-8 grid-cols-5 md:grid-cols-10 md:grid-flow-row mt-2'>
          {skills.map((item, index) => {
            return(
              <>
       
              <div className='flex flex-col justify-between gap-3' key={index}>
                  <img src={item.image} alt='img' className='w-16 md:w-32 lg:w-28 gap-3 object-cover' />
                  <p className='text-xs md:text-base text-center'>{item.name}</p>
              </div>

              </>


            )
          })}
        </div>
        
      </div>
    </section>
  )
}

export default Skills