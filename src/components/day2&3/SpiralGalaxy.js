"use client";
// pages/index.js
import React, { useRef, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const SpiralGalaxy = () => {
  return (
    <div>
      <video
        loop
        muted
        autoPlay
        src="./videos/spiral-galaxy.mp4"
        controls
        className="w-full"
      />
    </div>
  );
};

export default SpiralGalaxy;
