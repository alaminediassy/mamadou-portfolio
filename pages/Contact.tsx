import EmailSection from '@/components/EmailSection'
import Navbar from '@/components/Navbar'
import React from 'react'

const Contact = () => {
  return (
    <div className='w-full h-screen font-bodyFont bg-bodyColor text-textLight overflow-x-hidden
    overflow-y-scroll'>
        <Navbar/>
        <EmailSection/>
    </div>
  )
}

export default Contact