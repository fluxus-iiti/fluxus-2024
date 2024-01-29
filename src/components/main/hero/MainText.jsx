import react, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function MainText() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  
  return (
    <motion.div
      className="w-full pt-48 intro overflow-hidden"
      ref={ref}
      transition={{ type: "inertia", duration: 0.5, ease: "easeInOut" }}
    >
      <div className="text-white text-center lg:text-[20rem]  border-0 w-full lg:!my-[-140px] !py-0 text-[35px] sm:text-[70px] sm:my-[-0px] font-serif">
        {"A CELESTIAL".split().map((letter, index) => {
          return <motion.span key={index}>{letter}</motion.span>;
        })}
      </div>
      <div className="text-white text-center lg:text-[24rem]  border-0 w-full lg:!my-[-100px] my-[-20px] text-[50px] !py-0 sm:text-[100px] sm:my-[-40px]">
        <div>
          {"EUPHORIA".split().map((letter, index) => {
            return <motion.span key={index}>{letter}</motion.span>;
          })}
        </div>
      </div>
    </motion.div>
  );
}




// const ThemeText = () => {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["end end", "start start"],
//   });
//   return (
//     <div className="scrollDiv w-full flex flex-col" ref={ref}>
//       <div className="w-full text-center flex word-wrap align-items-center justify-center ofh">
//         {["A", " ", "C", "E", "L", "E", "S", "T", "I", "A", "L"].map(
//           (letter, index) => {
//             const delay = useTransform(
//               scrollYProgress,
//               [0, 1],
//               [`${50 + 1 * index}vh`, "-10vh"]
//             );
//             if (index === 1) {
//               return (
//                 <motion.div
//                   key={index}
//                   style={{ y: delay }}
//                   //   transition={{
//                   //     ease: "ease-in-out",
//                   //     delay: 100,
//                   //     type: "spring",
//                   //     stiffness: 250,
//                   //     damping: 25,
//                   //     mass: 0.5,
//                   //   }}
//                 >
//                   <div className="scrollText text-white">&nbsp;</div>
//                 </motion.div>
//               );
//             }
//             return (
//               <motion.div key={index} style={{ y: delay }}>
//                 <div className="scrollText text-white">{letter}</div>
//               </motion.div>
//             );
//           }
//         )}
//       </div>
//       <div className="w-full text-center flex word-wrap align-items-center justify-center ofh">
//         {["E", "U", "P", "H", "O", "R", "I", "A"].map((letter, index) => {
//           const delay = useTransform(
//             scrollYProgress,
//             [0, 1],
//             [`${50 + 1 * index}vh`, "-100vh"]
//           );
//           if (index === 8) {
//             return (
//               <motion.div key={index} style={{ y: delay }}>
//                 <div className="scrollText text-white">&nbsp;</div>
//               </motion.div>
//             );
//           }
//           return (
//             <motion.div
//               key={index}
//               style={{ y: delay }}
//               transition={{
//                 type: "spring",
//                 stiffness: 250,
//                 damping: 25,
//                 mass: 0.5,
//               }}
//             >
//               <div className="scrollText text-white">{letter}</div>
//             </motion.div>
//           );
//         })}
//       </div>
//       <div
//         className="m-2 text-lg w-full text-center align-middle"
//         style={{ border: "1px solid red", height: "10%" }}
//       >
//         Dive into the world of Technology
//       </div>
//     </div>
//   );
// };