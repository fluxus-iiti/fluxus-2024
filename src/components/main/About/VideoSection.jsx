'use client'
import React from 'react'
import Image from 'next/image'
import AboutImg from '../../../../public/images/Main/About/AboutImg.png'

const VideoSection = () => {
  return (
    <div className='basis-1/2 flex-0 lg:basis-3/5'>
      <Image src={AboutImg} alt='About Video Here' className='w-full'></Image>
    </div>
  )
}

export default VideoSection
