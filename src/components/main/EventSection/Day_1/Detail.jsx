import React from 'react'
import constellation from './pngwing 15.png'
import star from './pngwing 16.png'
export default function Detail() {
  return (
    <>

    <div className="flex-1 flex flex-wrap justify-center lg:justify-end w-fit ">
          <div className=" h-fit w-2/3 shadow-md border border-white relative text-center">
            <div className="bg-black h-8 w-8 border rounded-full border-t-black border-l-black border-b-white  absolute -top-[5px] -left-[6px]"></div>
            <div className="bg-black h-8 w-8 border rounded-full border-t-black border-l-white border-b-white border-r-black  absolute -top-[5px] -right-[6px]"></div>
            <img
            src={constellation}
              className="mb-4 mx-auto w-2/3 h-1/2"
            />
            <h2 className="text-xl mb-20 text-white">TWO PRONITES</h2>
            <h2 className="text-xl mb-20 text-white">REMARABLE SPEAKERS</h2>
            <h2 className="text-xl mb-20 text-white">AMAZING MUSIC</h2>
            <h2 className="text-xl mb-20 text-white">A LIFETIME EXPERIENCE</h2>
            <img
            src={star}
              className=" mx-auto w-2/3 h-1/2"
            />
            <div className="bg-black h-8 w-8 border rounded-full border-t-white border-l-white border-b-black border-r-black absolute -bottom-[5px] -right-[6px]"></div>
            <div className="bg-black h-8 w-8 border rounded-full border-t-white border-l-black border-b-black border-r-white absolute -bottom-[5px] -left-[6px]"></div>
          </div>
        </div>
    </>

  )
}