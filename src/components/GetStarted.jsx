import React from 'react'

const GetStarted = ({text, customStyle}) => {
  return (
    <div className={`bg-primary cursor-pointer transition-all hover:opacity-90 py-3 px-8 text-lightGray rounded-full shadow-[0_15px_20px_-5px_#f25f3a9d] w-[160px] text-center ${customStyle}`}>
        <a href="#" className='font-bold'>{text}</a>
    </div>
  )
}

export default GetStarted