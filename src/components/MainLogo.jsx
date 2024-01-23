import React from 'react'
import main_logo from '../../../public/images/Hero/hero_logo.png'
import Image from 'next/image'
export default function MainLogo() {
  return (
    <div className='flex justify-center items-center '>
        <Image src={main_logo} alt="" placeholder='blur' className='' />
    </div>
  )
}
