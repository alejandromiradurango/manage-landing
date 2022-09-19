import React from 'react'
import { hero } from '../assets'
import {GetStarted} from './index'

const Hero = () => {
  return (
    <div className='flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between'>
      <div className='max-w-[450px] items-start h-[100%]'>
        <h1 className='text-[38px] leading-[45px] sm:text-[48px] sm:leading-[54px] text-center sm:text-left font-bold text-darkBlue'>Bring everyone together to build better products.</h1>
        <p className='text-gray text-[18px] sm:text-[20px] text-center sm:text-left my-4 sm:my-10'>Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.</p>
        <GetStarted text="Get Started" customStyle="m-auto sm:m-0 mt-4"/>
      </div>
      <div className='mt-10 sm:mt-0'>
        <img src={hero} alt="Hero logo" className='w-[100%] h-[100%]' />
      </div>
    </div>
  )
}

export default Hero