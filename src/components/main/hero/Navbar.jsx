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
import NeonButton from "./NeonButton";
export default function Navbar() {
  const pathname = usePathname()
  console.log(pathname)

  return (
    <div>


      <div id="navbar" className={`bg-transparent ${pathname == "/technicals" || pathname=="/sponsors"? "absolute" : ""} w-full backdrop-blur-md md:backdrop-blur-none !z-[10000000000000000]`}>

        <div id="bars" className="top-5 !z-[1000] absolute  left-5 w-full h-fit m-5 font-weight-700 text-white text-2xl transition-all fade-in-out lg:hidden">
          <FaBars className="sm:w-16 sm:h-16 h-10 w-10" onClick={() => {

            document.getElementById('offcanvas').style.top = "0px"

            // document.getElementById('navbar').style.visibility= "hidden"
            document.getElementById('bars').style.visibility = "hidden"
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

            <div className="w-full lg:flex justify-center border-0 border-red-500 !text-4xl ">
              <div className="w-full hidden lg:flex justify-end">
                <div className="md:mx-5 my-5 font-bold mx-10  !text-4xl md:my-auto hover:border-b-2 transition-all fade-in-out hover:!text-gray-300">
                  <Link className="text-2xl" href="/">Home</Link>
                </div>
                <div className="md:mx-5 my-5 font-bold mx-10  !text-4xl md:my-auto hover:border-b-2 transition-all fade-in-out hover:!text-gray-300">
                  <Link className="text-2xl" target={"_blank"}  href="https://www.townscript.com/e/fluxus">Workshop</Link>
                </div>
                <div className="md:mx-5 my-5 font-bold mx-10  !text-4xl md:my-auto hover:border-b-2 transition-all fade-in-out hover:!text-gray-300">
                  <Link className="text-2xl" href="/accommodation">Accommodation</Link>
                </div>
                {/* <div className="md:mx-5 my-5 font-bold mx-10  !text-4xl md:my-auto hover:border-b-2 transition-all fade-in-out hover:!text-gray-300">
						<Link className="text-2xl" href="/accomodation">Accomodation</Link>
					</div> */}

              </div>
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
              <div className="w-full border-0 lg:flex flex-col hidden items-center lg:flex-row justify-between ml-14">
                <div className="flex w-full">
                  <div className={`md:mx-5 my-5 font-bold mx-10  !text-4xl md:my-auto transition-all fade-in-out hover:!text-gray-300 hover:border-b-2 backdrop-blur-md md:backdrop-blur-none`}>
                    <Link className="text-2xl" target={"_blank"} href="https://ca.fluxus.co.in/">CA Fluxus</Link>
                  </div>
                  <div className="md:mx-5 my-5 font-bold mx-10  !text-4xl md:my-auto hover:border-b-2 transition-all fade-in-out hover:!text-gray-300">
                    <Link className="text-2xl" href="technicals">Technicals</Link>
                  </div>
                  <div className="md:mx-5 my-5 font-bold mx-10  !text-4xl md:my-auto hover:border-b-2 transition-all fade-in-out hover:!text-gray-300">
                    <Link className="text-2xl" href="team">Team</Link>
                  </div>
                </div>
                <div className="md:mx-5 my-5 font-bold mx-10  !text-4xl md:my-auto transition-all fade-in-out hover:!text-gray-300">
                  <Link className="text-2xl" target={"_blank"} href="https://forms.gle/oETzssE9asLVme8Y8"><NeonButton/></Link>
                </div>


              </div>
            </div>

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
