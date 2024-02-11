'use client'
import React, { useEffect, useState } from 'react'
const faqData = [
    {
        question: 'Why is the moon sometimes out during the day?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        question: 'Why is the sky blue?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        question: 'Will we ever discover aliens?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        question: 'How much does the Earth weigh?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        question: 'How do airplanes stay up?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
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
                <h2 className='font-bold text-5xl my-10'>Rules and Regulations</h2>
                <div className="accordion " id="accordion">
                    {faqData.map((item, index) => (
                        <div className="accordion-item" key={index}>
                            <button
                                className={`accordion-button ${activeIndex === index ? 'active' : ''}`}
                                onClick={() => toggleAccordion(index)}
                            >
                                
                                <span className="flex justify-center !text-white !text-center font-bold !text-3xl">{item.question}</span>
                                
                            </button>
                            <div className="my-2 py-2 text-2xl mx-10 border-y-[1px]">
                                <p>{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>
                {`
                    @import url('https://fonts.googleapis.com/css?family=Hind:300,400&display=swap');
                    
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
                      font-family: 'Hind', sans-serif;
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
                    }
                    
                    
                    
                    .accordion .accordion-item button[aria-expanded='true'] {
                      border-bottom: 1px solid #03b5d2;
                      
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
                      content: '';
                      top: 9px;
                      left: 5px;
                      width: 10px;
                      height: 2px;
                      background: currentColor;
                    }
                    .accordion button .icon::after {
                      display: block;
                      position: absolute;
                      content: '';
                      top: 5px;
                      left: 9px;
                      width: 2px;
                      height: 10px;
                      background: currentColor;
                    }
                    
                    .accordion button[aria-expanded='true'] {
                      color: #03b5d2;
                    }
                    .accordion button[aria-expanded='true'] .icon::after {
                      width: 0;
                    }
                    .accordion button[aria-expanded='true'] + .accordion-content {
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
    )
}
