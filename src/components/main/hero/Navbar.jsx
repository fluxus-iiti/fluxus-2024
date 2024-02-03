"use client";
import Image from "next/image";
import BurgerToCross from './BurgerToCross'
import logo from "../../../../public/images/Navbar/image1.png";
import { motion } from "framer-motion";
import OffCanvasNavbar from './OffCanvasNavbar'
export default function Navbar() {
  return (
    <>
      <div id="burger_to_cross" className="top-5 !z-[100000000] absolute  left-5 w-full h-full my-auto flex font-weight-700 text-white text-2xl transition-all fade-in-out">
          <BurgerToCross />
        </div>
    
    <div className=" py-2 bg-black  overflow-hidden z-[-1]">
      <div>
        <OffCanvasNavbar />
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{
          duration: 2.5,
          type: "spring",
          delay: 1,
        }}
        variants={{
          visible: { y: "1vh", opacity: 1 },
          hidden: { y: "0vh", opacity: 0 },
        }}
      >
        
      </motion.div>
      <div className="w-full flex justify-center items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{
            duration: 2.5,
            type: "spring",
          }}
          variants={{
            visible: { y: "0vh", opacity: 1 },
            hidden: { y: "-5vh", opacity: 0 },
          }}
        >
          <Image
            src={logo}
            alt=""
            placeholder="blur"
            className="h-[70px] w-[35px] "
          />
        </motion.div>
      </div>
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{
          duration: 2.5,
          type: "spring",
          delay: 1,
        }}
        variants={{
          visible: { y: "1vh", opacity: 1 },
          hidden: { y: "0vh", opacity: 0 },
        }}
      >
      </motion.div>
    </div>
    </>
  );
}
