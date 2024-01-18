"use client";
import React from "react";
import "../styles/card.css";
import HeadingImage from "../../public/images/Technicals Heading.png";
import Image from "next/image";
const slideWidth = 30;

const Card = (props) => {
  return (
    <div>
      <>
        <div className="card">
          <div className="hexagon">
            <div className="card-content">
              <h2 className="card-title">{props.title}</h2>
              <a href={props.link} className="learn-more-link">
                learn more
              </a>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

const Cards = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(images/back.png)`,
          backgroundRepeat: "repeat",
        }}
      >
        <div id="heading" className="relative overflow-x-hidden">
          <Image
            src={HeadingImage}
            className="
                !h-[20%] transform -scale-x-100 float-right z-0"
            alt={""}
          />
          <h1 className="text-white w-full text-[25px] lg:!text-[50px] font-extrabold flex absolute z-0 top-1/3 left-2/3">
            Culturals
          </h1>
        </div>
        <div className="culturals">
          <>
            <img
              src="/images/planet image.png"
              alt="Left Image"
              className="left-image relative z-0"
            />
            <div className="card-pyramid">
              <div className="card-row">
                <Card title="Dance" image="/images/card.png" link="#" />
                <Card title="Dance" image="/images/card.png" link="#" />
                <Card title="Dance" image="/images/card.png" link="#" />
              </div>
              <div className="card-row">
                <Card title="Dance" image="/images/card.png" link="#" />
                <Card title="Dance" image="/images/card.png" link="#" />
              </div>
              <div className="card-row">
                <Card title="Dance" image="/images/card.png" link="#" />
              </div>
            </div>
          </>
        </div>
      </div>
    </>
  );
};

export default Cards;
