import React from 'react'
import ProfileImg from '../assets/img/foto-removebg.png'

const Hero = () => {

  const handleDownloadCv = () => {
    fetch('CV-Yusuf-Alfi.pdf').then(res => {
      res.blob().then(blob => {
          const fileURL = window.URL.createObjectURL(blob);
          let link = document.createElement('a');
          link.href = fileURL;
          link.download = 'CV-Yusuf-Alfi.pdf';
          link.click();
      })
   })
  }

  const handleToWa = () => {
    window.open('https://wa.me/6289507061224', '_blank', 'noreferrer');
  }

  return (
    <section id='home' className='flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden '>
        <div className='container mx-auto h-full'>
          <div className='flex items-center h-full pt-8'>
            <div className='flex-1 flex flex-col  lg:items-start'>
              <p className=" text-2xl text-accent md:text-3xl md:leading-tight lg:text-4xl lg:leading-[1.2] font-bold md:tracking-[-2px]" >Hi There., i'm Yusuf Alfi</p>
              <h1 className="mt-3 text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-4xl xl:text-5xl lg:leading-[1.1] font-bold md:tracking-[-2px]">Front End Developer & Web Developer </h1>
              <p className="text-lg mt-5">I am Yusuf alfi, an experienced software enginnering especially In web programming, 
               I’ve worked as front-end developer and web developer for 3 years, and right now I am looking forward to collaborate with you!
               </p>
              <div className="flex mt-5 space-x-4">
                <button onClick={handleToWa}  className="bg-transparent hover:bg-[#079211] text-[#50d71e] font-semibold hover:text-white py-2 px-4 border border-accent hover:border-accent rounded">
                 Ping Me
                </button>

                <button onClick={handleDownloadCv} className="bg-[#079211] hover:bg-transparent text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center border border-accent hover:border-accent">
                  <svg className="text-white fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                  <span className="text-white " >Download Cv</span>
                </button>
              </div>
            </div>

            <div className='hidden lg:flex mt-8 flex-1 justify-end items-end h-full'>
              <img className='mt-8' src={ProfileImg} alt="hero-img" />
            </div>

          </div>
        </div>
    </section>
  )
}

export default Hero