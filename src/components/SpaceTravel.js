"use client";
// pages/index.js
import React, { useRef, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const SpaceTravel = () => {
  return (
    <div>
      <video
        loop
        muted
        autoPlay
        src="./videos/space-travel.mp4"
        controls
        className="w-full"
      />
    </div>
  );
};

export default SpaceTravel;
