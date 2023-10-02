"use client";
import Spline from "@splinetool/react-spline";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function BlobSpotify() {
  return (
    <motion.div
      whileHover={{ scale: 1.06 }}
      transition={{ type: "spring" }}
      className="flex justify-center items-center z-[100]"
    >
      <motion.div
        initial={{ x: -1000, y: -1000 }}
        animate={{ x: 0, y: 0 }}
        transition={{ duration: 4, type: "spring" }}
      >
        <Image
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 100,
          }}
          width={100}
          height={100}
          src={"/spotify.svg"}
        />
        <Spline
          style={{
            width: 220,
            height: 220,
            position: "relative",
          }}
          scene="https://prod.spline.design/hDjxx1oTdLPCwtbG/scene.splinecode"
        />
      </motion.div>
    </motion.div>
  );
}

export default BlobSpotify;
