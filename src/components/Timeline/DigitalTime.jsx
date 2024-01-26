import React from 'react';
import { motion, useScroll, useTransform } from "framer-motion";





const DigitalTime = () => {
  const { scrollYProgress } = useScroll()
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-141vw"]);
  return (
    <>
      <div className='bg-transparent w-0 h-0 border-l-[20px] border-r-[20px] border-t-[20px] border-transparent border-t-yellow-500 sticky bottom-[5rem] left-1/2 z-20 top-[calc(100%-7rem)]'></div>
      <motion.div className="w-full h-24 sticky bottom-0 top-[calc(100%-6rem)] z-10 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 overflow-x-hidden" >
        <motion.div className='flex flex-row gap-x-48 text-4xl' style={{ x }}>
          <div>08:00</div>
          <div>09:00</div>
          <div>10:00</div>
          <div>11:00</div>
          <div>12:00</div>
          <div>13:00</div>
          <div>14:00</div>
          <div>15:00</div>
          <div>16:00</div>
          <div>17:00</div>
          <div>18:00</div>
          <div>19:00</div>
          <div>20:00</div>
          <div>21:00</div>
          <div>22:00</div>
          <div>23:00</div>
          <div>00:00</div>
        </motion.div>
      </motion.div>
    </>
  )
}

export default DigitalTime