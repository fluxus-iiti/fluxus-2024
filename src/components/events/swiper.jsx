"use client";
import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";

const _items = [
    {
      player: {
        id: 3,
        title: "Pick n Place",
        image: require("../../../public/images/Competitions/Pick_N_Place.png"),
        link: "https://unstop.com/p/pick-n-place-robotics-challenge-fluxus-iit-indore-iit-indore-897732",
      },
    },
    {
      player: {
        id: 4,
        title: "Nitrothrust",
        image: require("../../../public/images/Competitions/NITROTHRUST.png"),
        link: "https://unstop.com/p/nitrothust-rc-racing-fluxus-iit-indore-iit-indore-898119",
      },
    },
    {
      player: {
        id: 12,
        title: "Euristica",
        image: require("../../../public/images/Competitions/Eurisitca.png"),
        link: "https://euristica.iiti.ac.in/",
      },
    },
    {
      player: {
        id: 5,
        title: "Aero Artistry",
        image: require("../../../public/images/Competitions/Aero_Artistry.png"),
        link: "https://unstop.com/events/aero-artistrty-fluxus-24-iit-indore-iit-indore-893349",
      },
    },
    {
      player: {
        id: 6,
        title: "RoboSoccer",
        image: require("../../../public/images/Competitions/robo-template.png"),
        link: "https://unstop.com/p/robosoccer-robotics-challenge-fluxus-iit-indore-iit-indore-898150",
      },
    },
    {
      player: {
        id: 7,
        title: "Obstacourse",
        image: require("../../../public/images/Competitions/OBSTACOURSE.png"),
        link: "https://unstop.com/p/obstacourse-roboracing-fluxus-iit-indore-iit-indore-898092",
      },
    },
    {
      player: {
        id: 9,
        title: "Robo Sumo",
        image: require("../../../public/images/Competitions/sumo-template.png"),
        link: "https://unstop.com/p/robosumo-robotics-challenge-fluxus-iit-indore-iit-indore-898137"
      },
    },
    {
      player: {
        id: 8,
        title: "Margdarshak",
        image: require("../../../public/images/Competitions/MARGDARSHAK.png"),
        link: "https://unstop.com/p/margdarshak-line-follower-robot-challenge-fluxus-iit-indore-iit-indore-897912",
      },
    },
    {
      player: {
        id: 0,
        title: "Manthan",
        image: require("../../../public/images/Competitions/Manthan.png"),
        link: "https://unstop.com/competitions/manthan-ideathon-nirmal-nala-tech-challenge-fluxus-iit-indore-iit-indore-877419",
      },
    },
    {
      player: {
        id: 14,
        title: "CFA Conclave - ConsultX",
        image: require("../../../public/images/Competitions/ConsultX.jpg"),
        link: "https://unstop.com/p/consultx-case-study-challenge-fluxus-iit-indore-iit-indore-897734",
      },
    },
    {
      player: {
        id: 23,
        title: "TinkerHub Tech Expo",
        image: require("../../../public/images/Competitions/Tinker_Hub.png"),
        link: "https://unstop.com/p/tinkerhub-tech-expo-fluxus-iit-indore-iit-indore-889724",
      },
    },
    {
      player: {
        id: 13,
        title: "Enosium",
        image: require("../../../public/images/Competitions/enosium.png"),
        link: "https://unstop.com/hackathons/enosium24-fluxus-iit-indore-iit-indore-892499",
      },
    },
    {
      player: {
        id: 10,
        title: "RoboShooter",
        image: require("../../../public/images/Competitions/RoboShooter.png"),
        link: "https://unstop.com/competitions/shooter-bot-competition-fluxus-24-iit-indore-iit-indore-890839",
      },
    },
    {
      player: {
        id: 2,
        title: "Top Gear",
        image: require("../../../public/images/Competitions/TGGEST.png"),
        link: "https://unstop.com/competitions/top-gear-gesture-control-car-fluxus-iit-indore-iit-indore-890266",
      },
    },
    {
      player: {
        id: 22,
        title: "Trading Vault",
        image: require("../../../public/images/Competitions/Trading_Vault.png"),
        link: "https://unstop.com/o/yXlitCL?lb=OCk8n05",
      },
    },
    {
      player: {
        id: 16,
        title: "CFA Conclave - AnalyticaX",
        image: require("../../../public/images/Competitions/AnalyticaX.png"),
        link: "https://unstop.com/hackathons/analyticax-cfa-conclave24-fluxus-iit-indore-iit-indore-890123",
      },
    },
    {
      player: {
        id: 17,
        title: "Concastle",
        image: require("../../../public/images/Competitions/CONCASTLE.png"),
        link: "https://unstop.com/competitions/concastle-fluxus-24-iit-indore-892867",
      },
    },
    {
      player: {
        id: 1,
        title: "Overtinker",
        image: require("../../../public/images/Competitions/OverTinker.png"),
        link: "https://unstop.com/competitions/overtinker-iit-indore-890155",
      },
    },
    {
      player: {
        id: 25,
        title: "Sunspark",
        image: require("../../../public/images/Competitions/SUNSPARK.png"),
        link: "https://unstop.com/competitions/sunspark-lets-simulate-it-fluxus-iit-indore-iit-indore-890296",
      },
    },
    {
      player: {
        id: 18,
        title: "Trace it Out",
        image: require("../../../public/images/Competitions/TGTRACE.png"),
        link: "https://unstop.com/competitions/top-gear24-trace-it-out-fluxus-iit-indore-iit-indore-892258",
      },
    },
    {
      player: {
        id: 24,
        title: "Skysweep",
        image: require("../../../public/images/Competitions/SkySweep.png"),
        link: "https://unstop.com/competitions/skysweep-carbon-cleanse-challenge-fluxus-iit-indore-iit-indore-892481",
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

const SwiperComponent = () => {
  return (
  <div className="md:hidden">
    {/* Swiper Component Here. */}
  <Swiper
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className=""
      >
        {_items.map((item) => {
            return(
                <SwiperSlide key={item.player.title}>
                    {item.player.title}
                </SwiperSlide>
            )
        })}
    </Swiper>
  </div>
  )
};

export default SwiperComponent;
