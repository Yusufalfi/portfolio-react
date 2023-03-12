import React from 'react'

import { testimonials } from '../data'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import '../swiper.css'


import { Autoplay, Pagination } from 'swiper';


const TestimonialSlider = () => {
  return (
    <>
        <Swiper pagination={{
            clickable: true,
        }}
        autoplay={{
            delay: 2100,
            disableOnInteraction : false,
        }}
        modules={[Autoplay, Pagination]}
        className='mySwiper'
            >
            {testimonials.map((item, index) => {
                const {authorImg, authorText} = item;
                return (
                    <SwiperSlide key={index} >
                      <div className="container mx-auto">
					  <div className="flex flex-col lg:flex-row gap-12 lg:gap-32">
                            <div className=" mx-auto">
                                <img className='object-contain w-90 rounded-full' src={authorImg} alt="img" />
                            </div>
                 
                            <div className="flex flex-col max-w-3xl mb-5">
                                <h5 className='font-body text-md lg:text-2xl mb-8 italic font-normal'>{authorText}</h5>
                    
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

export default TestimonialSlider