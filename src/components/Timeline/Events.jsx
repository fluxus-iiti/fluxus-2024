"use client";
import React from 'react'
import { motion } from "framer-motion";
import { useState } from 'react';
import { don, dtw, dth } from "./Event_details";
import "./variables.css";
// const variants = {
//   1: { x: "-100%" },
//   2: { x: 0 },
//   3: { x: "100%" },
// }

const Events = () => {

  const [day, setDay] = useState("1");

  const variants = {
    "1": { x: "33.33%" },
    "2": { x: 0 },
    "3": { x: "-33.33%" },
  }

  const var_show = {
    "none": { height: "0vh", opacity: 0 },
    "block": { height: "100%", opacity: 1 },
  }


  function Day_Button(props) {
    return (
      <a onClick={() => setDay((props.days))} className="hover:cursor-pointer relative inline-block text-3xl group">
        <span className="hover:cursor-pointer relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight transition-colors duration-300 ease-out border-2 border-gray-300 rounded-2xl group-hover:text-white">
          <span className="hover:cursor-pointer absolute inset-0 w-full h-full px-5 py-3 rounded-2xl backdrop-blur-xl bg-blue-500 bg-opacity-10"></span>
          <span className="hover:cursor-pointer absolute top-4 left-0 w-32 h-32 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
          <span className="hover:cursor-pointer text-white font-BlackHanSans relative">{props.name}</span>
        </span>
        {/* <span className="hover:cursor-pointer absolute bottom-0 right-0 w-3/4 h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span> */}
      </a>
    )
  }

  function Event_card(props) {
    return (
      <div className='w-[80vw] py-8 lg:py-0 lg:h-36 rounded-3xl backdrop-blur-lg border-gray-400 border-2 bg-blue-500 bg-opacity-10 px-12 grid grid-cols-1 lg:grid-cols-3 gap-4 items-center'>
        <div className='text-4xl capitalize lg:mt-0 text-white font-neuropol'>{props.title}</div>
        <div className='grid grid-cols-2 col-span-2'>
          <div className='text-3xl capitalize text-gray-300 justify-self-start lg:justify-self-center font-BlackHanSans'>{props.time}</div>
          <div className='text-3xl capitalize text-gray-300 justify-self-center font-BlackHanSans'>{props.venue}</div>
        </div>
      </div>
    )
  }

  return (
    <motion.div id="home" className="w-full overflow-hidden bg-no-repeat bg-cover border-0 border-red-500 z-[-1] ">
      <div className="bg"></div>

      <div className="star-field">
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="layer"></div>
      </div>
      <style jsx>
        {`
          .mainBackdrop {
            backdrop-filter: blur(10px);
          }
          .formButton {
            box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
            border: 1px solid #fff;
          }
          .formButton:hover {
            box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
            border: 1px solid #fff;
            background-color: #fff;
          }
          .bg {
            background: url(./images/accommodation/bg.jpeg) no-repeat;
            background-size: cover;
            height: 100%;
            width: 100%;
            position: fixed;
            top: 0;
            left: 0;
            z-index: -3;
          }
          .bg:before {
            content: "";
            width: 100%;
            height: 100%;
            background: #000;
            position: fixed;
            z-index: -1;
            top: 0;
            left: 0;
            opacity: 0.3;
          }
          @keyframes sf-fly-by-1 {
            from {
              transform: translateZ(-600px);
              opacity: 0.5;
            }
            to {
              transform: translateZ(0);
              opacity: 0.5;
            }
          }
          @keyframes sf-fly-by-2 {
            from {
              transform: translateZ(-1200px);
              opacity: 0.5;
            }
            to {
              transform: translateZ(-600px);
              opacity: 0.5;
            }
          }
          @keyframes sf-fly-by-3 {
            from {
              transform: translateZ(-1800px);
              opacity: 0.5;
            }
            to {
              transform: translateZ(-1200px);
              opacity: 0.5;
            }
          }
          .star-field {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            perspective: 600px;
            -webkit-perspective: 600px;
            z-index: -1;
          }
          .star-field .layer {
            box-shadow: -411px -476px #cccccc, 777px -407px #d4d4d4,
              -387px -477px #fcfcfc, -91px -235px #d4d4d4, 491px -460px #f7f7f7,
              892px -128px #f7f7f7, 758px -277px #ededed, 596px 378px #cccccc,
              647px 423px whitesmoke, 183px 389px #c7c7c7, 524px -237px #f0f0f0,
              679px -535px #e3e3e3, 158px 399px #ededed, 157px 249px #ededed,
              81px -450px #ebebeb, 719px -360px #c2c2c2, -499px 473px #e8e8e8,
              -158px -349px #d4d4d4, 870px -134px #cfcfcf, 446px 404px #c2c2c2,
              440px 490px #d4d4d4, 414px 507px #e6e6e6, -12px 246px #fcfcfc,
              -384px 369px #e3e3e3, 641px -413px #fcfcfc, 822px 516px #dbdbdb,
              449px 132px #c2c2c2, 727px 146px #f7f7f7, -315px -488px #e6e6e6,
              952px -70px #e3e3e3, -869px -29px #dbdbdb, 502px 80px #dedede,
              764px 342px #e0e0e0, -150px -380px #dbdbdb, 654px -426px #e3e3e3,
              -325px -263px #c2c2c2, 755px -447px #c7c7c7, 729px -177px #c2c2c2,
              -682px -391px #e6e6e6, 554px -176px #ededed, -85px -428px #d9d9d9,
              714px 55px #e8e8e8, 359px -285px #cfcfcf, -362px -508px #dedede,
              468px -265px #fcfcfc, 74px -500px #c7c7c7, -514px 383px #dbdbdb,
              730px -92px #cfcfcf, -112px 287px #c9c9c9, -853px 79px #d6d6d6,
              828px 475px #d6d6d6, -681px 13px #fafafa, -176px 209px #f0f0f0,
              758px 457px #fafafa, -383px -454px #ededed, 813px 179px #d1d1d1,
              608px 98px whitesmoke, -860px -65px #c4c4c4, -572px 272px #f7f7f7,
              459px 533px #fcfcfc, 624px -481px #e6e6e6, 790px 477px #dedede,
              731px -403px #ededed, 70px -534px #cccccc, -23px 510px #cfcfcf,
              -652px -237px whitesmoke, -690px 367px #d1d1d1,
              810px 536px #d1d1d1, 774px 293px #c9c9c9, -362px 97px #c2c2c2,
              563px 47px #dedede, 313px 475px #e0e0e0, 839px -491px #e3e3e3,
              -217px 377px #d4d4d4, -581px 239px #c2c2c2, -857px 72px #cccccc,
              -23px 340px #dedede, -837px 246px white, 170px -502px #cfcfcf,
              822px -443px #e0e0e0, 795px 497px #e0e0e0, -814px -337px #cfcfcf,
              206px -339px #f2f2f2, -779px 108px #e6e6e6, 808px 2px #d4d4d4,
              665px 41px #d4d4d4, -564px 64px #cccccc, -380px 74px #cfcfcf,
              -369px -60px #f7f7f7, 47px -495px #e3e3e3, -383px 368px #f7f7f7,
              419px 288px #d1d1d1, -598px -50px #c2c2c2, -833px 187px #c4c4c4,
              378px 325px whitesmoke, -703px 375px #d6d6d6, 392px 520px #d9d9d9,
              -492px -60px #c4c4c4, 759px 288px #ebebeb, 98px -412px #c4c4c4,
              -911px -277px #c9c9c9;
            transform-style: preserve-3d;
            position: absolute;
            top: 50%;
            left: 50%;
            height: 4px;
            width: 4px;
            border-radius: 2px;
          }
          .star-field .layer:nth-child(1) {
            animation: sf-fly-by-1 5s linear infinite;
          }
          .star-field .layer:nth-child(2) {
            animation: sf-fly-by-2 5s linear infinite;
          }
          .star-field .layer:nth-child(3) {
            animation: sf-fly-by-3 5s linear infinite;
          }
        `}
      </style>
      <div className='flex flex-col mt-12 mb-24 gap-y-8 items-center justify-center'>
        {/* Heading */}
        <div className='text-6xl uppercase text-white font-azonix'>events</div>
        {/* Day Selector */}
        <div className='w-full flex justify-evenly items-center'>
          <Day_Button name="Day 1" days="1" />
          <Day_Button name="Day 2" days="2" />
          <Day_Button name="Day 3" days="3" />
        </div>
        <motion.div variants={variants} className='flex mt-8' animate={day == "1" ? "1" : (day == "2" ? "2" : "3")}>
          <motion.div className='w-[100vw] flex flex-col gap-y-12 items-center' variants={var_show} animate={day == "1" ? "block" : "none"} transition={{ duration:0 }}>
            {don.map((e) => {
              return (
                <Event_card title={e.title} time={e.time} venue={e.venue} />
              );
            })}
          </motion.div>
          <motion.div className='w-[100vw] flex flex-col gap-y-12 items-center' variants={var_show} animate={day == "2" ? "block" : "none"} transition={{ duration:0 }}>
            {dtw.map((e) => {
              return (
                <Event_card title={e.title} time={e.time} venue={e.venue} />
              );
            })}
          </motion.div>
          <motion.div className='w-[100vw] flex flex-col gap-y-12 items-center' variants={var_show} animate={day == "3" ? "block" : "none"} transition={{ duration:0 }}>
            {dth.map((e) => {
              return (
                <Event_card title={e.title} time={e.time} venue={e.venue} />
              );
            })}
          </motion.div>
        </motion.div>
      </div>

    </motion.div>
  )
}

export default Events