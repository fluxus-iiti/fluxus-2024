"use client";
import Image from "next/image";

import logo from "../../../../public/images/Navbar/image1.png";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import { usePathname } from "next/navigation";
import NeonButton from "./NeonButton";
import { useRef, useEffect } from "react";
export default function OffCanvasNavbar() {
  const pathname = usePathname();
  const ref = useRef(null);
  useEffect(() => {
    const handleClickOutsideOffCanvas = (e) => {
      if (!(!e.target.closest("#offcanvas") && e.target.closest("#navbar"))) {
        document.getElementById("offcanvas").style.top = "0px";

        // document.getElementById('navbar').style.visibility= "hidden"
        document.getElementById("bars").style.visibility = "hidden";
      }

      if (
        (!e.target.closest("#offcanvas") && !e.target.closest("#navbar")) ||
        (e.target.closest("#offcanvas") && e.target.closest("#close_btn"))
      ) {
        document.getElementById("offcanvas").style.top = "-5000px";

        document.getElementById("bars").style.visibility = "visible";
      }
    };

    document.addEventListener("click", handleClickOutsideOffCanvas);

    return () => {
      document.removeEventListener("click", handleClickOutsideOffCanvas);
    };
  }, []);

  return (
    <div
      id="offcanvas"
      className={` py-4 transition-all  fade-in-out  absolute top-[-5000px] lg:hidden w-full   overflow-hidden  bg-black lg:bg-transparent bg-opacity-80 ${
        pathname == "/technicals" || pathname == "/sponsors"
          ? "!z-[1000000]"
          : "!z-[100000000]"
      }`}
    >
      <div className="w-full lg:flex  justify-center border-0 border-red-500 !text-4xl ">
        {/* the below div is the left side navigation buttons in desktop view */}

        <div className="flex justify-center items-center  ">
          <div
            className="top-0  absolute  left-0 w-fit h-full  font-weight-700 text-white text-2xl transition-all fade-in-out lg:hidden cursor-pointer"
            onClick={() => {
              document.getElementById("offcanvas").style.top = "-5000px";

              document.getElementById("bars").style.visibility = "visible";
            }}
          >
            <IoClose
              id="close_btn"
              className="sm:w-20 sm:h-20 h-16 w-16 cursor-pointer"
            />
          </div>
          <div
            className={`w-[5rem] hidden lg:block h-[8rem] md:my-auto mx-10 `}
          ></div>

          <Image
            src={logo}
            alt=""
            placeholder="blur"
            className="w-[5rem] my-0 lg:hidden md:my-auto mx-10 border-0 border-red-500"
          />
        </div>
        {/* the below div is for mobile view  */}
        <div className="w-full flex flex-col lg:flex-row justify-end items-center lg:hidden">
          <div className="md:mx-5 my-5 font-bold mx-10  !text-4xl md:my-auto hover:border-b-2 transition-all fade-in-out hover:!text-gray-300">
            <Link className="text-2xl" href="/">
              Home
            </Link>
          </div>
          <div
            className={`md:mx-5 my-5 font-bold mx-10  !text-4xl md:my-auto transition-all fade-in-out hover:!text-gray-300 hover:border-b-2`}
          >
            <Link className="text-2xl" href="/technicals">
              Technicals
            </Link>
          </div>
          <div className="md:mx-5 my-5 font-bold mx-10  !text-4xl md:my-auto hover:border-b-2 transition-all fade-in-out hover:!text-gray-300">
            <Link
              target={"_blank"}
              className="text-2xl"
              href="https://www.townscript.com/e/fluxus"
            >
              Workshop
            </Link>
          </div>
          <div className="md:mx-5 my-5 font-bold mx-10  !text-4xl md:my-auto hover:border-b-2 transition-all fade-in-out hover:!text-gray-300">
            <Link className="text-2xl" href="/accommodation">
              Accommodation
            </Link>
          </div>
          <div
            className={`md:mx-5 my-5 font-bold mx-10  !text-4xl md:my-auto transition-all fade-in-out hover:!text-gray-300 hover:border-b-2 backdrop-blur-md md:backdrop-blur-none`}
          >
            <Link
              target={"_blank"}
              className="text-2xl"
              href="https://ca.fluxus.co.in/"
            >
              CA Fluxus
            </Link>
          </div>
          <div
            className={`md:mx-5 my-5 font-bold mx-10  !text-4xl md:my-auto transition-all fade-in-out hover:!text-gray-300 hover:border-b-2`}
          >
            <Link className="text-2xl" href="/sponsors">
              Sponsors
            </Link>
          </div>
          <div
            className={`md:mx-5 my-5 font-bold mx-10  !text-4xl md:my-auto transition-all fade-in-out hover:!text-gray-300 hover:border-b-2`}
          >
            <Link className="text-2xl" href="/team">
              Team
            </Link>
          </div>
          <div
            className={`md:mx-5 my-5 font-bold mx-10  !text-4xl md:my-auto transition-all fade-in-out hover:!text-gray-300 hover:border-b-2`}
          >
            <Link className="text-2xl" href="/timeline">
              Timeline
            </Link>
          </div>
          <div
            className={`md:mx-5 my-5 font-bold mx-10  !text-4xl md:my-auto transition-all fade-in-out hover:!text-gray-300 hover:border-b-2`}
          >
            <Link
              className="text-2xl"
              target={"_blank"}
              href="https://forms.gle/oETzssE9asLVme8Y8"
            >
              <NeonButton />
            </Link>
          </div>
        </div>

        {/* below div is for desktop view right side navigation buttons , right side of the logo */}
      </div>
    </div>
  );
}

{
  /*  */
}
