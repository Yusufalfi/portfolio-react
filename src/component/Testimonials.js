import React from 'react'
import { testimonials } from '../data'



const Testimonials = () => {
  return (
    <section id='hire' className='section bg-secondary'>
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center mb-5">
            <h2 className='section-title'> Why Hire Me ?</h2>
        </div>
            {/* <TestimonialSlider /> */}
           
          <div className="grid lg:grid-cols-3 gap-8 md:grid-cols-2 gap-4 justify-center ">
              {testimonials.map((item, index) => {
                const {authorImg, authorText} = item;
                return (
                  <div className='bg-secondary p-6 rounded-2xl' key={index}>
                    <div className="text-accent rounded-sm flex justify-center items-center mb-24 text-[28px]">
                      <img className='object-contain w-[190px] rounded-full' src={authorImg} alt="img" />
                    </div>
                    <p>{authorText}</p>
                  </div>
                )
              })}
          </div>
            
      </div>
    </section>
  )
}

export default Testimonials