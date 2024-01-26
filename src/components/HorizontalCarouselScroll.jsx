import { setupScrollListeners } from './ScrollHandler';
import React, { useRef, useEffect, useState } from 'react'
import { motion, useTransform, useScroll } from "framer-motion"

// import Bard from '../components/card'

const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-60%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-events-bg bg_2"
        >
            {/* <div className='flex flex-col'> */}
                <div className="sticky top-0 w-full text-5xl text-white flex justify-center uppercase">Events</div>
                <div className="sticky top-0 flex h-[calc(100vh-30px)] items-center overflow-hidden">
                    <motion.div style={{ x }} className="flex gap-32">
                        {cards.map((card) => {
                            return <Card card={card} key={card.id} />;
                        })}
                    </motion.div>
                </div>
            {/* </div> */}
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

                    <p className="text-6xl font-black uppercase text-black ">
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
        url: "images/cards/card_1.jpeg",
        title: "50,000+",
        id: 1,
        text: "power back-up system Installations",
    },
    {
        url: "images/cards/card_2.jpg",
        title: "500+",
        id: 2,
        text: "perfectly engineered Rooftop installations"
    },
    {
        url: "images/cards/card_3.avif",
        title: "Grade A",
        id: 3,
        text: "Panels certified by TEDA & MNRE"
    },
    {
        url: "images/cards/card_4.avif",
        title: "Pan India",
        id: 4,
        text: "Presence with wide service network"
    },
    {
        url: "images/cards/card_5.jpg",
        title: "50,000+",
        id: 5,
        text: "Kilowatts of cumulative rooftop capacity installed"
    },

];

export default HorizontalScrollCarousel;