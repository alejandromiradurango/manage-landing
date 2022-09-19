import React from 'react'
import { features } from '../constants'

const FeatureCard = ({id, title, content}) => (
  <div key={id} className='flex flex-col mb-10 relative'>
    <div className='relative flex items-center gap-4 sm:block mb-2 rounded-full sm:bg-transparent'>
      <div className='absolute w-[130%] top-0 left-0 rounded-full bg-primary/10 sm:bg-transparent px-6 h-[100%]'/>
      <span className='relative sm:absolute font-bold sm:-left-[100px] rounded-full text-lightGray padding bg-primary px-6 py-2'>{id}</span>
      <h3 className='font-bold text-secondary sm:py-2'>{title}</h3>
    </div>
    <p className='text-darkBlue opacity-80 mt-2'>{content}</p>
  </div> 
)

const Features = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-between mt-16'>
      <div className='max-w-[450px]'>
        <h1 className='text-secondary text-[36px] font-bold leading-[40px] mb-6'>What's different about Manage?</h1>
        <p className='text-darkBlue opacity-80 sm:max-w-[350px]'>Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.</p>
      </div>
      <div className='max-w-[450px]'>
        {features.map(feat => 
            <FeatureCard id={feat.id} title={feat.title} content={feat.paragraph}/>
          )}
      </div>
    </div>
  )
}

export default Features