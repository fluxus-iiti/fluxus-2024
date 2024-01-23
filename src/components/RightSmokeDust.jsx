import Image from "next/image";
import right_smoke_dust from '../../../public/images/Hero/right_smoke_dust.png'

export default function RightSmokeDust() {
  return (
    <div>
        <Image src={right_smoke_dust} alt="right_smoke_dust" placeholder="blur" className=""/>
    </div>
  )
}
