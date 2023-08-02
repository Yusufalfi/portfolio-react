import React from 'react'
import LastProject from './LastProject'
// import Projects from './Projects'


const Portfolio = () => {


  return (
    <section id='portfolio' className='section bg-primary'>
       <div className="container mx-auto">
         <div className='flex flex-col items-center text-center'>
            <h2 className='section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block before:lg:center'>My lates Work</h2>
            
         </div>
         
         <LastProject />
         {/* <Projects /> */}
       </div>
    </section>
  )
}

export default Portfolio