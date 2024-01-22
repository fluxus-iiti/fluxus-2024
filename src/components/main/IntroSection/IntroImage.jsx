'use client'
import React from 'react'
import Image from 'next/image'
import IntroImg from '../../../../public/images/Main/Intro/IntroImg.png'
import LogoImg from '../../../../public/images/Main/Intro/logo.png'

const IntroImage = () => {
  return (
    <div className='basis-1/2 flex-0 lg:basis-3/5 flex flex-col'>
      <Image src={IntroImg} alt='Intro Image Here' className='w-full'></Image>
        {/* <Image src={LogoImg} alt='Intro Image Here' className='static'></Image> */}
    </div>
  )
}

export default IntroImage
