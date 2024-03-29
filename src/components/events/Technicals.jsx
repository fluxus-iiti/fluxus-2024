"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
// SWIPER IMPORTS
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/effect-coverflow";
import "swiper/css/scrollbar";

import {
  Autoplay,
  FreeMode,
  Navigation,
  Pagination,
  EffectCoverflow,
  Scrollbar,
} from "swiper/modules";

import HeadingImage from "../../../public/images/meteor.png";
const slideWidth = 30;

const _items = [
  {
    player: {
      id: 3,
      title: "Pick n Place",
      image: require("../../../public/images/Competitions/Pick_N_Place.webp"),
      link: "https://unstop.com/p/pick-n-place-robotics-challenge-fluxus-iit-indore-iit-indore-897732",
    },
  },
  {
    player: {
      id: 4,
      title: "Nitrothrust",
      image: require("../../../public/images/Competitions/NITROTHRUST.webp"),
      link: "https://unstop.com/p/nitrothust-rc-racing-fluxus-iit-indore-iit-indore-898119",
    },
  },
  {
    player: {
      id: 12,
      title: "Euristica",
      image: require("../../../public/images/Competitions/Eurisitca.webp"),
      link: "https://euristica.iiti.ac.in/",
    },
  },
  {
    player: {
      id: 5,
      title: "Aero Artistry",
      image: require("../../../public/images/Competitions/Aero_Artistry.webp"),
      link: "https://unstop.com/events/aero-artistrty-fluxus-24-iit-indore-iit-indore-893349",
    },
  },
  {
    player: {
      id: 6,
      title: "RoboSoccer",
      image: require("../../../public/images/Competitions/robo-template.webp"),
      link: "https://unstop.com/p/robosoccer-robotics-challenge-fluxus-iit-indore-iit-indore-898150",
    },
  },
  {
    player: {
      id: 7,
      title: "Obstacourse",
      image: require("../../../public/images/Competitions/OBSTACOURSE.webp"),
      link: "https://unstop.com/p/obstacourse-roboracing-fluxus-iit-indore-iit-indore-898092",
    },
  },
  {
    player: {
      id: 9,
      title: "Robo Sumo",
      image: require("../../../public/images/Competitions/sumo-template.webp"),
      link: "https://unstop.com/p/robosumo-robotics-challenge-fluxus-iit-indore-iit-indore-898137",
    },
  },
  {
    player: {
      id: 8,
      title: "Margdarshak",
      image: require("../../../public/images/Competitions/MARGDARSHAK.webp"),
      link: "https://unstop.com/p/margdarshak-line-follower-robot-challenge-fluxus-iit-indore-iit-indore-897912",
    },
  },
  {
    player: {
      id: 0,
      title: "Manthan",
      image: require("../../../public/images/Competitions/Manthan.webp"),
      link: "https://unstop.com/competitions/manthan-ideathon-nirmal-nala-tech-challenge-fluxus-iit-indore-iit-indore-877419",
    },
  },
  {
    player: {
      id: 14,
      title: "CFA Conclave - ConsultX",
      image: require("../../../public/images/Competitions/ConsultX.webp"),
      link: "https://unstop.com/p/consultx-case-study-challenge-fluxus-iit-indore-iit-indore-897734",
    },
  },
  {
    player: {
      id: 23,
      title: "TinkerHub Tech Expo",
      image: require("../../../public/images/Competitions/Tinker_Hub.webp"),
      link: "https://unstop.com/p/tinkerhub-tech-expo-fluxus-iit-indore-iit-indore-889724",
    },
  },
  {
    player: {
      id: 13,
      title: "Enosium",
      image: require("../../../public/images/Competitions/enosium.webp"),
      link: "https://unstop.com/hackathons/enosium24-fluxus-iit-indore-iit-indore-892499",
    },
  },
  {
    player: {
      id: 10,
      title: "RoboShooter",
      image: require("../../../public/images/Competitions/roboshooter.webp"),
      link: "https://unstop.com/competitions/shooter-bot-competition-fluxus-24-iit-indore-iit-indore-890839",
    },
  },
  {
    player: {
      id: 2,
      title: "Top Gear",
      image: require("../../../public/images/Competitions/TGGEST.webp"),
      link: "https://unstop.com/competitions/top-gear-gesture-control-car-fluxus-iit-indore-iit-indore-890266",
    },
  },
  {
    player: {
      id: 22,
      title: "Trading Vault",
      image: require("../../../public/images/Competitions/Trading_Vault.webp"),
      link: "https://unstop.com/o/yXlitCL?lb=OCk8n05",
    },
  },
  {
    player: {
      id: 16,
      title: "CFA Conclave - AnalyticaX",
      image: require("../../../public/images/Competitions/AnalyticaX.webp"),
      link: "https://unstop.com/hackathons/analyticax-cfa-conclave24-fluxus-iit-indore-iit-indore-890123",
    },
  },
  {
    player: {
      id: 17,
      title: "Concastle",
      image: require("../../../public/images/Competitions/CONCASTLE.webp"),
      link: "https://unstop.com/competitions/concastle-fluxus-24-iit-indore-892867",
    },
  },
  {
    player: {
      id: 1,
      title: "Overtinker",
      image: require("../../../public/images/Competitions/OverTinker.webp"),
      link: "https://unstop.com/competitions/overtinker-iit-indore-890155",
    },
  },
  {
    player: {
      id: 25,
      title: "Sunspark",
      image: require("../../../public/images/Competitions/SUNSPARK.webp"),
      link: "https://unstop.com/competitions/sunspark-lets-simulate-it-fluxus-iit-indore-iit-indore-890296",
    },
  },
  {
    player: {
      id: 18,
      title: "Trace it Out",
      image: require("../../../public/images/Competitions/TGTRACE.webp"),
      link: "https://unstop.com/competitions/top-gear24-trace-it-out-fluxus-iit-indore-iit-indore-892258",
    },
  },
  {
    player: {
      id: 24,
      title: "Skysweep",
      image: require("../../../public/images/Competitions/SkySweep.webp"),
      link: "https://unstop.com/competitions/skysweep-carbon-cleanse-challenge-fluxus-iit-indore-iit-indore-892481",
    },
  },
  {
    player: {
      id: 100,
      title: "GalactiHack",
      image: require("../../../public/images/Competitions/isro.png"),
      link: "https://unstop.com/competitions/galactihack-ideathon-fluxus-2024-iit-indore-iit-indore-920392",
    },
  },
  // {
  //   player: {
  //     id: 11,
  //     title: "ReDesign",
  //     image: require("../../../public/images/planet1.png"),
  //   },
  // },
  // {
  //   player: {
  //     id: 15,
  //     title: "CFA Conclave - Finance",
  //     image: require("../../../public/images/planet1.png"),
  //   },
  // },
  // {
  //   player: {
  //     id: 19,
  //     title: "MetaBizz",
  //     image: require("../../../public/images/planet2.png"),
  //   },
  // },
  // {
  //   player: {
  //     id: 20,
  //     title: "Nakshatra",
  //     image: require("../../../public/images/planet1.png"),
  //   },
  // },
  // {
  //   player: {
  //     id: 21,
  //     title: "Building Blochs",
  //     image: require("../../../public/images/planet3.png"),
  //   },
  // },
];

const itemsModal = _items.slice();

const length = _items.length;
_items.push(..._items);

const sleep = (ms = 0) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const createItem = (position, idx) => {
  const item = {
    styles: {
      transform: `translateX(${position * slideWidth - 540}rem)`,
    },
    player: _items[idx].player,
  };

  switch (position) {
    case length - 1:
    case length + 1:
      item.styles = { ...item.styles, filter: "grayscale(1)" };
      item.styles.transform += " translateY(-30px)";
      break;
    case length:
      break;
    default:
      item.styles = { ...item.styles, opacity: 1 };
      break;
  }

  return item;
};

const ModalItem = () => {
  const [open, setOpen] = useState(0);
  const modalOpenerHandler = () => {
    setOpen(1);
  };

  const modalCloserHandler = () => {
    setOpen(0);
  };

  useEffect(() => {
    const modal = document.getElementById("modal");
    open == 0
      ? (modal.style.display = "none")
      : (modal.style.display = "block");
  }, [open]);

  return (
    <div className="">
      <button
        className="block text-white bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-gray-300 font-large rounded-lg text-large px-10 py-5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800 m-auto"
        type="button"
        onClick={modalOpenerHandler}
      >
        Know More
      </button>

      <div
        id="modal"
        className="fixed h-4/5 w-1/2 m-auto z-[100] top-[50%] left-[50%] bg-gray-900 rounded-xl translate-x-[-50%] translate-y-[-50%] overflow-auto hidden"
      >
        <button
          className="text-white rounded-xl w-10 h-10 text-3xl mt-6 float-right mr-12"
          onClick={modalCloserHandler}
        >
          X
        </button>
        <h1 className="text-white text-6xl text-center m-12"> Technicals </h1>
        <hr />
        <>
          <div className="flex flex-wrap m-auto justify-around">
            {itemsModal?.map((item) => (
              <>
                <li
                  className={`carousel__slide-item2 group hover:!h-[38rem] transition-all fade-in-out`}
                  style={item.styles}
                >
                  <div id="card" className={`h-full   rounded-b-[40px] `}>
                    <Image
                      src={item.player.image}
                      alt={item.player.title}
                      className="lg:!w-[200px] lg:!h-[200px] !w-[150px] !h-[150px] brightness-50  mx-auto group-hover:brightness-100 transition-all fade-in-out !drop-shadow-2xl !shadow-white"
                    />
                    <div className="text-center text-5xl font-bold translate-y-10">
                      <h4>{item.player.title}</h4>
                    </div>

                    {item.player.link ? (
                      <button className="text-center translate-x-[60px] translate-y-[50px] opacity-0 group-hover:opacity-100 transition-all fade-in-out delay-100 !text-2xl cursor-pointer border-[1px] py-2 rounded-xl w-[150px]">
                        <a href={item.player.link} target="_blank">
                          {" "}
                          Know More{" "}
                        </a>
                      </button>
                    ) : (
                      <button className="text-center translate-x-[60px] translate-y-[50px] opacity-0 group-hover:opacity-100 transition-all fade-in-out delay-100 !text-2xl cursor-pointer border-[1px] py-2 rounded-xl w-[150px]">
                        <h4>Coming Soon! </h4>
                      </button>
                    )}
                  </div>
                </li>
              </>
            ))}
          </div>
        </>
      </div>
    </div>
  );
};

const CarouselSlideItem = ({ pos, idx, activeIdx }) => {
  const item = createItem(pos, idx, activeIdx);
  return (
    <li
      className={`carousel__slide-item  group hover:!h-[38rem] transition-all fade-in-out`}
      style={item.styles}
    >
      <div id="card" className={`h-full   rounded-b-[40px] `}>
        <Image
          src={item.player.image}
          alt={item.player.title}
          className="lg:!w-[200px] lg:!h-[200px] !w-[150px] !h-[150px] brightness-50  mx-auto group-hover:brightness-100 transition-all fade-in-out !drop-shadow-2xl !shadow-white"
        />
        <div className="text-center text-5xl font-bold translate-y-10">
          <h4>{item.player.title}</h4>
        </div>
        {item.player.link ? (
          <button className="text-center translate-x-[60px] translate-y-[50px] opacity-0 group-hover:opacity-100 transition-all fade-in-out delay-100 !text-2xl cursor-pointer border-[1px] py-2 rounded-xl w-[150px]">
            <a href={item.player.link} target="_blank">
              {" "}
              Know More{" "}
            </a>
          </button>
        ) : (
          <button className="text-center translate-x-[60px] translate-y-[50px] opacity-0 group-hover:opacity-100 transition-all fade-in-out delay-100 !text-2xl cursor-pointer border-[1px] py-2 rounded-xl w-[150px]">
            <h4>Coming Soon! </h4>
          </button>
        )}
      </div>
    </li>
  );
};

const keys = Array.from(Array(_items.length).keys());
const Technicals = () => {
  const [items, setItems] = React.useState(keys);
  const [isTicking, setIsTicking] = React.useState(false);
  const [activeIdx, setActiveIdx] = React.useState(0);
  const bigLength = items.length;

  const prevClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true);
      setItems((prev) => {
        return prev.map((_, i) => prev[(i + jump) % bigLength]);
      });
    }
  };

  const nextClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true);
      setItems((prev) => {
        return prev.map((_, i) => prev[(i - jump + bigLength) % bigLength]);
      });
    }
  };

  const handleDotClick = (idx) => {
    if (idx < activeIdx) prevClick(activeIdx - idx);
    if (idx > activeIdx) nextClick(idx - activeIdx);
  };

  React.useEffect(() => {
    if (isTicking) sleep(300).then(() => setIsTicking(false));
  }, [isTicking]);

  React.useEffect(() => {
    setActiveIdx((length - (items[0] % length)) % length) // prettier-ignore
  }, [items]);

  return (
    <>
      <div
        className="competition-section"
        style={{
          backgroundImage: `url(images/back.png)`,
          backgroundRepeat: "repeat",
        }}
      >
        {/* <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{
          type: "spring",
          mass: 0.5,
          damping: 60,
          stiffness: 100,
        }}
        variants={{
          visible: { x: "0vw" },
          hidden: { x: "-99vw" },
        }}
      > */}
        <div id="heading" className="relative overflow-x-hidden z-[0]">
          <Image
            src={HeadingImage}
            className="
                !h-[20%]"
            alt={""}
          />
          {/* <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
              type: "spring",
              mass: 0.5,
              damping: 60,
              stiffness: 40,
            }}
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 },
            }}
          > */}
          <h1 className="text-white absolute pl-10 w-full h-full text-[25px] lg:!text-[50px] font-extrabold text-start flex items-center top-0">
            Technicals
          </h1>
          {/* </motion.div> */}
        </div>
        {/* </motion.div> */}
        <div className="mx-auto justify-center text-center text-white text-2xl w-3/4 md:top-[-50px] relative">
          You can check out all the events on our Unstop Page by clicking{" "}
          <a href="https://unstop.com/college-fests/fluxus-iit-indore-indian-institute-of-technology-iit-indore-197772">
            <span className="font-semibold">HERE</span>
          </a>
          .
        </div>
        <div className="md:translate-y-[-150px]">
          <>
            {/* **************************COROUSEL IN MOBILE VIEW STARTS*************************************** */}
            {/* <SwiperComponent /> */}
            <div className="overflow-hidden w-full mt-14 md:hidden">
              <Swiper
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  slidesPerView: "auto",
                  spaceBetween: 20,
                  380: {
                    slidesPerView: 1.5,
                    spaceBetween: 20,
                  },
                }}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                // freeMode={true}
                loop={true}
                navigation={true}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: false,
                }}
                // slidesPerView={'auto'}
                // scrollbar={{
                //   hide: true,
                // }}
                // pagination={{
                //   clickable: true,
                // }}

                modules={[
                  FreeMode,
                  Autoplay,
                  Navigation,
                  Pagination,
                  EffectCoverflow,
                  Scrollbar,
                ]}
                className=""
              >
                {_items.map((item, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <>
                        <div
                          id="card"
                          className="card h-fit w-fit rounded-b-[30px] !mx-5 !my-5"
                        >
                          <div className="image">
                            <Image
                              src={item.player.image}
                              alt={item.player.title}
                              className="min-w-[200px]"
                            ></Image>
                          </div>
                          <div className="content flex flex-col justify-center items-center my-4">
                            <div className="title text-center">
                              <span className="text-6xl font-bold">
                                {item.player.title}
                              </span>
                            </div>
                            <div className="link-box border-solid border-[1px] border-slate-300 w-fit text-center px-8 py-4 rounded-xl my-5 cursor-pointer hover:bg-slate-200 hover:text-gray-900">
                              {item.player.link ? (
                                <a href={item.player.link} target="_blank">
                                  <span className="text-2xl font-semibold">
                                    Know More
                                  </span>
                                </a>
                              ) : (
                                <span className="text-2xl">Comming Soon</span>
                              )}
                            </div>
                          </div>
                        </div>
                      </>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
            {/* *************************COROUSEL IN MOBILE VIEW END*********************************** */}
          </>
          {/* <div> */}
          <div id="html" className="carousel__wrap ">
            {/* <div className="carousel__inner">
            <button
              className="carousel__btn carousel__btn--prev !hidden lg:!flex"
              onClick={() => prevClick()}
            >
              <i className="carousel__btn-arrow carousel__btn-arrow--left" />
            </button>
            <div className="carousel__container">
              <ul className="carousel__slide-list ">
                {items.map((pos, i) => (
                  <div className="" key={i}>
                    <CarouselSlideItem
                      key={i}
                      idx={i}
                      pos={pos}
                      activeIdx={activeIdx}
                    />
                  </div>
                ))}
              </ul>
            </div>
            <button
              className="carousel__btn carousel__btn--next !hidden lg:!flex"
              onClick={() => nextClick()}
            >
              <i className="carousel__btn-arrow carousel__btn-arrow--right" />
            </button>
            <div className="carousel__dots lg:hidden">
              {items.slice(0, length).map((pos, i) => (
                <button
                  key={i}
                  onClick={() => handleDotClick(i)}
                  className={i === activeIdx ? "dot active" : "dot"}
                />
              ))}
            </div>
          </div> */}

            {/* ********************************************************************* */}
            <div className="hidden mb-20 gap-5 overflow-x-scroll overflow-y-visible h-full md:no-scrollbar md:grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
              {itemsModal?.map((item) => (
                <>
                  <div
                    id="card"
                    className="card h-fit w-fit rounded-b-[30px] !mx-5 !my-5"
                  >
                    <div className="image">
                      <Image
                        src={item.player.image}
                        alt={item.player.title}
                        className="min-w-[250px]"
                      ></Image>
                    </div>
                    <div className="content flex flex-col justify-center items-center my-4">
                      <div className="title text-center">
                        <span className="text-6xl font-bold">
                          {item.player.title}
                        </span>
                      </div>
                      <div className="link-box border-solid border-[1px] border-slate-300 w-fit text-center px-8 py-4 rounded-xl my-5 cursor-pointer hover:bg-slate-200 hover:text-gray-900">
                        {item.player.link ? (
                          <a href={item.player.link} target="_blank">
                            <span className="text-2xl font-semibold">
                              Know More
                            </span>
                          </a>
                        ) : (
                          <span className="text-2xl">Comming Soon</span>
                        )}
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>

            {/* ********************************************************************* */}

            <style jsx>{`
              ::-webkit-scrollbar {
                width: 10px;
                height: 7px;
                scrollbar-width: thick;
              }

              /* Track */
              ::-webkit-scrollbar-track {
                box-shadow: inset 0 0 5px grey;
                border-radius: 5px;
              }

              /* Handle */
              ::-webkit-scrollbar-thumb {
                background: #482cb9;
                border-radius: 5px;
              }

              /* Handle on hover */
              ::-webkit-scrollbar-thumb:hover {
                background: #482cb9;
              }
            `}</style>
          </div>
        </div>
        {/* <div className="mb-10 lg:mt-[-16vh] mt-48 md:mt-0">
        <ModalItem />
      </div> */}
      </div>
    </>
  );
};

export default Technicals;
