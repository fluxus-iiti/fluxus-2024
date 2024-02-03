import React from 'react'
import Carousel from './Carousel'
import i1 from './image 26.png'
import i2 from './pngwing 16.png'
import i3 from './human.jpg'
import Detail from './Detail'

export default function Day1() {
    const Images = [i1,i2,i3];
  return (
    <>
    <div className='bg-black'>
    <div className='flex flex-col lg:flex-row justify-center mx-auto p-6 w-full h-max'>
      <div className='flex-initial'>
      <div className="border-t border-white my-4 mt-7 lg:w-96 sm:w-auto md:w-auto"></div>
      <div className='lg:flex flex-row items-center'>
      <Carousel images = {Images}/>
      <p className=" lg:absolute text-center text-white transform lg:rotate-90 lg:text-[80px] lg:left-80 xl:text-[80px] xl:left-96">Day 1</p>
      </div>
      <div className="border-t border-white my-4 mt-7 lg:w-96 sm:w-auto md:w-auto"></div>
      <Carousel images = {Images}/>
      <div className="border-t border-white my-4 mt-7 lg:w-96 sm:w-auto md:w-auto "></div>
      <Carousel images = {Images}/>
      <div className="border-t border-white md: my-8 "></div>
      </div>
      <div className='flex-initial flex justify-center'>
      <Detail/> 
      </div>
      <div className="hidden lg:block lg:flex-initial lg:w-96 ">
      <p className="text-white transform rotate-90 text-[150px] mt-[100px]">FLUXUS'24</p>
    </div>
    </div>
    </div>
    </>
  )
}
