import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { testimonials } from '../constants';
import {GetStarted} from './index'

const Testimonials = () => {

  const [slides, setSlides] = useState(2);

  useEffect(() => {
    if (window.outerWidth > 768) {
      setSlides(2);
    } else {
      setSlides(1);
    }
  }, [])
  

  return (
    <div className='mb-20 md:mb-40'>
      <h1 className="text-secondary text-center text-[32px] md:text-[38px] my-20 font-bold">What they've said</h1>
      <Swiper
        style={{"--swiper-pagination-color": "#f25f3a"}}
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        slidesPerView={slides}
        spaceBetween={50}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false
        }}
      >
        {testimonials.map(testimonial => 
          <SwiperSlide key={testimonial.id} className="relative z-[1] mb-5 md:mb-10">
            <div className='flex justify-center mb-10'>
              <img src={testimonial.profile} alt={testimonial.name} className="w-[80px] h-[80px] absolute z-[2]"/>
            </div>
            <div className="bg-lightGray rounded-md flex flex-col gap-4 pt-14 pb-8 px-10 relative items-center">
              <h4 className='text-secondary font-bold'>{testimonial.name}</h4>
              <p className='text-center opacity-70'>"{testimonial.opinion}"</p>
            </div>
          </SwiperSlide>  
        )}
      </Swiper>
      <GetStarted text="Get Started" customStyle="mx-auto my-10"/>
    </div>
  )
}

export default Testimonials