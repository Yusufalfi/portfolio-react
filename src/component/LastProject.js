import React, {useRef} from 'react'

import { testimonials } from '../data'
import img from '../assets/img/about-1.png'
import {FiArrowRightCircle, FiArrowLeftCircle } from 'react-icons/fi';

import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
// import "swiper/css/navigation";
import '../swiper.css'




import { Autoplay, Pagination,  } from 'swiper';

const LastProject = () => {
    const Ref = useRef()
    const handleNext = () => {
      Ref.current.swiper.slideNext();
    }
    const handlePrev = () => {
      Ref.current.swiper.slidePrev();
    }
  return (
    <>
    <div class="flex flex-row justify-end gap-5 mt-5 mb-5 text-accent text-3xl hover:bg-blue ">
         
         <FiArrowLeftCircle className='hover:cursor-pointer' onClick={handlePrev} />
         <FiArrowRightCircle className='hover:cursor-pointer' onClick={handleNext}  />

      </div>
    <Swiper pagination={{
        clickable: true,
    }}
     slidesPerView={1.1} spaceBetween={15}  navigation={true}
    // autoplay={{
    //     delay: 2100,
    //     disableOnInteraction : false,
    // }}
    modules={[Autoplay, Pagination]}
    className='mySwiper' ref={Ref} >
        {testimonials.map((item, index) => {
            // const {authorImg, authorText} = item;
            return (
                <SwiperSlide key={index} >
                 <div className="flex flex-col lg:flex-row lg:gap-3 bg-secondary p-4 rounded-2xl">
                        <img className="object-cover h-full rounded-2xl md:h-60 md:max-w-full md:rounded-l-lg"
                        src={img}
                        alt="img" />
                        <div className="flex flex-col justify-center p-3">
                        <h5
                            className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
                            Card title
                        </h5>
                        <p className="mb-2 text-base text-neutral-600 dark:text-neutral-200">
                            This is a wider card with supporting text below as a natural adsdsdd
                            
                        </p>
                        <p className="text-xs text-neutral-500 dark:text-neutral-300">
                            Last updated 3 mins ago
                        </p>
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