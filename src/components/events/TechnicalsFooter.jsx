"use client";
import React from "react";
import { SocialIcon } from "react-social-icons/component";
import "react-social-icons/youtube";
import "react-social-icons/instagram";
import "react-social-icons/linkedin";
import "react-social-icons/email";
import "react-social-icons/whatsapp";
import { IoHome } from "react-icons/io5";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "../../../public/images/Footer/logo.png";

const TechnicalsFooter = () => {
  return (
    <>
      {/* Main Div */}
      <div className="flex  flex-col w-full bg-[url('/images/Footer/bg.png')] bg-top pt-8 bg-cover">
        {/* All Links */}
        {/* <hr style={{color: 'grey', backgroundColor: 'grey', borderTop: '1px solid grey'}}/> */}
        <div className="md:flex md:flex-row flex flex-col justify-center items-center md:justify-between px-32 text-center md:px-64 pt-32 pb-16 border-b-2 border-gray-500">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="md:w-[35%] flex flex-col items-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex justify-center  w-full"
            >
              <Image src={logo} className="w-48" alt="logo" />
            </motion.div>
            {/* <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex justify-center w-full text-4xl mt-5 font-bold"
              >
                Fluxus
              </motion.div> */}
            {/* <motion.div                 initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }} className="w-full mt-16 text-3xl">Made with 🍌 by Fluxus</motion.div> */}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="md:w-1/5 flex flex-col gap-y-2 lg:items-start"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-4xl mt-10 md:mt-auto"
            >
              Head of Technicals
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mt-6 text-3xl capitalize"
            >
              Ebrahim Rampurawala
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-3xl text-gray-400 capitalize"
            >
              <a href="tel:+919920702153" target="_blank">
                <SocialIcon
                  url="www.whatsapp.com"
                  bgColor="transparent"
                  fgColor="rgb(156 163 175)"
                  as="motion.div"
                  style={{ height: 30, width: 30 }}
                />
                +919920702153
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="md:w-1/5 flex flex-col gap-y-2 lg:items-start"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-4xl mt-10 md:mt-auto"
            >
              Head of Technicals
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mt-6 text-3xl capitalize"
            >
              Rohan Jha
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-3xl text-gray-400 capitalize"
            >
              <a href="tel:+919022566026" target="_blank">
                <SocialIcon
                  url="www.whatsapp.com"
                  bgColor="transparent"
                  fgColor="rgb(156 163 175)"
                  as="motion.div"
                  style={{ height: 30, width: 30 }}
                />
                +919022566026
              </a>
            </motion.div>
          </motion.div>
          {/* <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-1/5 flex flex-col gap-y-4"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-4xl"
            >
              Site
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-3xl mt-6 text-gray-400"
            >
              Home
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-3xl text-gray-400 capitalize"
            >
              About Us
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-3xl text-gray-400 capitalize"
            >
              Technicals
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-3xl text-gray-400 capitalize"
            >
              Culturals
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-3xl text-gray-400 capitalize"
            >
              Wow
            </motion.div>
          </motion.div> */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="md:w-1/5 flex flex-col gap-y-4 lg:items-start"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-4xl mt-10 md:mt-auto"
            >
              Contact Us
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-3xl mt-6 text-gray-400 flex flex-row"
            >
              <IoHome className=" w-44 mx-0" />
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-3xl text-left"
              >
                Indian Institute of Technology Indore, Khandwa Road, Simrol,
                Indore 453552,
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-3xl text-gray-400 capitalize"
            >
              <a href="tel:+919344446245" target="_blank">
                <SocialIcon
                  url="www.whatsapp.com"
                  bgColor="transparent"
                  fgColor="rgb(156 163 175)"
                  as="motion.div"
                  style={{ height: 30, width: 30 }}
                />
                +919344446245
              </a>
            </motion.div>
          </motion.div>
        </div>
        {/* Copyright */}
        <div className="w-full text-center text-2xl backdrop-blur-xl py-8">
          Made with ❤️ by Fluxus IIT Indore. © All rights reserved with Fluxus
          IIT Indore.
        </div>
      </div>
    </>
  );
};

export default TechnicalsFooter;
