import React from 'react'
import { Header, Sidebar, Hero, Features, Testimonials, CTE, Footer } from './components'


const App = () => {

  return (
    <div className='font-primary relative'>
      <div className='bg-lightGray/60 sticky top-0 z-[3] backdrop-blur-lg'>
        <Header />
      </div>
      <div className='md:max-w-[1200px] xl:max-w-[1440px] m-auto px-5'>
        <div className='overflow-hidden'>
          <Sidebar />
          <Hero />
          <Features />
          <Testimonials />
        </div>
      </div>
      <div className='bg-primary'>
        <CTE />
      </div>
      <div className='bg-darkBlue'>
        <Footer />
      </div>
    </div>
  )
}

export default App