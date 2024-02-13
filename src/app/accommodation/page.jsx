"use client";
import React from "react";
import ContactCard from "../../components/accommodation/ContactCard";
import Room from "../../components/accommodation/Room";
import FAQ from "../../components/accommodation/FAQ";
import RulesAndRegulations from "../../components/accommodation/RulesAndRegulations";
import IITIIndoreMap from "../../components/accommodation/IITIIndoreMap";
const HostelData = [
  {
    id: 1,
    name: "Hostel 1",
    image: require("../../../public/images/accommodation/1.jpg"),
  },
  {
    id: 2,
    name: "Hostel 2",
    image: require("../../../public/images/accommodation/2.jpg"),
  },
  {
    id: 3,
    name: "Hostel 3",
    image: require("../../../public/images/accommodation/3.jpg"),
  },
  {
    id: 4,
    name: "Hostel 4",
    image: require("../../../public/images/accommodation/4.jpg"),
  },
  {
    id: 5,
    name: "Hostel 5",
    image: require("../../../public/images/accommodation/5.jpg"),
  },
  {
    id: 6,
    name: "Hostel 6",
    image: require("../../../public/images/accommodation/6.jpg"),
  },
];

export default function Page() {
  return (
    // style={{ backgroundImage: 'url(https://wallpapercave.com/wp/RMdbmli.jpg)' }}
    <div className="h-full bg-no-repeat bg-cover border-0 border-red-500">
      <div className="bg"></div>

      <div className="star-field">
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="layer"></div>
      </div>
      <h2 className="font-bold text-3xl md:text-6xl mt-20 text-center w-full">
        For Accommodation <br />
        Contact
      </h2>
      <div className="text-center w-full mt-20 mainBackdrop">
        <a target="_blank" href="https://forms.gle/u4Va2Wm9pPYvpuqq9">
          <button className="justify-center items-center text-3xl rounded-lg bg-white-500 text-white py-3 px-5 formButton font-bold">
            Accommodation Form
          </button>
        </a>
      </div>
      <div className="pt-20 flex flex-wrap justify-center items-center">
        <ContactCard
          ele={{
            name: "Prasson Pandey",
            position: "Head of Accommodation",
            phone: "8604631501",
            gmail: "contactus.fluxus@iiti.ac.in",
          }}
        />
        <ContactCard
          ele={{
            name: "Saket Thamke",
            position: "Head of Accommodation",
            phone: "9321526377",
            gmail: "contactus.fluxus@iiti.ac.in",
          }}
        />
      </div>
      <div className="h-full lg:px-20">
        <IITIIndoreMap />
      </div>
      <h2 className="font-bold text-3xl md:text-6xl lg:mt-20 mb-10  text-center w-full">
        Guest Rooms
      </h2>
      <div className="flex flex-wrap px-20 justify-center items-center">
        {HostelData.map((ele) => {
          return (
            <div className="mx-10  my-10 " key={ele.id}>
              <Room ele={ele} />
            </div>
          );
        })}
      </div>

      <div className="md:grid text-center w-full mb-20 ">
        <RulesAndRegulations />
        <FAQ />
      </div>
      <style jsx>
        {`
          .mainBackdrop {
            backdrop-filter: blur(10px);
          }
          .formButton {
            box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
            border: 1px solid #fff;
          }
          .formButton:hover {
            box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
            border: 1px solid #fff;
            background-color: #fff;
            color: #000;
          }
          .bg {
            background: url(./images/accommodation/bg.jpeg) no-repeat;
            background-size: cover;
            height: 100%;
            width: 100%;
            position: fixed;
            top: 0;
            left: 0;
            z-index: -3;
          }
          .bg:before {
            content: "";
            width: 100%;
            height: 100%;
            background: #000;
            position: fixed;
            z-index: -1;
            top: 0;
            left: 0;
            opacity: 0.3;
          }
          @keyframes sf-fly-by-1 {
            from {
              transform: translateZ(-600px);
              opacity: 0.5;
            }
            to {
              transform: translateZ(0);
              opacity: 0.5;
            }
          }
          @keyframes sf-fly-by-2 {
            from {
              transform: translateZ(-1200px);
              opacity: 0.5;
            }
            to {
              transform: translateZ(-600px);
              opacity: 0.5;
            }
          }
          @keyframes sf-fly-by-3 {
            from {
              transform: translateZ(-1800px);
              opacity: 0.5;
            }
            to {
              transform: translateZ(-1200px);
              opacity: 0.5;
            }
          }
          .star-field {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            perspective: 600px;
            -webkit-perspective: 600px;
            z-index: -1;
          }
          .star-field .layer {
            box-shadow: -411px -476px #cccccc, 777px -407px #d4d4d4,
              -387px -477px #fcfcfc, -91px -235px #d4d4d4, 491px -460px #f7f7f7,
              892px -128px #f7f7f7, 758px -277px #ededed, 596px 378px #cccccc,
              647px 423px whitesmoke, 183px 389px #c7c7c7, 524px -237px #f0f0f0,
              679px -535px #e3e3e3, 158px 399px #ededed, 157px 249px #ededed,
              81px -450px #ebebeb, 719px -360px #c2c2c2, -499px 473px #e8e8e8,
              -158px -349px #d4d4d4, 870px -134px #cfcfcf, 446px 404px #c2c2c2,
              440px 490px #d4d4d4, 414px 507px #e6e6e6, -12px 246px #fcfcfc,
              -384px 369px #e3e3e3, 641px -413px #fcfcfc, 822px 516px #dbdbdb,
              449px 132px #c2c2c2, 727px 146px #f7f7f7, -315px -488px #e6e6e6,
              952px -70px #e3e3e3, -869px -29px #dbdbdb, 502px 80px #dedede,
              764px 342px #e0e0e0, -150px -380px #dbdbdb, 654px -426px #e3e3e3,
              -325px -263px #c2c2c2, 755px -447px #c7c7c7, 729px -177px #c2c2c2,
              -682px -391px #e6e6e6, 554px -176px #ededed, -85px -428px #d9d9d9,
              714px 55px #e8e8e8, 359px -285px #cfcfcf, -362px -508px #dedede,
              468px -265px #fcfcfc, 74px -500px #c7c7c7, -514px 383px #dbdbdb,
              730px -92px #cfcfcf, -112px 287px #c9c9c9, -853px 79px #d6d6d6,
              828px 475px #d6d6d6, -681px 13px #fafafa, -176px 209px #f0f0f0,
              758px 457px #fafafa, -383px -454px #ededed, 813px 179px #d1d1d1,
              608px 98px whitesmoke, -860px -65px #c4c4c4, -572px 272px #f7f7f7,
              459px 533px #fcfcfc, 624px -481px #e6e6e6, 790px 477px #dedede,
              731px -403px #ededed, 70px -534px #cccccc, -23px 510px #cfcfcf,
              -652px -237px whitesmoke, -690px 367px #d1d1d1,
              810px 536px #d1d1d1, 774px 293px #c9c9c9, -362px 97px #c2c2c2,
              563px 47px #dedede, 313px 475px #e0e0e0, 839px -491px #e3e3e3,
              -217px 377px #d4d4d4, -581px 239px #c2c2c2, -857px 72px #cccccc,
              -23px 340px #dedede, -837px 246px white, 170px -502px #cfcfcf,
              822px -443px #e0e0e0, 795px 497px #e0e0e0, -814px -337px #cfcfcf,
              206px -339px #f2f2f2, -779px 108px #e6e6e6, 808px 2px #d4d4d4,
              665px 41px #d4d4d4, -564px 64px #cccccc, -380px 74px #cfcfcf,
              -369px -60px #f7f7f7, 47px -495px #e3e3e3, -383px 368px #f7f7f7,
              419px 288px #d1d1d1, -598px -50px #c2c2c2, -833px 187px #c4c4c4,
              378px 325px whitesmoke, -703px 375px #d6d6d6, 392px 520px #d9d9d9,
              -492px -60px #c4c4c4, 759px 288px #ebebeb, 98px -412px #c4c4c4,
              -911px -277px #c9c9c9;
            transform-style: preserve-3d;
            position: absolute;
            top: 50%;
            left: 50%;
            height: 4px;
            width: 4px;
            border-radius: 2px;
          }
          .star-field .layer:nth-child(1) {
            animation: sf-fly-by-1 5s linear infinite;
          }
          .star-field .layer:nth-child(2) {
            animation: sf-fly-by-2 5s linear infinite;
          }
          .star-field .layer:nth-child(3) {
            animation: sf-fly-by-3 5s linear infinite;
          }
        `}
      </style>
    </div>
  );
}
