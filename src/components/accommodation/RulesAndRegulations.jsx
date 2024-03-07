"use client";
import React, { useEffect, useState } from "react";
const faqData = [
  {
    question: "Prohibited Items",
    answer:
      "Strict prohibition of alcohol, drugs, sharp objects, explosives, or any other deemed unsafe items inside the campus. Decisions by the Security and Fluxus team are final in case of disputes.",
  },
  {
    question: "Vehicle Regulations",
    answer:
      "No external vehicles will be allowed onto the campus during Fluxus 2024.",
  },
  {
    question: "Campus Decorum",
    answer:
      "Guests are expected to uphold the etiquette and cleanliness along with adhering to campus rules and regulations throughout their stay.",
  },
  {
    question: "Security Measures",
    answer:
      "Any items issued to guests must be returned in satisfactory condition during check-out.",
  },
  {
    question: "Accommodation Amenities",
    answer:
      "Double or triple occupancy rooms will be provided along with a mattress, pillow & hospitality kit each. Fluxus will not supply blankets or bedsheets. Guests are encouraged to arrange these items on their own, especially considering potential cooler temperatures at night.",
  },
  {
    question: "Compliance and Random Check",
    answer:
      "Random checks will be conducted to prevent unauthorized stays. Teams failing to produce accommodation receipts may face fines and disqualification.",
  },
  {
    question: "Entrance",
    answer:
      "Entry is exclusively through the 'Gate 1A' of IIT Indore; all other gates will remain closed.",
  },
  {
    question: "ID Requirements",
    answer:
      "Guests must carry valid government photo IDs at all times. Failure to produce an ID card will result in denial of entry during Fluxus 2024.",
  },
];
export default function RulesAndRegulations() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      <div className="container">
        <h2 className="font-bold text-5xl my-10">Rules and Regulations</h2>
        <div className="accordion " id="accordion">
          {faqData.map((item, index) => (
            <div className="accordion-item border-y-[1px]" key={index}>
              <button
                className={`accordion-button ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => toggleAccordion(index)}
              >
                <span className="flex justify-center !text-white !text-center font-bold !text-3xl">
                  {item.question}
                </span>
              </button>
              <div className="my-2 py-2 text-2xl mx-10">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>
        {`
          @import url("https://fonts.googleapis.com/css?family=Hind:300,400&display=swap");

          * {
            box-sizing: border-box;
          }
          *::before,
          *::after {
            box-sizing: border-box;
          }

          body {
            margin: 0;
            padding: 0;
            font-family: "Hind", sans-serif;
            background: #fff;
            color: #4d5974;
            display: flex;
            min-height: 100vh;
          }

          .show {
            opacity: 1;
            max-height: 9em; /* Adjust this value as needed */
            transition: all 200ms linear;
            will-change: opacity, max-height;
          }

          .container {
            margin: 0 auto;
            padding: 4rem;
            width: 100%;
            backdrop-filter: blur(10px);
          }

          .accordion .accordion-item button[aria-expanded="true"] {
            border-bottom: 1px solid #03b5d2;
            backdrop-filter: blur(10px);
            background: rgba(255, 255, 255, 0.2);
          }

          .accordion button {
            position: relative;
            display: block;
            text-align: left;
            width: 100%;
            padding: 1em 0;
            color: #7288a2;
            font-size: 1.15rem;
            font-weight: 400;
            border: none;
            background: none;
            outline: none;
          }

          .accordion button:hover,
          .accordion button:focus {
            cursor: pointer;
            color: #03b5d2;
          }

          .accordion button:hover::after,
          .accordion button:focus::after {
            cursor: pointer;
            color: #03b5d2;
            border: 1px solid #03b5d2;
          }

          .accordion button .accordion-title {
            padding: 1em 1.5em 1em 0;
          }

          .accordion button .icon {
            display: inline-block;
            position: absolute;
            top: 18px;
            right: 0;
            width: 22px;
            height: 22px;
            border: 1px solid;
            border-radius: 22px;
          }

          .accordion button .icon::before {
            display: block;
            position: absolute;
            content: "";
            top: 9px;
            left: 5px;
            width: 10px;
            height: 2px;
            background: currentColor;
          }
          .accordion button .icon::after {
            display: block;
            position: absolute;
            content: "";
            top: 5px;
            left: 9px;
            width: 2px;
            height: 10px;
            background: currentColor;
          }

          .accordion button[aria-expanded="true"] {
            color: #03b5d2;
          }
          .accordion button[aria-expanded="true"] .icon::after {
            width: 0;
          }
          .accordion button[aria-expanded="true"] + .accordion-content {
            opacity: 1;
            max-height: 9em;
            transition: all 200ms linear;
            will-change: opacity, max-height;
          }
          .accordion .accordion-content {
            opacity: 1;
            max-height: 0;
            overflow: hidden;
            transition: opacity 200ms linear, max-height 200ms linear;
            will-change: opacity, max-height;
          }
          .accordion .accordion-content p {
            font-size: 1rem;
            font-weight: 300;
            margin: 2em 0;
          }
        `}
      </style>
    </div>
  );
}
