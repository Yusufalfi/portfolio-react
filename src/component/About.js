import React from 'react'

// import img from '../assets/img/about.webp'
import img from '../assets/img/about-1.png'
import Social from './Social'

const About = () => {
  return (
    <section id='about' className='section bg-secondary'>
        <div className='container mx-auto'>
            <div className='flex flex-col xl:flex-row gap-24'>
                <img src={img} alt='img' className='object-cover h-full xl:w-[566px] lg:w-[566px] md:mx-auto lg:mx-auto xl:mx-auto rounded-2xl' />
                <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
                    <div className='flex flex-col items-center'>
                        <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-5 
                            before:content-about relative before:absolute before::opacity-40 before:-top-[2rem] before:-right-[4rem] before:hidden before:lg:block'>
                                yusuf alfi
                        </h2>
                        <p className='mb-4 text-accent' >Freelace Frontend developer & Web Developer</p>
                        <hr className='mb-8 opacity-5' />
                        <p className='mb-8'>
                        Hi, my name is Yusuf alfi, who specializes in front end web applications and freelancer based in Bekasi, Indonesia. I can provide clean code and responsive for desktop and mobile. I also can make to build scaleable web app and user-friendly interface to give users the best experience while accessing their websites
                        </p>
                    </div>
                    <div className='lg:block'>
                        <Social />
                    </div> 
                    {/* <button className='btn btn-md bg-accent hover:bg-transparent border border-accent hover:border-accent transition-all'>Contact Me</button> */}
                </div>
            </div>

        </div>
    </section>
  )
}

export default About