import Image from "next/image";
import left_smoke_dust from '../../../public/images/Hero/left_smoke_dust.png'

export default function LeftSmokeDust() {
  return (
    <div>
        <Image src={left_smoke_dust} alt="left_smoke_dust" placeholder="blur" className=""/>
    </div>
  )
}
