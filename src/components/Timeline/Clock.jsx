import React, { useState, useEffect } from 'react';// reference: https://codesandbox.io/p/sandbox/analog-clock-using-react-idkpz?file=%2Fsrc%2FClock.js
import { motion, useScroll, useTransform } from 'framer-motion';

const Clock = () => {
    const [time, setTime] = useState(new Date());
    
    const { scrollYProgress } = useScroll();
    // const x = useTransform(scrollYProgress, [0, 1], ["0%", "-90vw"]);

    useEffect(() => {
        const timerId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(timerId);
        };
    }, []);

    return (
        <div className="clock scale-50 bg-white rounded-full sticky -top-12">
            <motion.div
                id="hour_hand"
                className="bg-gray-800 w-[6px] h-[60px] absolute top-[30%] left-[49%] origin-bottom"
                animate={{ rotateZ:scrollYProgress.current*360}}

            />
            <motion.div
                id="min_hand"
                className="absolute w-[4px] h-[80px] bg-red-500 top-[22.5%] left-[49%] origin-bottom"
                // style={{
                //     transform: `rotateZ(${scrollYProgress.current * 12 *360}deg)`
                // }}
                animate={{ rotateZ:scrollYProgress.current*360*12}}
            />
            {/* <div
                id="sec_hand"
                className="absolute w-[2px] h-[118px] bg-red-500 top-[10.5%] left-1/2 origin-bottom"
                style={{
                    transform: `rotateZ(${scrollYProgress.current * 6}deg)`
                }}
            /> */}
            <span className="twelve top-[10px] left-[46%]">12</span>
            <span className="one top-[10%] right-[26%]">1</span>
            <span className="two top-[25%] right-[10%]">2</span>
            <span className="three top-[46%] right-[10px]">3</span>
            <span className="four top-[67%] right-[30px]">4</span>
            <span className="five right-[78px] top-[80%]">5</span>
            <span className="six bottom-[10px] left-1/2">6</span>
            <span className="seven top-[82%] left-[80px]">7</span>
            <span className="eight top-[67%] left-[30px]">8</span>
            <span className="nine top-[46%] left-[10px]">9</span>
            <span className="ten top-1/4 left-[10%]">10</span>
            <span className="eleven top-[10%] left-[26%]">11</span>
        </div>
    );
};

export default Clock;
