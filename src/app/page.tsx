import Image from "next/image";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Technicals from "@/components/Technicals";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Technicals />
      <Footer />
    </div>
  );
}
