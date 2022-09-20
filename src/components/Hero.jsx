import React from 'react'
import { hero } from '../assets'
import {GetStarted} from './index'

const Hero = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row items-center md:justify-between'>
      <div className='max-w-[450px] items-start h-[100%]'>
        <h1 className='text-[38px] leading-[45px] md:text-[48px] md:leading-[54px] text-center md:text-left font-bold text-darkBlue'>Bring everyone together to build better products.</h1>
        <p className='text-gray text-[18px] md:text-[20px] text-center md:text-left my-4 md:my-10'>Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.</p>
        <GetStarted text="Get Started" customStyle="m-auto md:m-0 mt-4"/>
      </div>
      <div className='mt-10 md:mt-0'>
        <img src={hero} alt="Hero logo" className='w-[100%] h-[100%]' />
      </div>
    </div>
  )
}

export default Hero