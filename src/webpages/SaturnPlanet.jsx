import Image from "next/image";
import saturn_planet from '../../../public/images/Hero/saturn_planet.png'
export default function SaturnPlanet() {
  return (
    <div className="brightness-110 flex justify-center">
        <Image src={saturn_planet} alt="planet" placeholder="blur" className="w-full"  />
    </div>
  )
}
