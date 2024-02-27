import Image from 'next/image'
import React from 'react'
import VanillaTilt from "vanilla-tilt";
import { useRef } from 'react';
import { useEffect } from 'react';
const options = {
    reverse: true,
    max: 0,
    speed: 0,
    scale: 1,
    glare: true,
    reset: true,
    perspective: 0,
    transition: true,
    "max-glare": 0.15,
    "glare-prerender": false,
    gyroscope: true,
    gyroscopeMinAngleX: -45,
    gyroscopeMaxAngleX: 45,
    gyroscopeMinAngleY: -45,
    gyroscopeMaxAngleY: 45,
};

function Tilt(props) {
    const { children, options, ...rest } = props;
    const tilt = useRef(null);

    useEffect(() => {
        VanillaTilt.init(tilt.current, options);
    }, [options]);

    return (
        <div ref={tilt} {...rest}>
            {children}
        </div>
    );
}





export default function Card({ ele }) {
    return (
        <Tilt>
            <div className="m-10  text-white text-center font-semibold lg:w-[300px] lg:h-[300px] p-[10px] card-inner flex items-center flex-col justify-center w-[120px] h-[120px]">
                <div className='lg:w-[300px] lg:h-[300px] w-[120px] h-[120px] my-auto flex flex-col justify-center'>
                    <Image className='mx-auto my-auto    ' width={300} height={300} src={ele.image} alt="sponsor_logo" />
                </div>
                <div className='lg:!hidden my-5 !text-[9px]'>{ele.title}</div>
                <div className='hidden lg:block my-5  '>{ele.title}</div>

                <style jsx>
                    {`
                    .card-inner {
                        width: inherit;
                        height: inherit;
                        background: rgba(255, 255, 255, 0.4);
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
                        backdrop-filter: blur(10px);
                        border-radius: 8px;
                      }
                `}
                </style>

            </div>
        </Tilt>
    )
}
