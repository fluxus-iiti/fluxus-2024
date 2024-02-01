// "use client";
import React from "react";
import HeadingImage from "../../../public/images/meteor.png";
import Image from "next/image";

const Card = ({ backgroundImage, name }) => {
  return (
    <div className="w-72 h-80 relative mt-20 mx-10 border-2 border-slate-500">
      <div
        className="w-full h-full bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <p className="absolute bottom-1 left-0 right-0 text-center text-white font-extrabold bg-no-repeat p-2">
        {name}
      </p>
    </div>
  );
};

const Wow = () => {
  const containerStyle = {
    backgroundImage: `url(images/Wow/star.png)`,
    backgroundPosition: "right top",
    backgroundRepeat: "no-repeat",
    backgroundSize: "140px 140px",
  };

  return (
    <div className="relative top">
      <div id="heading" className="relative overflow-x-hidden">
        <Image
          src={HeadingImage}
          className="
                !h-[20%] transform -scale-x-100 float-right z-0"
          alt={""}
        />
        <h1 className="text-white w-full text-[25px] lg:!text-[50px] font-extrabold flex absolute top-1/3 left-2/3">
          Words of Wisdom
        </h1>
      </div>
      <div
        className="wow"
        style={{
          backgroundImage: `url(images/back.png)`,
          backgroundRepeat: "repeat",
        }}
      >
        <div
          className="w-fit flex items-center flex-wrap justify-center lg:mx-auto m-8 lg:pr-28 mt-8 p-14 bg-[rgba(217, 217, 217, 0.5)] bg-gray-200 bg-opacity-10 border border-white"
          style={containerStyle}
        >
          <Card backgroundImage={"/images/Wow/human.jpg"} name={"Blah"} />
          <Card backgroundImage={"/images/Wow/human.jpg"} name={"Blah"} />
          <Card backgroundImage={"/images/Wow/human.jpg"} name={"Blah"} />
          <Card backgroundImage={"/images/Wow/human.jpg"} name={"Blah"} />
        </div>
      </div>
    </div>
  );
};

export default Wow;
