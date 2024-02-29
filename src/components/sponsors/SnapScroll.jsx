import Card from "./Card";

const SponsorData_0 = [
  {
    id: "0",
    company: "Cosanostra",
    title: "Festival Partner",
    image: require("../../../public/images/sponsor/0.png"),
  },
  {
    id: "00",
    company: "Creative Torrent Events & Promotions",
    title: "Artist Management Partner",
    image: require("../../../public/images/sponsor/01.png"),
  },
];

const SponsorData0 = [
  {
    id: "1",
    company: "NHAI",
    title: "Platinum Partner ",
    image: require("../../../public/images/sponsor/1.png"),
  },
  {
    id: "1_22",
    company: "NHAI",
    title: "Platinum Partner ",
    image: require("../../../public/images/sponsor/1_@.png"),
  },
];

const SponsorData1 = [
  {
    id: "2",
    company: "Metro Shoes ",
    title: "Styled By Partner",
    image: require("../../../public/images/sponsor/2.png"),
  },
  {
    id: "3",
    company: "Suzuki",
    title: "Motorcycle Partner",
    image: require("../../../public/images/sponsor/3.png"),
  },
];

const SponsorData2 = [
  {
    id: "4",
    company: "Dabur ",
    title: "Ayurveda Partner ",
    image: require("../../../public/images/sponsor/4.png"),
  },
  {
    id: "5",
    company: "Adriot Associates ",
    title: "Water Technology Partner",
    image: require("../../../public/images/sponsor/5.png"),
  },
];

const SponsorData3 = [
  {
    id: "6",
    company: "Prestige",
    title: "ConsultX Partner",
    image: require("../../../public/images/sponsor/6.png"),
  },
  {
    id: "7",
    company: "Tata Steel ",
    title: "Steel Partner ",
    image: require("../../../public/images/sponsor/7.png"),
  },
];
const SponsorData4 = [
  {
    id: "9",
    company: "Supergrads",
    title: "Education Partner ",
    image: require("../../../public/images/sponsor/9.png"),
  },
  {
    id: "10",
    company: "KSG",
    title: "Official UPSC Partner",
    image: require("../../../public/images/sponsor/10.jpeg"),
  },
];
const SponsorData5 = [
  {
    id: "11",
    company: "Spykar",
    title: "Style Partner",
    image: require("../../../public/images/sponsor/11.png"),
  },
  {
    id: "12",
    company: "EaseMyTrip",
    title: "Travel Partner",
    image: require("../../../public/images/sponsor/12.png"),
  },
];
const SponsorData6 = [
  {
    id: "13",
    company: "JioSaavn",
    title: "Music Streaming Partner ",
    image: require("../../../public/images/sponsor/13.png"),
  },
  {
    id: "14",
    company: "RedFM",
    title: "Radio Partner",
    image: require("../../../public/images/sponsor/14.png"),
  },
];

const SponsorData7 = [
  {
    id: "15",
    company: "Indori Events",
    title: "Event Partner",
    image: require("../../../public/images/sponsor/15.png"),
  },
  {
    id: "16",
    company: "GDIOT",
    title: "Technical Partner",
    image: require("../../../public/images/sponsor/16.png"),
  },
];

const SponsorData8 = [
  {
    id: "17",
    company: "Entellus Events & Photography",
    title: "Photography Partner",
    image: require("../../../public/images/sponsor/17.png"),
  },
];

export default function SnapScroll() {
  return (
    <div className="pb-8 ">
      <div className="support-scrollsnap"></div>

      <div className="scroll-container">
        <div className="scroll-area !flex-wrap !md:py-20 !py-10">
          {SponsorData_0.map((ele, index) => {
            return (
              <div key={index}>
                <Card ele={ele} />
              </div>
            );
          })}
        </div>
        <div className="scroll-area !flex-wrap !md:py-20 !py-10">
          {SponsorData0.map((ele, index) => {
            return (
              <div key={index}>
                <Card ele={ele} />
              </div>
            );
          })}
        </div>
        <div className="scroll-area !flex-wrap !md:py-20 !py-10">
          {SponsorData1.map((ele, index) => {
            return (
              <div key={index}>
                <Card ele={ele} />
              </div>
            );
          })}
        </div>
        <div className="scroll-area !flex-wrap !md:py-20 !py-10">
          {SponsorData2.map((ele, index) => {
            return (
              <div key={index}>
                <Card ele={ele} />
              </div>
            );
          })}
        </div>
        <div className="scroll-area !flex-wrap !md:py-20 !py-10">
          {SponsorData3.map((ele, index) => {
            return (
              <div key={index}>
                <Card ele={ele} />
              </div>
            );
          })}
        </div>
        <div className="scroll-area !flex-wrap !md:py-20 !py-10">
          {SponsorData4.map((ele, index) => {
            return (
              <div key={index}>
                <Card ele={ele} />
              </div>
            );
          })}
        </div>
        <div className="scroll-area !flex-wrap !md:py-20 !py-10">
          {SponsorData5.map((ele, index) => {
            return (
              <div key={index}>
                <Card ele={ele} />
              </div>
            );
          })}
        </div>
        <div className="scroll-area !flex-wrap !md:py-20 !py-10">
          {SponsorData6.map((ele, index) => {
            return (
              <div key={index}>
                <Card ele={ele} />
              </div>
            );
          })}
        </div>
        <div className="scroll-area !flex-wrap !md:py-20 !py-10">
          {SponsorData7.map((ele, index) => {
            return (
              <div key={index}>
                <Card ele={ele} />
              </div>
            );
          })}
        </div>
        <div className="scroll-area !flex-wrap !md:py-20 !py-10">
          {SponsorData8.map((ele, index) => {
            return (
              <div key={index}>
                <Card ele={ele} />
              </div>
            );
          })}
        </div>
      </div>
      <style jsx>
        {`
          html {
            background: transparent;
          }

          .scroll-container,
          .scroll-area {
            max-width: 100%;
            height: 70vh;
            font-size: 15px;
          }

          .scroll-container {
            overflow: auto;
            -webkit-overflow-scrolling: touch; /* Enable smooth scrolling on iOS devices */
            -ms-overflow-style: none; /* Hide scrollbar for Internet Explorer */
            scrollbar-width: none; /* Hide scrollbar for Firefox */
            -webkit-scroll-snap-type: y mandatory;
            -ms-scroll-snap-type: y mandatory;
            scroll-snap-type: y mandatory;
          }

          .scroll-area {
            scroll-snap-align: start;
          }

          .scroll-container,
          .scroll-area {
            margin: 0 auto;
          }

          .scroll-area {
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
          }

          .scroll-area:nth-of-type(1),
          .scroll-area:nth-of-type(2),
          .scroll-area:nth-of-type(3),
          .scroll-area:nth-of-type(4) {
            background: transparent;
          }

          /* Hide scrollbar for WebKit (Chrome, Safari, etc.) */
          .scroll-container::-webkit-scrollbar {
          }

          /* Hide scrollbar for Firefox */
          .scroll-container {
            scrollbar-width: none;
          }
        `}
      </style>
    </div>
  );
}
