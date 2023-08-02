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
  // console.log(link);

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
      // console.log('clicked', image)
      setSrc(image)
      setModal(true)
    }

  return (
    <>
    <div className="flex flex-row justify-end gap-5 mt-5 mb-5 text-accent text-3xl hover:bg-blue ">
         
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
          // console.log(item.icon)
            // const {authorImg, authorText} = item;
            return (
                <SwiperSlide key={index} >
                 <div className="flex flex-col lg:flex-row lg:gap-3 bg-secondary p-4 rounded-2xl h-80">
                  
                        <div className='pic' onClick={() => zoomImage(item.image)}>
                          <img className="object-cover h-full rounded-2xl md:h-60 md:max-w-full md:rounded-l-lg"
                          src={item.image}
                          alt="img" />
                        </div>
                        <div className="flex flex-col justify-center p-3">
                        <h5
                            className=" mt-0  text-2xl font-medium text-accent ">
                              {item.name}
                        </h5>
                        <p className=" mt-3 text-md text-white">
                            Role : {item.role}
                        </p>
                        <p className="  mt-5 text-md text-white">
                            {item.description}
                        </p>
                        <p className=" mt-5 text-md text-accent">
                            {item.stack}
                        </p>
                        <p className=" mt-5 text-md text-accent">
                            {item.url}
                        </p>
                        <div className=" mt-5 text-md text-white-500 flex justify-start">
                          {/* <Link to={item.link} target="_blank"  rel="noreferrer">
                            {item.icon} gthub 
                          </Link> */}

                          <Link href="#" className='text-sm flex gap-2' onClick = {() => openInNewTab(item.link)}><FiLink2 className='mt-1 ml-2'/> view website</Link>
                          
                          
                            {/* <a className='text-sm flex mr-1 gap-2' href='https://github.com/Yusufalfi/task-mangement'  target="_blank"  rel="noreferrer">
                            {item.icon} view github |
                            </a>

                            <a className='text-sm flex gap-2' href='https://rtqbaitunnajmi.com/'  target="_blank"  rel="noreferrer">
                            <FiLink2 className='mt-1'/> view website
                            </a> */}

                          {/* <a className='text-sm flex gap-2' href='http://202.180.17.60:8001/dashboard'  target="_blank"  rel="noreferrer">
                            <FiLink2 className='mt-1 ml-2'/> view website
                            </a>  */}
                        </div>
                        </div>
                    </div>
                </SwiperSlide>
            )
        })}
    </Swiper>
</>
  )
}

export default LastProject