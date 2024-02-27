import Image from 'next/image'
import React from 'react'

export default function Card({ele}) {
    return (
        <div className="m-10 bg-white text-black text-center font-semibold  p-[10px]">
            <Image className='mx-auto' src={ele.image} width="100" height="100"  alt="sponsor_logo" />
            <div className='!text-md my-2'>{ele.title}</div>
        </div>
    )
}
