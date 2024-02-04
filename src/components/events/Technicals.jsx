"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import HeadingImage from "../../../public/images/meteor.png";
const slideWidth = 30;

const _items = [
  {
    player: {
      id: 0,
      title: "Manthan",
      image: require("../../../public/images/planet1.png"),
      link: "https://unstop.com/competitions/manthan-ideathon-nirmal-nala-tech-challenge-fluxus-iit-indore-iit-indore-877419",
    },
  },
  {
    player: {
      id: 18,
      title: "Overtinker",
      image: require("../../../public/images/planet3.png"),
      link: "https://unstop.com/competitions/overtinker-iit-indore-890155",
    },
  },
  {
    player: {
      id: 9,
      title: "Top Gear",
      image: require("../../../public/images/planet2.png"),
      link: "https://unstop.com/competitions/top-gear-gesture-control-car-fluxus-iit-indore-iit-indore-890266",
    },
  },
  {
    player: {
      id: 1,
      title: "Pick n Place",
      image: require("../../../public/images/planet2.png"),
    },
  },
  {
    player: {
      id: 2,
      title: "Nitrothrust",
      image: require("../../../public/images/planet2.png"),
    },
  },
  {
    player: {
      id: 3,
      title: "Aero Artistry",
      image: require("../../../public/images/planet1.png"),
    },
  },
  {
    player: {
      id: 4,
      title: "RoboSoccer",
      image: require("../../../public/images/planet3.png"),
    },
  },
  {
    player: {
      id: 5,
      title: "Obstacourse",
      image: require("../../../public/images/planet3.png"),
    },
  },
  {
    player: {
      id: 6,
      title: "Margdarshak",
      image: require("../../../public/images/planet2.png"),
    },
  },
  {
    player: {
      id: 7,
      title: "Robowrestling",
      image: require("../../../public/images/planet1.png"),
    },
  },
  {
    player: {
      id: 8,
      title: "RoboShooter",
      image: require("../../../public/images/planet1.png"),
    },
  },
  {
    player: {
      id: 11,
      title: "ReDesign",
      image: require("../../../public/images/planet1.png"),
    },
  },
  {
    player: {
      id: 12,
      title: "Euristica",
      image: require("../../../public/images/planet2.png"),
    },
  },
  {
    player: {
      id: 13,
      title: "Enosium",
      image: require("../../../public/images/planet1.png"),
    },
  },
  {
    player: {
      id: 14,
      title: "CFA Conclave - Consulting",
      image: require("../../../public/images/planet3.png"),
    },
  },
  {
    player: {
      id: 15,
      title: "CFA Conclave - Finance",
      image: require("../../../public/images/planet1.png"),
    },
  },
  {
    player: {
      id: 16,
      title: "CFA Conclave - Analytics",
      image: require("../../../public/images/planet2.png"),
    },
  },
  {
    player: {
      id: 17,
      title: "Concastle",
      image: require("../../../public/images/planet1.png"),
    },
  },
  {
    player: {
      id: 19,
      title: "Trace it Out",
      image: require("../../../public/images/planet1.png"),
    },
  },
  {
    player: {
      id: 20,
      title: "MetaBizz",
      image: require("../../../public/images/planet2.png"),
    },
  },
  {
    player: {
      id: 21,
      title: "Nakshatra",
      image: require("../../../public/images/planet1.png"),
    },
  },
  {
    player: {
      id: 22,
      title: "Building Blochs",
      image: require("../../../public/images/planet3.png"),
    },
  },
  {
    player: {
      id: 10,
      title: "Trading Vault",
      image: require("../../../public/images/planet3.png"),
      link: "https://unstop.com/o/yXlitCL?lb=OCk8n05",
    },
  },
  {
    player: {
      id: 23,
      title: "TinkerHub Tech Expo",
      image: require("../../../public/images/planet3.png"),
      link: "https://unstop.com/p/tinkerhub-tech-expo-fluxus-iit-indore-iit-indore-889724",
    },
  },
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
      <div id="heading" className="relative overflow-x-hidden">
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
        <h1 className="text-white absolute ml-10 w-full h-full text-[25px] lg:!text-[50px] font-extrabold text-start flex items-center top-0">
          Technicals
        </h1>
        {/* </motion.div> */}
      </div>
      {/* </motion.div> */}
      <div className="mx-auto justify-center text-center text-white text-2xl w-3/4 md:top-[-50px] relative">
        You can check out all the events on our Unstop Page by clicking on the{" "}
        <a href="https://unstop.com/college-fests/fluxus-iit-indore-indian-institute-of-technology-iit-indore-197772">
          here
        </a>
        .
      </div>
      <div className="md:translate-y-[-150px]">
        {/* <div> */}
        <div id="html" className="carousel__wrap ">
          <div className="carousel__inner">
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
          </div>

          <style jsx>{``}</style>
        </div>
      </div>
      <div className="mb-10 lg:mt-[-16vh] mt-48 md:mt-0">
        <ModalItem />
      </div>
    </>
  );
};

export default Technicals;
