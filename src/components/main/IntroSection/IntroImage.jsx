'use client'
import React from 'react'
import Image from 'next/image'
import IntroImg from '../../../../public/images/Main/Intro/IntroImg.png'
import LogoImg from '../../../../public/images/Main/Intro/logo.png'

const IntroImage = () => {
  return (
    <div>
      <Image src={IntroImg} alt='Intro Image Here'/>
        {/* <Image src={LogoImg} alt='Intro Image Here' className='static'></Image> */}
    </div>
  )
}

export default IntroImage
