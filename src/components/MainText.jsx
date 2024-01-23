import Image from "next/image";
import main_text from '../../../public/images/Hero/hero_text.png'
export default function MainText() {
  return (
    <div className="w-full">
        <div className="text-white text-center lg:text-[120px]  border-0 w-full lg:!my-[-10px] !py-0 text-[35px] sm:text-[70px] sm:my-[-0px]">THE CELESTIAL</div>
        <div className="text-white text-center lg:text-[170px]  border-0 w-full font-bold lg:!my-[-70px] my-[-20px] text-[50px] !py-0 sm:text-[100px] sm:my-[-40px]">EUPHORIA</div>
    </div>
  )
}
