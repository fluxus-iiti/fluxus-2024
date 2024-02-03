'use client'
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";
import logo from '../../../../public/images/Navbar/image1.png'
import Link from "next/link";
export default function OffCanvasNavbar() {
    return (
        <div id="offcanvas" className="bg-black py-2 transition-all fade-in-out  absolute top-[-500px] w-full  overflow-hidden !z-[1000]">

            <div className="w-full flex flex-wrap  justify-center items-center">
                    <div className="md:mx-5 my-5 font-bold mx-10  text-2xl md:my-auto">
                        <Link className="text-2xl" href="technicals">Technicals</Link>
                    </div>
                    <div className="md:mx-5 my-5 font-bold mx-10  text-2xl md:my-auto">
                        <Link className="text-2xl" href="technicals">Technicals</Link>
                    </div>
                    <div className="md:mx-5 my-5 font-bold mx-10  text-2xl md:my-auto">
                        <Link className="text-2xl" href="technicals">Technicals</Link>
                    </div>
                    <div className="md:mx-5 my-5 font-bold mx-10  text-2xl md:my-auto">
                        <Link className="text-2xl" href="technicals">Technicals</Link>
                    </div>
                    <Image
                        src={logo}
                        alt=""
                        placeholder="blur"
                        className="h-[70px] w-[35px] my-10 md:my-auto"
                    />
                    <div className="md:mx-5 my-5 font-bold mx-10  text-2xl md:my-auto">
                        <Link className="text-2xl" href="technicals">Technicals</Link>
                    </div>
                    <div className="md:mx-5 my-5 font-bold mx-10  text-2xl md:my-auto">
                        <Link className="text-2xl" href="technicals">Technicals</Link>
                    </div>
                    <div className="md:mx-5 my-5 font-bold mx-10  text-2xl md:my-auto">
                        <Link className="text-2xl" href="technicals">Technicals</Link>
                    </div>
                    <div className="md:mx-5 my-5 font-bold mx-10  text-2xl md:my-auto">
                        <Link className="text-2xl" href="technicals">Technicals</Link>
                    </div>
               
            </div>
        
        </div>
    )
}

{/*  */ }