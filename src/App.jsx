import React from 'react'
import { LinksFooter } from './constants'
import { Header, Sidebar, Hero, Features } from './components'


const App = () => {

  return (
    <div className='font-primary relative'>
      <div className='md:max-w-[1200px] xl:max-w-[1440px] m-auto px-5'>
        <Header />
        <div className='overflow-hidden'>
        <Sidebar />
        <Hero />
        <Features />
        </div>
      </div>
    </div>
  )
}

export default App