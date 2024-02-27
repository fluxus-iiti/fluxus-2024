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
            <div className="m-10  text-black text-center font-semibold  p-[10px] card-inner">

                <Image className='mx-auto' src={ele.image} width="100" height="100" alt="sponsor_logo" />
                <div className='!text-md my-2'>{ele.title}</div>

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
