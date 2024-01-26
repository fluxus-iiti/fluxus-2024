"use client";
import "./styles.css";

import Clock from '@/components/Timeline/Clock'
import HorizontalScrollCarousel from "@/components/Timeline/HorizontalCarouselScroll";
const Timeline = () => {
  return (
    <div className="flex flex-col">
      <div className="sticky top-0 z-20">
        <Clock />
      </div>
      <HorizontalScrollCarousel />
      {/* <div className="relative flex flex-row w-full h-32 justify-self-end justify-center"> */}
      {/* </div> */}
    </div>
  )
}

export default Timeline