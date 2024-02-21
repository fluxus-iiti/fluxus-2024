"use client";
import React from "react";
import TeamCard from "../../components/team/TeamCard";

const teamData = {
  Operations: {
    heads: [
      {
        name: "Head 1",
        phoneNumber: "123-456-7890",
        linkedin: "linkedin.com/head1",
        email: "head1@example.com",
        imagePath: "/images/Day1/human.jpg",
      },
      {
        name: "Head 2",
        phoneNumber: "456-789-0123",
        linkedin: "linkedin.com/head2",
        email: "head2@example.com",
        imagePath: "/images/Day1/human.jpg",
      },
    ],
    members: [
      {
        name: "Member 1",
        phoneNumber: "111-222-3333",
        linkedin: "linkedin.com/member1",
        email: "member1@example.com",
        imagePath: "/images/Day1/human.jpg",
      },
      {
        name: "Member 2",
        phoneNumber: "222-333-4444",
        linkedin: "linkedin.com/member2",
        email: "member2@example.com",
        imagePath: "/images/Day1/human.jpg",
      },
      {
        name: "Member 3",
        phoneNumber: "333-444-5555",
        linkedin: "linkedin.com/member3",
        email: "member3@example.com",
        imagePath: "/images/Day1/human.jpg",
      },
      {
        name: "Member 4",
        phoneNumber: "444-555-6666",
        linkedin: "linkedin.com/member4",
        email: "member4@example.com",
        imagePath: "/images/Day1/human.jpg",
      },
      {
        name: "Member 4",
        phoneNumber: "444-555-6666",
        linkedin: "linkedin.com/member4",
        email: "member4@example.com",
        imagePath: "/images/Day1/human.jpg",
      },{
        name: "Member 4",
        phoneNumber: "444-555-6666",
        linkedin: "linkedin.com/member4",
        email: "member4@example.com",
        imagePath: "/images/Day1/human.jpg",
      },
    ],
  },
  Logistics: {
    heads: [
      {
        name: "Head 3",
        phoneNumber: "789-012-3456",
        linkedin: "linkedin.com/head3",
        email: "head3@example.com",
        imagePath: "/images/Day1/human.jpg",
      },
      {
        name: "Head 4",
        phoneNumber: "012-345-6789",
        linkedin: "linkedin.com/head4",
        email: "head4@example.com",
        imagePath: "/images/Day1/human.jpg",
      },
    ],
    members: [
      {
        name: "Member 5",
        phoneNumber: "555-666-7777",
        linkedin: "linkedin.com/member5",
        email: "member5@example.com",
        imagePath: "/images/Day1/human.jpg",
      },
      {
        name: "Member 6",
        phoneNumber: "666-777-8888",
        linkedin: "linkedin.com/member6",
        email: "member6@example.com",
        imagePath: "/images/Day1/human.jpg",
      },
      {
        name: "Member 7",
        phoneNumber: "777-888-9999",
        linkedin: "linkedin.com/member7",
        email: "member7@example.com",
        imagePath: "/images/Day1/human.jpg",
      },
      {
        name: "Member 8",
        phoneNumber: "888-999-0000",
        linkedin: "linkedin.com/member8",
        email: "member8@example.com",
        imagePath: "/images/Day1/human.jpg",
      },
    ],
  },
};

const TeamPage = () => {
  return (
    <div className="h-full bg-no-repeat bg-cover border-0 border-red-500 z-[-1]">
      <div className="bg"></div>

      <div className="star-field">
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="layer"></div>
      </div>
      <div className="flex mt-4">
        {/* Left side */}
        {/* <div className="w-1/4 px-4">
        <h2 className="text-xl font-bold mb-4 ">Teams</h2>
        {Object.keys(teamData).map(teamName => (
          <div key={teamName} className="mb-4">
            <a href={`#${teamName}`} className="font-bold hover:underline text-3xl">{teamName}</a>
          </div>
        ))}
      </div> */}

        {/* Right side */}
        <div className="w-full px-4 md:mx-48">
          {Object.entries(teamData).map(([teamName, teamInfo]) => (
            <TeamCard key={teamName} teamName={teamName} teamInfo={teamInfo} />
          ))}
        </div>
      </div>
      <style jsx>
        {`
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
};

export default TeamPage;
