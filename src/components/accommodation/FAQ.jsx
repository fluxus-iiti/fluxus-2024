"use client";
import React, { useEffect, useState } from "react";
const faqData = [
  {
    question: "How to book accommodation at Fluxus?",
    answer:
      "To book your accommodation at Fluxus you have to fill the form above and get in touch with the accommodation team through call or whatsapp. The contact details are present in the booking section of the website and instagram on Fluxus page. The booking will be confirmed after the completion of payment.",
  },
  {
    question: "When will my accommodation be confirmed?",
    answer:
      "After the completion of the payment for accommodation you will be provided with a ticket to confirm your booking.",
  },
  {
    question: "Does the accommodation fee include the food facility as well?",
    answer:
      "No, the accommodation fee does not include food. However, there will be food stalls operational during Fluxus in the IIT Indore campus to cater to the food requirements.",
  },
  {
    question: "Who all are eligible for accommodation during Fluxus?",
    answer:
      "All the participants and the attendees coming for Fluxus are eligible to avail accommodation facility. The accommodation facility is for a team/contingent as well as for individual participants and attendees.",
  },
  {
    question: "What all does the accommodation facilities include?",
    answer:
      "The accommodation fee includes stay in the IIT Indore campus during Fluxus, mattress, pillow and hospitality kits.",
  },
  {
    question: "What is the procedure to be followed after we reach IIT Indore?",
    answer:
      "After reaching the IIT Indore campus, you need to come to the accommodation desk, HJB Hall of Residence along with an identity card. You will be allotted your place to stay on campus after confirming the booking. Accommodation would be strictly on a shared basis.",
  },
  {
    question: "What is the refund policy??",
    answer:
      "Once the Payment is done, there is no cancellation policy.",
  },
];
export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      <div className="container">
        <h2 className="font-bold text-5xl my-10">Frequently Asked Questions</h2>
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
