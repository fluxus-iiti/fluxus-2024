// pages/index.js
"use client";
import React from "react";
import { useRef } from "react";
import ImageTransition from "./ImageTransition";
import { FaPhone, FaEnvelope, FaFacebook, FaLinkedin } from "react-icons/fa";
const list = [
  {
    category: "Events & Competetions",
  },
  {
    category: "MARKETING",
  },
  {
    category: "Media & Publicity",
  },
  {
    category: "Show Management",
  },
  {
    category: "Finance",
  },
  {
    category: "Public Relations",
  },
  {
    category: "Security",
  },
  {
    category: "Design",
  },
  {
    category: "Web & App",
  },
  {
    category: "Festival Coordinators",
  },
];

const categoriesData = [
  {
    category: "Marketing",
    names: [
      "John Doe",
      "Jane Smith",
      "Mark Johnson",
      "Emily Davis",
      "Samuel Brown",
    ],
    id: "heading1",
    text: "Heading 1",
  },
  {
    category: "Finance",
    names: [
      "Alice Jones",
      "Bob White",
      "Eva Miller",
      "Charlie Wilson",
      "Olivia Taylor",
    ],
    id: "heading2",
    text: "Heading 2",
  },
  {
    category: "Events",
    names: [
      "David Moore",
      "Sophia Martin",
      "Jack Anderson",
      "Ava Thomas",
      "Mia Garcia",
    ],
    id: "heading3",
    text: "Heading 3",
  },
  {
    category: "Media",
    names: [
      "William Lee",
      "Grace Harris",
      "Daniel Davis",
      "Lily Johnson",
      // "Luke Brown",
    ],
    id: "heading4",
    text: "Heading 4",
  },
  {
    category: "Design",
    names: [
      "Oliver Smith",
      "Chloe Wilson",
      "Logan Anderson",
      "Zoe Taylor",
      "Noah Miller",
    ],
    id: "heading5",
    text: "Heading 5",
  },
];

const TeamPage = () => {
  const headingRefs = {
    heading1: useRef(null),
    heading2: useRef(null),
    heading3: useRef(null),
    heading4: useRef(null),
    heading5: useRef(null),
    // Add more refs for additional headings
  };

  const handleItemClick = (headingRef) => {
    headingRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="bg-fixed bg-black text-white bg-no-repeat bg-full w-full h-full pb-40">
      <div className="flex flex-wrap">
        {/* Left sidebar */}
        <div className="sticky top-8 h-screen pl-20 pt-20 w-1/4">
          <ul>
            {/* Replace the following list items with your actual data */}
            {categoriesData.map((item, index) => (
              <li
                key={item.id}
                className="mb-2 text-2xl font-semibold cursor-pointer focus:overline"
                onClick={() => handleItemClick(headingRefs[item.id])}
              >
                <button className="mb-2 text-2xl font-semibold py-3 cursor-pointer focus:underline">
                  {item.category}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Main content */}
        <div className="w-3/4">
          <h1 className="text-4xl font-bold my-4 mx-auto text-center">
            Core Team FLuxus'24
          </h1>
          <h2 className="text-2xl font-bold my-4 mx-auto text-center">
            Events & Competetions
          </h2>
          {categoriesData.map((item, index) => (
            <>
              <h2
                key={index}
                className="text-4xl font-bold pt-4 mx-auto text-center"
                ref={headingRefs[item.id]}
              >
                {item.category}
              </h2>
              <div key={index} className="flex flex-row flex-wrap p-8">
                {item.names.map((item, index) => (
                  <>
                    <div
                      key={index}
                      className=" p-4 mb-4 w-64 h-80 m-4 mx-auto "
                    >
                      <div className="relative group bg-[url('https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-6.jpg')]  bg-no-repeat bg-cover mb-2 h-64 w-64">
                        {/* Image */}
                        <img
                          src="https://tse1.mm.bing.net/th?id=OIP.YoYYMmk2c_ibXBp8yhcrEwHaHG&pid=Api&rs=1&c=1&qlt=95&w=115&h=111"
                          alt="Your Image"
                          className="w-full h-64 opacity-80 group-hover:opacity-0 transition-opacity duration-300"
                        />

                        {/* Hover Info */}
                        <div className="absolute w-full left-0 bottom-0 bg-gray-800 p-4 bg-opacity-50 text-white hidden group-hover:block text-center">
                          {/* Name */}
                          <h3 className="text-lg font-bold mb-2">{item}</h3>

                          {/* Icons */}
                          <div className="flex space-x-4 justify-center">
                            <a href="tel:+1234567890">
                              <FaPhone className="text-white hover:text-blue-500" />
                            </a>
                            <a href="mailto:john.doe@example.com">
                              <FaEnvelope className="text-white hover:text-blue-500" />
                            </a>
                            <a
                              href="https://www.facebook.com/johndoe"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <FaFacebook className="text-white hover:text-blue-500" />
                            </a>
                            <a
                              href="https://www.linkedin.com/in/johndoe"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <FaLinkedin className="text-white hover:text-blue-500" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
