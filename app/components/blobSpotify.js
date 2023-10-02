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
      className="flex justify-center items-center"
    >
      <motion.div
        initial={{ x: -1000 }}
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
          width={window.innerWidth < 912 ? 50 : 100}
          height={window.innerWidth < 912 ? 50 : 100}
          src={"/Spotify.svg"}
        />
        {typeof window !== "undefined" && window.innerWidth < 912 ? (
          <Spline
            style={{
              width: 120,
              height: 120,
              position: "relative",
            }}
            scene="https://prod.spline.design/XmC3HKYdLO4CjRAD/scene.splinecode"
          />
        ) : (
          <Spline
            style={{
              width: 220,
              height: 220,
              position: "relative",
            }}
            scene="https://prod.spline.design/kGkerseyFeaxBg7f/scene.splinecode"
          />
        )}
      </motion.div>
    </motion.div>
  );
}

export default BlobSpotify;
