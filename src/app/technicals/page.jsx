import Hero from "@/components/events/Hero";
import About from "@/components/events/About";
import Technicals from "@/components/events/Technicals";
import Footer from "@/components/events/Footer";

export default function EventsPage() {

  return (
    <>
      <Hero />
      <About />
      <Technicals />
      <Footer prop = {{contact:+919022566026, contact2:+919920702153}}/>
    </>
  );
}
