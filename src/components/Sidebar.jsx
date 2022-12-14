import React from 'react'
import { GrFormClose } from 'react-icons/gr'
import { navLinks } from '../constants'
import { useStateContext } from '../context/ContextApp'

const Sidebar = () => {

  const {sidebar, setSidebar} = useStateContext();

  return (
    <>
    {sidebar && 
      <div className='fixed top-0 left-0 w-screen h-screen z-[3] bg-gradient-to-t from-black'>
        <button onClick={() => setSidebar(prev => !prev)} className="absolute top-4 right-9 text-[40px]">
          <GrFormClose />
        </button>
        <div className='w-[85%] py-10 bg-lightGray rounded-sm m-auto absolute top-[12%] left-[50%] -translate-x-[50%]'>
          <ul className='flex flex-col gap-7 items-center'>
            {navLinks.map(link => 
              <li key={link.id} className="text-secondary font-bold">
                <a href="#">
                  {link.text}
                </a>  
              </li>
            )}
          </ul>
        </div>
      </div>
    }
    </>
  )
}

export default Sidebar