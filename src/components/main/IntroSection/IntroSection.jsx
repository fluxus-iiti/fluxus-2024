'use client'
import React from 'react'
import IntroImage from './IntroImage'
import IntroText from './IntroText'

const IntroSection = () => {
  return (
    <div className='flex md:space-x-10 flex-col md:flex-row items-center'>
        <IntroImage />
        <IntroText />  
    </div>
  )
}

export default IntroSection
