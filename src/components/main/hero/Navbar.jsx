"use client";
import Image from "next/image";
import { HiBars3 } from "react-icons/hi2";
import logo from "../../../../public/images/Navbar/image1.png";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <div className=" px-2 py-2 relative">
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
        <div className="absolute top-0 left-0 w-full h-full my-auto flex  ">
          <HiBars3 className="w-14 h-14 my-auto mx-10 text-white mt-10" />
        </div>
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
            hidden: { y: "-10vh", opacity: 0 },
          }}
        >
          <Image
            src={logo}
            alt=""
            placeholder="blur"
            className="h-[70px] w-[35px] mt-10"
          />
        </motion.div>
      </div>
    </div>
  );
}
