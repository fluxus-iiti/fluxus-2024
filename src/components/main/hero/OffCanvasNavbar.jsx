"use client";
import Image from "next/image";

import logo from "../../../../public/images/Navbar/image1.png";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import { usePathname } from "next/navigation";
export default function OffCanvasNavbar() {
	const pathname = usePathname()
	return (
		<div
			id="offcanvas"
			className={` py-4 transition-all fade-in-out  absolute top-[-5000px] w-full   overflow-hidden  bg-black lg:bg-transparent bg-opacity-80 ${pathname=="/technicals"?"!z-[1000000]":""}`}
		>

			<div className="w-full lg:flex justify-center border-0 border-red-500 !text-4xl ">
				{/* the below div is the left side navigation buttons in desktop view */}
				<div className="w-full hidden lg:flex justify-end">
					<div className="md:mx-5 my-5 font-bold mx-10  !text-4xl md:my-auto hover:border-b-2 transition-all fade-in-out hover:!text-gray-300">
						<Link className="text-2xl" href="/">Home</Link>
					</div>
					<div className="md:mx-5 my-5 font-bold mx-10  !text-4xl md:my-auto hover:border-b-2 transition-all fade-in-out hover:!text-gray-300">
						<Link className="text-2xl" href="/accommodation">Accommodation</Link>
					</div>
					{/* <div className="md:mx-5 my-5 font-bold mx-10  !text-4xl md:my-auto hover:border-b-2 transition-all fade-in-out hover:!text-gray-300">
						<Link className="text-2xl" href="/accomodation">Accomodation</Link>
					</div> */}

				</div>
				<div className="flex justify-center items-center relative ">
					<div className="top-0  absolute  left-0 w-full h-full m-5 font-weight-700 text-white text-2xl transition-all fade-in-out lg:hidden" onClick={() => {

						document.getElementById('container').classList.toggle('nav-open');
						document.getElementById('offcanvas').style.top = "-5000px"
						document.getElementById('burger_to_cross').style.transform = "translateY(0px)"
						document.getElementById('navbar').style.visibility= "visible"



					}}>
						<IoClose className="sm:w-20 sm:h-20 h-16 w-16" />
					</div>
					<div className={`w-[5rem] hidden lg:block h-[8rem] md:my-auto mx-10 `}>

					</div>

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
						<Link className="text-2xl" href="/">Home</Link>
					</div>
					<div className="md:mx-5 my-5 font-bold mx-10  !text-4xl md:my-auto hover:border-b-2 transition-all fade-in-out hover:!text-gray-300">
						<Link className="text-2xl" href="/accommodation">Accommodation</Link>
					</div>
					<div className={`md:mx-5 my-5 font-bold mx-10  !text-4xl md:my-auto transition-all fade-in-out hover:!text-gray-300 hover:border-b-2 backdrop-blur-md md:backdrop-blur-none`}>
						<Link className="text-2xl" href="https://ca.fluxus.co.in/">CA Fluxus</Link>
					</div>
					<div className={`md:mx-5 my-5 font-bold mx-10  !text-4xl md:my-auto transition-all fade-in-out hover:!text-gray-300 hover:border-b-2`}>
						<Link className="text-2xl" href="/technicals">Technicals</Link>
					</div>

				</div>

				{/* below div is for desktop view right side navigation buttons , right side of the logo */}
				<div className="w-full lg:flex flex-col hidden items-center lg:flex-row justify-start">
					<div className={`md:mx-5 my-5 font-bold mx-10  !text-4xl md:my-auto transition-all fade-in-out hover:!text-gray-300 hover:border-b-2 backdrop-blur-md md:backdrop-blur-none`}>
						<Link className="text-2xl" href="https://ca.fluxus.co.in/">CA Fluxus</Link>
					</div>
					<div className="md:mx-5 my-5 font-bold mx-10  !text-4xl md:my-auto hover:border-b-2 transition-all fade-in-out hover:!text-gray-300">
						<Link className="text-2xl" href="technicals">Technicals</Link>
					</div>

				</div>


			</div>
		</div>
	);
}

{
	/*  */
}
