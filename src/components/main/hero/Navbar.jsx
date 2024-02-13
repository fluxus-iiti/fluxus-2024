"use client";
import Image from "next/image";
import BurgerToCross from "./BurgerToCross";
import logo from "../../../../public/images/Navbar/image1.png";
import { motion } from "framer-motion";
import OffCanvasNavbar from "./OffCanvasNavbar";
import { FaBars } from "react-icons/fa";
import { usePathname } from 'next/navigation'
import Link from "next/link";
import { useLayoutEffect } from "react";
export default function Navbar() {
  const pathname = usePathname()
  console.log(pathname)

  return (
    <div>
      

      <div id="navbar" className={`bg-transparent ${pathname == "/technicals" ? "absolute" : ""} w-full backdrop-blur-md md:backdrop-blur-none `}>
        <div
          id="burger_to_cross"
          className="top-14 !z-[100000000] absolute  left-5 w-fit  my-auto  font-weight-700 text-white text-2xl transition-all fade-in-out  hidden lg:flex h-fit "
        >
          <BurgerToCross />
        </div>
        <div className="top-5 !z-[1000] absolute  left-5 w-full h-fit m-5 font-weight-700 text-white text-2xl transition-all fade-in-out lg:hidden">
          <FaBars className="sm:w-16 sm:h-16 h-10 w-10" onClick={() => {
            document.getElementById('container').classList.toggle('nav-open');
            document.getElementById('offcanvas').style.top = "0px"
            document.getElementById('burger_to_cross').style.transform = "translateY(50px)"
            document.getElementById('navbar').style.visibility= "hidden"
          }} />
        </div>

        <div className=" py-2  overflow-hidden ">


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
          ></motion.div>
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

              <div className="flex justify-center items-center Z ">
                <Link href="/" className="cursor-pointer">
                  <Image
                    src={logo}
                    alt=""
                    placeholder="blur"
                    className="w-[5rem] my-0 md:my-auto mx-10 border-0 border-red-500"
                  />
                </Link>
              </div>

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
          ></motion.div>
        </div>
      </div>
      <div className="z-[-1]">
        <OffCanvasNavbar />
      </div>
    </div>
  );
}
