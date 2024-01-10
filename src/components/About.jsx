"use client";
// pages/index.js
import React from "react";
import Image from "next/image";
import HeadingImage from "../../public/images/Technicals Heading.png";
import about from "../../public/images/About/about.png";
const About = () => {
  return (
    <>
      <div className="mainc">
        <div className="ccontainer">
          {/* <Image src={imag} className="bg" /> */}
          <Image src={HeadingImage} className="bg" alt={""} />
          {/* <img
            src="https://officialpsds.com/imageview/7l/0l/7l0lm0_large.png?1521316541"
            className="bg2"
          ></img> */}
          <div className="img">
            <Image src={about} className="imag" />
          </div>
          <div className="text">
            <div className="headingc">
              <p className="heading">ABOUT FLUXUS</p>
            </div>
            <p className="para">
              It took years of hard work, sheer will, and dedication but today,
              the Indian Institute of Technology, Indore, stands tall among the
              new generation of IITs. We have accolades and awards in academics,
              sports, and technical and cultural events. Our students have
              proved their mettle in various arenas across the country. Given
              this long list of achievements, it is evident that we are hungry
              to prove ourselves even further and achieve even greater heights.
              Fluxus, IIT Indore’s annual techno-cultural fest, proudly wears
              the crown of“Central India’s Biggest and Most Anticipated
              Event”.Fluxus flaunts guest appearances from Bollywood artists and
              stand-up comedians like Farhan Akhtar, Sunidhi Chauhan, Shirley
              Setia, Amit Trivedi, Salim - Sulaiman and Zakir Khan while
              providing an excellent stage for new and upcoming artists like The
              Local Train. We are now back with the Tenth Edition of Fluxus,
              which will be Bigger, Brighter and Better than ever! With
              preparations in full swing, there is little doubt that this year’s
              Fluxus will be its most unforgettable edition yet.
            </p>
          </div>
        </div>
        {/* <AnimatedCarousel /> */}

        <style>{`
      body{
        
        width:100%;
        height:100%;
      }
      .mainc{
        background-color:black;
        color:white;
        min-height:450px;
      }
        .ccontainer {
          display: flex;
          justify-content: right;
          height: 100%;
          text-align: left;
          width:100%;
          margin-left:0;
          height:100%;
        }
        .img{
          width:30%;
          border-radius:100px;
          margin-top:95px;
          padding-left:20px;
          max-height:300px;
          max-width:442px;
          // margin-right:5vw;
        }
        img{
          width:90%;
          max-height:400px;
        }
        .text{
          display:flex;
          flex-direction: column;
          justify-content: right;
          // align-items: right;
          width:70%;
          position:relative;
          padding:0px 10px 20px 0;
        }
        .bg{
          z-index:0;
          position:absolute;
          display:inline;
          height:200px;
          // width:100vw;
          // margin-top:0;
          // margin:35px 0 0 0;
          margin-left:0px;
          transform: scaleX(-1) scaleY(1.5);
        }
        .bg2{
          z-index:0;
          display:none;
        }
        
          .headingc{
            width:100%;
            height:200px;
          }
.heading {
  // font-size: 24px;
  // margin: 0;
  text-align:right;
  width:100%;
  padding-right:0px;
  padding-top:40px;
  z-index:2;
  // padding:4px 4vw 40px 0px;
  font-weight:bold;
  font-size:60px;
}
.para{
  display:flex;
  justify-content-right;
  font-size:20px;
  padding-top:20px;
}

@media screen and (min-width: 1400px) {
  .img{
    width:20%;
          border-radius:100px;
          margin-top:95px;
          padding-left:20px;
          max-width:442px;
          max-height:10px;
          margin-right:1%;
  }
  .imag{
    // max-height:200px;
  }
  .text{
    width:80%;
  }
}

@media screen and (max-width: 856px) {
  .text{
    width:100%;
    display:inline-block;
  }
  .bg2{
    display:inline;
    z-index:4;
    width:20%;
    margin:0;
    position:absolute;
    left:4vw;
  }
  .para{
    display:inline-block;
    width:100vw;
    padding:40px;
  }
  .headingc{
    display:inline-block;
    width:100%;
    padding:0;
  }
  .heading{
    padding-top:50px;
    
  }
  .img{
    width:40%;
    border-radius:100px;
    margin-top:0px;
    height:100px;
    display:inline-block;
    padding-left:20px;
  }
  img{
    width:100%;
    height:100px;
  }
}

@media screen and (max-width: 688px) {
  .heading{
    font-size:40px;
    text-align:right;
    padding-top:64px;
  }
  @media screen and (max-width: 484px) {
    .heading{
      font-size:30px;
      text-align:right;
      padding-top:74px;
    }
    @media screen and (max-width: 340px) {
      .heading{
        font-size:25px;
        text-align:right;
        padding-top:80px;
      }
  }
  

`}</style>
      </div>
    </>
  );
};

export default About;
