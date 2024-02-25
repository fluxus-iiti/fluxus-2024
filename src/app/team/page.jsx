"use client";
import React from "react";
import TeamCard from "../../components/team/TeamCard";

const teamData = {
  "Overall Coordinator": {
    heads: [
      {
        name: "Arunaditya Dash",
        phoneNumber: "9344446245",
        linkedin: "https://in.linkedin.com/in/arunaditya-dash",
        email: "oc.fluxus@iiti.ac.in",
        imagePath: "/images/Team/24.jpg",
        title: "",
      },
    ],
    members: [],
  },
  "Public and Campus Relations": {
    heads: [
      {
        name: "Spandan Chakraborty",
        phoneNumber: "8582908301",
        linkedin: "https://in.linkedin.com/in/spandan-chakraborty-4184b3228",
        email: "contactus.fluxus@iiti.ac.in",
        imagePath: "/images/Team/108.jpg",
        title: "Head of Public Relations",
      },
      {
        name: "Shagun Ghatak",
        phoneNumber: "9653155107",
        linkedin: "https://www.linkedin.com/in/shagun-ghatak-59a411230/",
        email: "me210003069@iiti.ac.in",
        imagePath: "/images/Team/25.jpg",
        title: "Head of Campus Relations",
      },
    ],
    members: [
      {
        name: "Naman Goyal",
        imagePath: "/images/Team/30.jpg",
      },
      {
        name: "Ayush Jindal",
        imagePath: "/images/Team/33.jpg",
      },
      {
        name: "Shubham Pawar",
        imagePath: "/images/Team/34.jpg",
      },
      {
        name: "Rohan Dhiman",
        imagePath: "/images/Team/35.jpg",
      },
      {
        name: "Pranshu Devlia",
        imagePath: "/images/Team/39.jpg",
      },
      {
        name: "Atharvakant",
        imagePath: "/images/Team/41.JPG",
      },
      {
        name: "Daksh Chandel",
        imagePath: "/images/Team/43.jpg",
      },
      {
        name: "Shorya Kshettry",
        imagePath: "/images/Team/45.jpg",
      },
      {
        name: "Moreshwar",
        imagePath: "/images/Team/48.jpeg",
      },
      {
        name: "Vighnesh",
        imagePath: "/images/Team/49.jpg",
      },
      {
        name: "Sneha Bains",
        imagePath: "/images/Team/52.jpg",
      },
      {
        name: "Niyati Mishra",
        imagePath: "/images/Team/55.jpeg",
      },
      {
        name: "Ansh Kyal",
        imagePath: "/images/Team/59.jpg",
      },
      {
        name: "Anay Sachin",
        imagePath: "/images/Team/65.jpg",
      },
      {
        name: "Satyajeet Pani",
        imagePath: "/images/Team/66.jpg",
      },
      {
        name: "Rishabh Patel",
        imagePath: "/images/Team/69.jpg",
      },
      {
        name: "Mannan Mahajan",
        imagePath: "/images/Team/71.jpg",
      },
      {
        name: "Lavanya Bhatnagar",
        imagePath: "/images/Team/110.jpg",
      },
      {
        name: "Varad Pendse",
        imagePath: "/images/Team/74.jpg",
      },
      {
        name: "Suryansh Garg",
        imagePath: "/images/Team/78.jpeg",
      },
      {
        name: "Sakshi Sidhe",
        imagePath: "/images/Team/80.jpeg",
      },
      {
        name: "Tanvi Agarwal",
        imagePath: "/images/Team/82.jpg",
      },
      {
        name: "Manan Jiwnani",
        imagePath: "/images/Team/83.jpg",
      },
      {
        name: "Kanav Bansal",
        imagePath: "/images/Team/85.jpeg",
      },
      {
        name: "Yagyaparna Mandwale",
        imagePath: "/images/Team/54.jpg",
      },
      {
        name: "Anshita Pandey",
        imagePath: "/images/Team/90.jpg",
      },
    ],
  },
  "Marketing and Corporate Relations": {
    heads: [
      {
        name: "Geetika Tirumalasetty",
        phoneNumber: "8454052361",
        linkedin:
          "https://www.linkedin.com/in/geetika-tirumalasetty-9ab02722a/",
        email: "hom.fluxus@iiti.ac.in",
        imagePath: "/images/Team/23.jpg",
        title: "Head of Marketing",
      },
    ],
    members: [
      {
        name: "Anand Nambiar",
        imagePath: "/images/Team/42.jpg",
      },
      {
        name: "Md Sharik",
        imagePath: "/images/Team/46.jpg",
      },
      {
        name: "Tejas",
        imagePath: "/images/Team/47.jpg",
      },
      {
        name: "Prabhat Sati",
        imagePath: "/images/Team/50.jpg",
      },
      {
        name: "Kavya Patel",
        imagePath: "/images/Team/53.jpg",
      },
      {
        name: "Kshitiz Gupta",
        imagePath: "/images/Team/57.jpeg",
      },
      {
        name: "Abhijeet Singh",
        imagePath: "/images/Team/111.jpg",
      },
      {
        name: "Divanshi Mehta",
        imagePath: "/images/Team/63.jpg",
      },
      {
        name: "Adinath Apte",
        imagePath: "/images/Team/67.jpg",
      },
      {
        name: "Abhinav Singh",
        imagePath: "/images/Team/56.jpg",
      },
      {
        name: "Anurag Sinha",
        imagePath: "/images/Team/75.jpg",
      },
      {
        name: "Chanakya",
        imagePath: "/images/Team/76.jpg",
      },
      {
        name: "Khush Paliwal",
        imagePath: "/images/Team/77.jpg",
      },
      {
        name: "Sahajmeet Kaur",
        imagePath: "/images/Team/81.jpg",
      },
      {
        name: "Garv Jain",
        imagePath: "/images/Team/84.jpg",
      },
      {
        name: "Kishan Gupta",
        imagePath: "/images/Team/103.jpg",
      },
    ],
  },
  "Creatives, Design and Ambience": {
    heads: [
      {
        name: "Tejal Uplenchwar",
        phoneNumber: "8830291040",
        email: "me210003078@iiti.ac.in",
        linkedin: "https://www.linkedin.com/in/tejal-uplenchwar-a93a31226",
        imagePath: "/images/Team/4.jpg",
        title: "Head of Creatives",
      },
      {
        name: "Sarthak Agarwal",
        phoneNumber: "9984480146",
        email: "ce210004043@iiti.ac.in",
        linkedin: "https://www.linkedin.com/in/sarthak-agarwal-740b541a6",
        imagePath: "/images/Team/22.jpg",
        title: "Head of Creatives",
      },
      {
        name: "Hrishikesh Jawale",
        phoneNumber: "7020052382",
        email: "me220003038@iiti.ac.in",
        linkedin: "https://www.linkedin.com/in/hrishikesh-jawale-66199225a",
        imagePath: "/images/Team/0.jpg",
        title: "Head of Graphic Design",
      },
      {
        name: "Gauttam Mandan",
        phoneNumber: "9752249642",
        email: "mems220005022@iiti.ac.in",
        linkedin: "https://www.linkedin.com/in/gauttam-mandan-0a8a712b5",
        imagePath: "/images/Team/93.jpg",
        title: "Head of Ambience",
      },
    ],
    members: [
      {
        name: "Ruva Kacchia",
        imagePath: "/images/Team/51.jpg",
      },
      {
        name: "Priyash Patel",
        imagePath: "/images/Team/60.jpg",
      },
      {
        name: "Saket Jaiswal",
        imagePath: "/images/Team/64.jpg",
      },
      {
        name: "Samriddha Sirsant",
        imagePath: "/images/Team/98.jpg",
      },
      {
        name: "Himanshu",
        imagePath: "/images/Team/79.jpg",
      },
      {
        name: "Shivmuni Sarup",
        imagePath: "/images/Team/96.JPG",
      },
      {
        name: "Anurag Prasad",
        imagePath: "/images/Team/97.jpg",
      },
      {
        name: "Avani Ravindra Wanjari",
        imagePath: "/images/Team/99.jpg",
      },
      {
        name: "Darryl David",
        imagePath: "/images/Team/105.jpg",
      },
      {
        name: "Hilori Jain",
        imagePath: "/images/Team/95.jpg",
      },
    ],
  },
  Pronites: {
    heads: [
      {
        name: "Rohan Maji",
        phoneNumber: "9474867609",
        email: "ee220002070@iiti.ac.in",
        linkedin: "https://www.linkedin.com/in/rohan-maji-93053a249",
        imagePath: "/images/Team/2.JPG",
        title: "Head of Pronites",
      },
      {
        name: "Sahil Umale",
        phoneNumber: "9699464157",
        email: "me220003070@iiti.ac.in",
        linkedin: "https://www.linkedin.com/in/sahil-umale-03333025b/",
        imagePath: "/images/Team/3.jpg",
        title: "Head of Pronites",
      },
      {
        name: "Garima Sharma",
        phoneNumber: "6026987258",
        email: "ce220004018@iiti.ac.in",
        linkedin: "https://in.linkedin.com/in/garima-sharma-a6509825b",
        imagePath: "/images/Team/5.jpg",
        title: "Head of Pronites",
      },
      {
        name: "Kartik Khandelwal",
        phoneNumber: "8094743992",
        email: "ce220004022@iiti.ac.in",
        linkedin: "https://linkedin.com/in/kartik-khandelwal-3b8789213",
        imagePath: "/images/Team/18.jpg",
        title: "Head of Pronites",
      },
    ],
    members: [],
  },
  Events: {
    heads: [
      {
        name: "Madhav Rathore",
        phoneNumber: "7987199289",
        email: "mems220005034@iiti.ac.in",
        linkedin: "https://www.linkedin.com/in/madhav-rathore-8a42bb253",
        imagePath: "/images/Team/26.jpeg",
        title: "Head of Events",
      },
      {
        name: "Anubhuti Sharma",
        phoneNumber: "6350365964",
        email: "mems220005010@iiti.ac.in",
        linkedin: "https://in.linkedin.com/in/anubhuti-sharma-689733275",
        imagePath: "/images/Team/6.jpg",
        title: "Head of Events",
      },
      {
        name: "Khwab Gupta",
        phoneNumber: "8529879965",
        email: "me220003047@iiti.ac.in",
        linkedin: "https://in.linkedin.com/in/khwab-gupta",
        imagePath: "/images/Team/9.jpg",
        title: "Head of Events",
      },
      {
        name: "Agrim Jain",
        phoneNumber: "9811085456",
        email: "ce220004004@iiti.ac.in",
        linkedin: "https://www.linkedin.com/in/agrim-jain-a13258218",
        imagePath: "/images/Team/109.jpg",
        title: "Head of Events",
      },
    ],
    members: [],
  },
  Conclaves: {
    heads: [
      {
        name: "Rishit Mehrotra",
        phoneNumber: "8090004900",
        email: "ee220002069@iiti.ac.in",
        linkedin: "https://www.linkedin.com/in/rishit-mehrotra-637488250",
        imagePath: "/images/Team/27.jpg",
        title: "Head of Conclaves",
      },
      {
        name: "Satvik Desai",
        phoneNumber: "9924452549",
        email: "ee220002074@iiti.ac.in",
        linkedin: "https://in.linkedin.com/in/satvik-desai-b77a2524b",
        imagePath: "/images/Team/88.jpg",
        title: "Head of Conclaves",
      },
      {
        name: "Yash Yewale",
        phoneNumber: "9303182028",
        email: "me220003087@iiti.ac.in",
        linkedin: "https://www.linkedin.com/in/yash-yewale-29a453256",
        imagePath: "/images/Team/28.jpg",
        title: "Head of Conclaves",
      },
    ],
    members: [
      {
        name: "Advay Kunte",
        imagePath: "/images/Team/37.jpg",
      },
      {
        name: "Aishwarya Agrawal",
        imagePath: "/images/Team/62.jpg",
      },
    ],
  },
  Informals: {
    heads: [
      {
        name: "Pranjay Chouhan",
        phoneNumber: "8269690977",
        email: "cse220001059@iiti.ac.in",
        linkedin: "https://www.linkedin.com/in/pranjay-chouhan-687304171/",
        imagePath: "/images/Team/8.jpg",
        title: "Head of Informals",
      },
      {
        name: "Dushyant Chaudhari",
        phoneNumber: "9422223363",
        email: "me220003026@iiti.ac.in",
        linkedin: "https://www.linkedin.com/in/dushyant-chaudhari-775159257/",
        imagePath: "/images/Team/10.jpg",
        title: "Head of Informals",
      },
      {
        name: "Joreegala Nithisha",
        phoneNumber: "9014789494",
        email: "me220003043@iiti.ac.in",
        linkedin: "https://www.linkedin.com/in/nithisha-joreegala-4bb942290",
        imagePath: "/images/Team/12.jpg",
        title: "Head of Informals",
      },
    ],
    members: [],
  },
  Technicals: {
    heads: [
      {
        name: "Rohan Jha",
        email: "ee210002041@iiti.ac.in",
        phoneNumber: "9022566026",
        linkedin: "https://www.linkedin.com/in/rohan-jha-aa2177231/",
        imagePath: "/images/Team/1.jpeg",
        title: "Head of Technicals",
      },
      {
        name: "Ebrahim",
        email: "ee210002030@iiti.ac.in",
        phoneNumber: "9920702153",
        linkedin: "https://www.linkedin.com/in/ebrahim-rampurawala",
        imagePath: "/images/Team/19.jpg",
        title: "Head of Technicals",
      },
    ],
    members: [
      {
        name: "Ayush Sharma",
        imagePath: "/images/Team/40.jpg",
      },
    ],
  },
  "Video Production": {
    heads: [
      {
        name: "Harshit Gupta",
        phoneNumber: "9968685180",
        email: "mems220005026@iiti.ac.in",
        linkedin: "https://www.linkedin.com/in/harshit-gupta-184bb4255",
        imagePath: "/images/Team/7.jpg",
        title: "Head of Video Production",
      },
      {
        name: "Hrishikesh Hiremath",
        phoneNumber: "9449796245",
        email: "me220003037@iiti.ac.in",
        linkedin: "https://www.linkedin.com/in/hrishikesh-hiremath",
        imagePath: "/images/Team/15.jpg",
        title: "Head of Video Production",
      },
    ],
    members: [
      {
        name: "B. Dinesh",
        imagePath: "/images/Team/104.jpg",
      },
    ],
  },
  "Guest Relations": {
    heads: [
      {
        name: "Sanket Panigrahi",
        phoneNumber: "8093480243",
        email: "mems220005047@iiti.ac.in",
        linkedin: "https://www.linkedin.com/in/sanket-panigrahi-59011625b",
        imagePath: "/images/Team/14.jpg",
        title: "Head of Guest Relations",
      },
      {
        name: "Shivansh Malpani",
        phoneNumber: "9214092091",
        email: "mems220005048@iiti.ac.in",
        linkedin: "https://www.linkedin.com/in/shivansh-malpani-5a8374291",
        imagePath: "/images/Team/20.jpg",
        title: "Head of Guest Relations",
      },
    ],
    members: [],
  },
  Accommodation: {
    heads: [
      {
        name: "Saket Prashant Thamke",
        phoneNumber: "9321526377",
        email: "cse220001067@iiti.ac.in",
        linkedin: "https://www.linkedin.com/in/saket-thamke-10999325a/",
        imagePath: "/images/Team/107.jpg",
        title: "Head of Accommodation",
      },
      {
        name: "Prasoon Pandey",
        phoneNumber: "8604631501",
        email: "mems220005038@iiti.ac.in",
        linkedin: "https://www.linkedin.com/in/prasoon-pandey-b59953296",
        imagePath: "/images/Team/17.jpg",
        title: "Head of Accommodation",
      },
    ],
    members: [],
  },
  "Sales & Engagement": {
    heads: [
      {
        name: "Saral Sethi",
        email: "contactus.fluxus@iiti.ac.in",
        phoneNumber: "9111306423",
        linkedin: "https://in.linkedin.com/in/saral-sethi-b15400231",
        imagePath: "/images/Team/91.jpg",
        title: "Head of Sales and Engagement",
      },
    ],
    members: [],
  },
  "Operations & Logistics": {
    heads: [
      {
        name: "Sahil Yardi",
        phoneNumber: "7566669892",
        email: "me210003065@iiti.ac.in",
        linkedin: "https://in.linkedin.com/in/sahil-yardi-45390a235",
        imagePath: "/images/Team/112.jpg",
        title: "Head of Operations and Logistics",
      },
    ],
    members: [],
  },
  "Finance and Accounts": {
    heads: [
      {
        name: "Girish Jarwal",
        phoneNumber: "8269516962",
        email: "hofa.fluxus@iiti.ac.in",
        linkedin: "https://in.linkedin.com/in/girish-jarwal-330369231",
        imagePath: "/images/Team/16.jpg",
        title: "Head of Finance and Accounts",
      },
    ],
    members: [],
  },
  "Web and App Development": {
    heads: [
      {
        name: "Rupal Shah",
        phoneNumber: "9826293293",
        email: "ee210002065@iiti.ac.in",
        linkedin: "https://in.linkedin.com/in/rupal17shah",
        imagePath: "/images/Team/106.jpg",
        title: "Head of Web and App Development",
      },
      {
        name: "Krish Agrawal",
        phoneNumber: "7024401110",
        email: "cse210001034@iiti.ac.in",
        linkedin: "https://www.linkedin.com/in/krish-agrawal-472784146",
        imagePath: "/images/Team/101.jpg",
        title: "Head of Web and App Development",
      },
    ],
    members: [
      {
        name: "Pradeep Kumar Rebbavarapu",
        imagePath: "/images/Team/94.jpg",
      },
      {
        name: "Harsh Soni",
        imagePath: "/images/Team/86.jpg",
      },
      {
        name: "Tarun Balaji",
        imagePath: "/images/Team/100.jpg",
      },
      {
        name: "Arnav Jain",
        imagePath: "/images/Team/73.jpg",
      },
      {
        name: "Riddhi Chandekar",
        imagePath: "/images/Team/70.jpg",
      },
      // {
      //   name: "Siddharth Jain",
      //   imagePath: "/images/Day1/human.jpg",
      // },
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
