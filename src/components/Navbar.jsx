import Image from "next/image";
import { HiBars3 } from "react-icons/hi2";
import logo from '../../public/images/Navbar/image1.png'
export default function Navbar() {
  return (
    <div className=" px-2 py-2 relative">
        <div className="absolute top-0 left-0 w-full h-full my-auto flex  "><HiBars3 className="w-8 h-8 my-auto mx-3 invert"  /></div>
        <div className="w-full flex justify-center items-center">
            <Image src={logo} alt="" placeholder="blur" className="h-[70px] w-[35px]" />
        </div>
    </div>
  )
}
