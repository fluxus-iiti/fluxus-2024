import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import DigitalTime from "./DigitalTime"
const Example = () => {
    return (
        <div className="bg-events-bg">
            <div className="flex h-48 items-end ml-12 justify-start">
                <span className="font-semibold text-5xl uppercase text-white">
                    events
                </span>
            </div>
            <HorizontalScrollCarousel />
        </div>
    );
};

const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-65%"]);

    return (
        <section ref={targetRef} className="relative h-[800vh] bg-transparent">
            <div className="sticky top-0 z-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-12">
                    {cards.map((card) => {
                        return <Card card={card} key={card.id} />;
                    })}
                </motion.div>
            </div>
            <DigitalTime />
        </section>
    );
};

const Card = ({ card }) => {
    return (
        <div
            key={card.id}
            className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
        >
            <div
                style={{
                    backgroundImage: `url(${card.url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className="absolute z-0 transition-transform duration-300 group-hover:scale-110 w-full h-full"
            ></div>
            <div className="z-10 w-full h-full flex flex-col justify-end">
                <div className='flex flex-col h-2/5 items-start pl-4 pr-12 pt-4 justify-center backdrop-blur-lg'>

                    <p className="text-6xl font-black uppercase text-white">
                        {card.title}
                    </p>
                    <p className='capitalize text-2xl pr-2 text-left'>
                        {card.text}
                    </p>
                </div>
            </div>
        </div>
    );
};

const cards = [
    {
        url: "images/card.png",
        title: "Event A",
        id: 1,
        text: "some text",
    },
    {
        url: "images/card.png",
        title: "Event B",
        id: 2,
        text: "some text"
    },
    {
        url: "images/card.png",
        title: "Event C",
        id: 3,
        text: "some text"
    },
    {
        url: "images/card.png",
        title: "Event D",
        id: 4,
        text: "some text"
    },
    {
        url: "images/card.png",
        title: "Event E",
        id: 5,
        text: "some text"
    },

];

export default Example;