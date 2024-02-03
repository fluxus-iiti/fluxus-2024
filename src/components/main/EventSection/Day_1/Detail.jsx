import React from 'react'
import Image from 'next/image'
import constellation from '../../../../../public/images/Day1/pngwing15.png'
import star from '../../../../../public/images/Day1/pngwing16.png'
export default function Detail() {
  return (
    <>

    <div className="flex-1 flex flex-wrap justify-center lg:justify-end w-fit ">
          <div className=" h-fit w-2/3 shadow-md border border-white relative text-center">
            <div className="h-8 w-8 border rounded-full border-t-black border-l-black border-b-white  absolute -top-[5px] -left-[6px]"></div>
            <div className="h-8 w-8 border rounded-full border-t-black border-l-white border-b-white border-r-black  absolute -top-[5px] -right-[6px]"></div>
            <Image
            src='/images/Day1/pngwing15.png'
              className="mb-4 mx-auto w-2/3 h-1/2"
              alt="constellation"
            />
            <h2 className="text-xl mb-20 text-white">TWO PRONITES</h2>
            <h2 className="text-xl mb-20 text-white">REMARABLE SPEAKERS</h2>
            <h2 className="text-xl mb-20 text-white">AMAZING MUSIC</h2>
            <h2 className="text-xl mb-20 text-white">A LIFETIME EXPERIENCE</h2>
            <Image
            src='/images/Day1/pngwing16.png'
              className=" mx-auto w-2/3 h-1/2"
              alt="star"
            />
            <div className="h-8 w-8 border rounded-full border-t-white border-l-white border-b-black border-r-black absolute -bottom-[5px] -right-[6px]"></div>
            <div className="h-8 w-8 border rounded-full border-t-white border-l-black border-b-black border-r-white absolute -bottom-[5px] -left-[6px]"></div>
          </div>
        </div>
    </>

  )
}