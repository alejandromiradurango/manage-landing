import React from 'react'
import {FiMenu} from 'react-icons/fi'
import {GrFormClose} from 'react-icons/gr'
import {logo} from '../assets/index'
import { navLinks } from '../constants'
import { useStateContext } from '../context/ContextApp'
import {GetStarted} from './index'

const Header = () => {

  const {sidebar, setSidebar} = useStateContext();

  return (
    <div className='md:max-w-[1200px] xl:max-w-[1440px] m-auto px-5 flex justify-between items-center py-5 sm:py-7 text-[14px] '>
      <img src={logo} alt="Manage Logo" />
      <ul className='sm:flex gap-5 hidden'>
        {navLinks.map(link => (
          <li key={link.id}>
            <a href="#" className='text-secondary font-medium transition-all hover:text-gray'>
              {link.text}
            </a>
          </li>
        ))}
      </ul>
      <GetStarted text="Get Started" customStyle="sm:block hidden"/>
      <button className='sm:hidden block text-[40px] -translate-y-1 relative z-[4] cursor-pointer' onClick={() => setSidebar(prev => !prev)}>
        {!sidebar ? <FiMenu /> : <GrFormClose />}
      </button>
    </div>
  )
}

export default Header