'use client'
import React from "react";
import Link from "next/link";
import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import {
    useWindowSize,
    useWindowWidth,
    useWindowHeight,
} from "@react-hook/window-size";

export default function ContactCard({ ele }) {
    const [width, height] = useWindowSize();

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
    return (
        <div id="ProjectPage" className="justify-center flex !mb-28 mx-20">
            <Tilt
                className="card  max-w-[500px] md:w-[300px] rounded-lg"
                options={options}
            >
                <div className="">
                    <div className="">
                        {/* <div className="circle"></div> */}
                        {/* <div className="circle"></div> */}
                        <div className="card-inner ">
                            <div className="grid grid-rows-[auto_auto]  ">
                                <div className=" px-10 py-5 w-full flex flex-col justify-center items-center">
                                    {/* <div
                                        id="ProjectsImage"
                                        className="w-full h-full md:w-full md:h-full  rounded-xl md:rounded-[0px] flex  items-center justify-center mb-5 md:mb-0 px-5 mx-auto"
                                    >
                                        <Image
                                            src={ele?.image}
                                            width={97}
                                            height={96}
                                            placeholder="blur"
                                            className="w-[200px]  "
                                            
                                        />
                                    </div> */}
                                    <div className="w-fit md:w-full h-full ml-5">
                                        <div className="my-2 text-3xl   text-white rounded-lg text-center break-all p-2  font-bold">
                                            {ele.name}
                                        </div>
                                        <div className="my-2  text-2xl font-bold text-white rounded-lg text-center break-all p-2 ">
                                            {ele.position}
                                        </div>
                                        <div className="my-2  text-2xl font-bold text-white rounded-lg text-center break-all p-2 ">
                                            Contact For Accomodation
                                        </div>
                                        <button></button>
                                        <button></button>
                                    </div>
                                </div>
                                <hr className=" w-full" />
                                <div className="w-full  text-white text-center p-5 !h-full">
                                    
                                    <div className="my-5 flex">
                                        <div
                                            target={"_blank"}
                                            
                                            className=" p-2 rounded-full w-full text-white font-bold hover:underline text-xl transition-all fade-in-out duration-500"
                                        >
                                            {ele.phone}
                                        </div>
                                       
                                            <div
                                                target={"_blank"}
                                                href={ele?.domain}
                                                className=" p-2 rounded-full w-full text-white font-bold hover:underline text-xl transition-all fade-in-out duration-500"
                                            >
                                                {ele.gmail}
                                            </div>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Tilt>

            <style jsx>
                {`
                    .card {
                        height: fit-content;
                        transition: all 0.2s;
                        position: relative;
                        cursor: pointer;
                        
                    }

                    .card-inner {
                        width: inherit;
                        height: inherit;
                        background: rgba(255, 255, 255, 0.2);
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
                        backdrop-filter: blur(10px);
                        border-radius: 8px;
                    }

                    .card:hover {
                        transform: scale(1.04) rotate(1deg);
                    }

                    .circle {
                        width: 100px;
                        height: 100px;
                        background: radial-gradient(#3f33e6, #535def);
                        border-radius: 50%;
                        position: absolute;
                        animation: move-up6 2s ease-in infinite
                            alternate-reverse;
                    }

                    .circle:nth-child(1) {
                        top: -25px;
                        left: -25px;
                    }

                    .circle:nth-child(2) {
                        bottom: -25px;
                        right: -25px;
                        animation-name: move-down1;
                    }

                    @keyframes move-up6 {
                        to {
                            transform: translateY(-10px);
                        }
                    }

                    @keyframes move-down1 {
                        to {
                            transform: translateY(10px);
                        }
                    }
                `}
            </style>
        </div>
    );
}
