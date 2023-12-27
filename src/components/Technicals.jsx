'use client'
import Image from "next/image";
import React from "react";
import HeadingImage from '../../public/images/Technicals Heading.png'
const slideWidth = 30;

const _items = [
    {
        player: {
            id: 0,
            title: 'Hackathon',
            image: require('../../public/images/image1.png'),
        },
    },
    {
        player: {
            id: 1,
            title: "Blockathon",
            image: require('../../public/images/pngwing 12.png'),
        },
    },
    {
        player: {
            id: 2,
            title: 'Blockathon',
            image: require('../../public/images/pngwing 12.png'),
        },
    },
    {
        player: {
            id: 3,
            title: 'Hackathon',
            image: require('../../public/images/image1.png'),
        },
    },
    {
        player: {
            id: 4,
            title: 'Blockathon',
            image: require('../../public/images/pngwing 14.png'),
        },
    },
];

const length = _items.length;
_items.push(..._items);

const sleep = (ms = 0) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

const createItem = (position, idx) => {
    const item = {
        styles: {
            transform: `translateX(${position * slideWidth}rem)`,
        },
        player: _items[idx].player,
    };

    switch (position) {
        case length - 1:
        case length + 1:
            item.styles = { ...item.styles, filter: 'grayscale(0)' };
            item.styles.transform += ' translateY(-30px)';
            break;
        case length:
            break;
        default:
            item.styles = { ...item.styles, opacity: 0 };
            break;
    }

    return item;
};

const CarouselSlideItem = ({ pos, idx, activeIdx }) => {
    const item = createItem(pos, idx, activeIdx);

    return (
        <li className={`carousel__slide-item group hover:!h-[36rem] transition-all fade-in-out`} style={item.styles}>
            <div id="card" className={`h-full  rounded-b-[40px] `}>
                <Image src={item.player.image} alt={item.player.title} className="lg:!w-[200px] lg:!h-[200px] !w-[150px] !h-[150px] brightness-50  mx-auto group-hover:brightness-100 transition-all fade-in-out !drop-shadow-2xl !shadow-white" />
                <div className="text-center text-5xl font-bold translate-y-10">
                    <h4>{item.player.title}</h4>
                </div>

                <div className="text-center w-full  translate-y-[50px] opacity-0 group-hover:opacity-100 transition-all fade-in-out delay-100 !text-2xl cursor-pointer">
                    <h4>Know More</h4>
                </div>
            </div>

        </li>
    );
};

const keys = Array.from(Array(_items.length).keys());

const Technicals = () => {
    const [items, setItems] = React.useState(keys);
    console.log(items)
    const [isTicking, setIsTicking] = React.useState(false);
    const [activeIdx, setActiveIdx] = React.useState(0);
    const bigLength = items.length;

    const prevClick = (jump = 1) => {
        if (!isTicking) {
            setIsTicking(true);
            setItems((prev) => {
                return prev.map((_, i) => prev[(i + jump) % bigLength]);
            });
        }
    };

    const nextClick = (jump = 1) => {
        if (!isTicking) {
            setIsTicking(true);
            setItems((prev) => {
                return prev.map(
                    (_, i) => prev[(i - jump + bigLength) % bigLength],
                );
            });
        }
    };

    const handleDotClick = (idx) => {
        if (idx < activeIdx) prevClick(activeIdx - idx);
        if (idx > activeIdx) nextClick(idx - activeIdx);
    };

    React.useEffect(() => {
        if (isTicking) sleep(300).then(() => setIsTicking(false));
    }, [isTicking]);

    React.useEffect(() => {
        setActiveIdx((length - (items[0] % length)) % length) // prettier-ignore
    }, [items]);

    return (
        <>
            <div id="heading" className="relative overflow-x-hidden">
                <Image src={HeadingImage} className="
                !h-[20%]" alt={''} />
                <h1 className="text-white absolute ml-10 w-full h-full text-[25px] lg:!text-[50px] font-extrabold text-start flex items-center top-0" >Technicals</h1>
            </div>
            <div className="md:translate-y-[-100px]">
            <div id="html" className="carousel__wrap ">
                <div className="carousel__inner">
                    <button className="carousel__btn carousel__btn--prev !hidden lg:!flex" onClick={() => prevClick()}>
                        <i className="carousel__btn-arrow carousel__btn-arrow--left" />
                    </button>
                    <div className="carousel__container">
                        <ul className="carousel__slide-list ">
                            {items.map((pos, i) => (
                                <div className="">
                                    <CarouselSlideItem
                                        key={i}
                                        idx={i}
                                        pos={pos}
                                        activeIdx={activeIdx}
                                    />
                                </div>
                            ))}
                        </ul>
                    </div>
                    <button className="carousel__btn carousel__btn--next !hidden lg:!flex" onClick={() => nextClick()}>
                        <i className="carousel__btn-arrow carousel__btn-arrow--right" />
                    </button>
                    <div className="carousel__dots lg:hidden">
                        {items.slice(0, length).map((pos, i) => (
                            <button
                                key={i}
                                onClick={() => handleDotClick(i)}
                                className={i === activeIdx ? 'dot active' : 'dot'}
                            />
                        ))}
                    </div>
                </div>
                <style jsx>
                    {`
                
                `}
                </style>
            </div>
            </div>
        </>
    );
};


export default Technicals;