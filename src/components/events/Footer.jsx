"use client";
import React from "react";
import { SocialIcon } from "react-social-icons/component";
import "react-social-icons/twitter";
import "react-social-icons/youtube";
import "react-social-icons/instagram";
import "react-social-icons/linkedin";
import "react-social-icons/email";
import { IoHome } from "react-icons/io5";
import { motion } from "framer-motion";

const Technicals = () => {
  return (
    <>
      {/* Main Div */}
      <div className="flex flex-col w-full bg-[url('/images/Footer/bg.png')] bg-top pt-8 bg-cover">
        {/* All Links */}
        <div className="flex flex-row justify-between px-64 py-32 border-b-2 border-gray-500">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-[35%] flex flex-col items-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="w-48 h-48 bg-[url('/images/Footer/logo.png')] bg-contain bg-no-repeat"
            ></motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-white text-4xl uppercase mt-8"
            >
              fluxus- iit indore: a celestial euphoria
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="w-full mt-8 text-3xl text-gray-400"
            >
              &quot;Central India&apos;s Biggest and Most Anticipated Event&quot;
            </motion.div>
            {/* <motion.div                 initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }} className="w-full mt-16 text-3xl">Made with 🍌 by Fluxus</motion.div> */}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-1/5 flex flex-col gap-y-2"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-4xl"
            >
              Socials
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mt-6 text-3xl text-gray-400"
            >
              <SocialIcon
                url="www.twitter.com"
                bgColor="transparent"
                fgColor="rgb(156 163 175)"
                as="motion.div"
                style={{ height: 30, width: 30 }}
              />
              Twitter
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-3xl text-gray-400 capitalize"
            >
              <SocialIcon
                url="www.youtube.com"
                bgColor="transparent"
                fgColor="rgb(156 163 175)"
                as="motion.div"
                style={{ height: 30, width: 30 }}
              />
              Youtube
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-3xl text-gray-400 capitalize"
            >
              <SocialIcon
                url="www.instagram.com"
                bgColor="transparent"
                fgColor="rgb(156 163 175)"
                as="motion.div"
                style={{ height: 30, width: 30 }}
              />
              Instagram
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-3xl text-gray-400 capitalize"
            >
              <SocialIcon
                url="www.linkedin.com"
                bgColor="transparent"
                fgColor="rgb(156 163 175)"
                as="motion.div"
                style={{ height: 30, width: 30 }}
              />
              linkedin
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-3xl text-gray-400 capitalize"
            >
              <SocialIcon
                url="www.email.com"
                bgColor="transparent"
                fgColor="rgb(156 163 175)"
                as="motion.div"
                style={{ height: 30, width: 30 }}
              />
              email
            </motion.div>
          </motion.div>
          <motion.div
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
          </motion.div>
          <motion.div
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
              Contact Us
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-3xl mt-6 text-gray-400 flex flex-row"
            >
              <IoHome className=" w-44" />
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-3xl "
              >
                Indian Institute of Technology Indore, Khandwa Road, Simrol,
                Indore 453552,
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-3xl text-gray-400"
            >
              <SocialIcon
                url="www.email.com"
                bgColor="transparent"
                fgColor="rgb(156 163 175)"
                as="motion.div"
                style={{ height: 30, width: 30 }}
              />
              fluxus@iiti.ac.in
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

export default Technicals;
