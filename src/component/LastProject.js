import React, {useRef, useState} from 'react'
// import { testimonials } from '../data'
import { lastProject } from '../data'
import { Link } from "react-router-dom";

import {FiArrowRightCircle, FiArrowLeftCircle, FiX,  FiLink2 } from 'react-icons/fi';

import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
// import "swiper/css/navigation";
import '../swiper.css'




import { Autoplay, Pagination,  } from 'swiper';

const LastProject = () => {

  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

    const Ref = useRef()
    const handleNext = () => {
      Ref.current.swiper.slideNext();
    }
    const handlePrev = () => {
      Ref.current.swiper.slidePrev();
    }

    const [modal, setModal] =  useState(false);
    const [src, setSrc] =  useState("");

    // zoom image
    const zoomImage = (image) => {
      setSrc(image)
      setModal(true)
    }

  return (
    <div className=''>
    <div className="flex flex-row justify-end gap-5 mt-5 mb-5 text-accent text-3xl">
         <FiArrowLeftCircle className='hover:cursor-pointer' onClick={handlePrev} />
         <FiArrowRightCircle className='hover:cursor-pointer' onClick={handleNext}  />
    </div>
    <div className={modal ? "modal open" : "modal"}>
          <img src={src} alt="img" />
          <FiX onClick={() => setModal(false)}/>        
    </div>

    <Swiper  pagination={{
        clickable: true,
    }}
     slidesPerView={1.1} spaceBetween={15}  navigation={true}
    // autoplay={{delay: 2100,disableOnInteraction : false,}}
    modules={[Autoplay, Pagination]}
    className='mySwiper' ref={Ref} >
        {lastProject.map((item, index) => {
            return (
              
              <SwiperSlide key={index} >
                <div className="flex flex-col h-[63vh] lg:flex-row lg:gap-3 md:h-full bg-secondary p-2 rounded-2xl ">
                
                  <div className='md:h-80 ' onClick={() => zoomImage(item.image)}>
                    <img className="h-full w-full object-cover md:h-full md:w-full rounded-2xl"
                    src={item.image}
                    alt="img" />
                  </div>

                  <div className="justify-center px-6 py-4 h-64">
                    <h5 className="mt-0  text-2xl font-medium text-accent ">{item.name}</h5>
                    <span className="mt-3 text-md text-white"> Role : {item.role}</span>
                    <p className="mt-3 text-md text-white">{item.description}</p>
                    <p className=" mt-3 text-md text-accent">{item.stack}</p>
                    <p className=" mt-3 text-md text-accent">
                        {item.url}
                    </p>
                    <div className="mt-3 text-md text-white-500 flex justify-start">
                      <Link href="#" className='text-sm flex gap-2' onClick = {() => openInNewTab(item.link)}><FiLink2 className='mt-1 ml-2'/> view website</Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            )
        })}
    </Swiper>
</div>
  )
}

export default LastProject