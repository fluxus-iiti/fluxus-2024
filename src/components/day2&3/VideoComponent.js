"use client";
// pages/index.js
import React, { useRef, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import SpiralGalaxy from "@/components/SpiralGalaxy";
import SpaceTravel from "@/components/SpaceTravel";

const VideoComponent = () => {
  return (
    <div>
      <SpiralGalaxy />
      <SpaceTravel />
    </div>
  );
};

export default VideoComponent;
