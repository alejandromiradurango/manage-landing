import React, { useEffect, useState } from 'react'
import { bgDesktop, bgMobile } from '../assets'
import {GetStarted} from './index'

const CTE = () => {

  const [image, setImage] = useState('desktop');

  useEffect(() => {
    if (window.outerWidth > 768) {
      setImage('desktop');
    } else {
      setImage('mobile');
    }
  }, [])
  

  return (
    <div className='md:max-w-[1200px] relative xl:max-w-[1440px] m-auto px-5 py-14'>
      <img src={image === 'desktop' ? bgDesktop : bgMobile} alt="Background Simplify" className={`${image === 'desktop' && 'w-[100%] object-cover'} h-[100%]  absolute top-0 left-0 z-[1]`}/>
      <div className='flex flex-col sm:flex-row justify-between items-center'>
        <h1 className='text-[43px] sm:text-[40px] text-lightGray font-bold leading-[50px] text-center sm:text-left'>Simplify how your team<br className='hidden sm:block' /> works today.</h1>
        <GetStarted text="Get Started" customStyle="bg-lightGray text-primary hover:bg-lightGray transition-all mt-10 sm:mt-0"/>
      </div>
    </div>
  )
}

export default CTE