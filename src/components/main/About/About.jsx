'use client'
import React from 'react'
import VideoSection from './VideoSection'
import TextSection from './TextSection'

const About = () => {
  return (
    <div className='flex md:space-x-10 flex-col md:flex-row md:ml-40 items-center'>
      <TextSection />
      <VideoSection />
    </div>
  )
}

export default About
