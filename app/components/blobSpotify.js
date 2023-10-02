"use client";
import Spline from "@splinetool/react-spline";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function BlobSpotify() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

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
          width={windowWidth < 912 ? 50 : 100}
          height={windowWidth < 912 ? 50 : 100}
          src={"/spotify.svg"}
        />
        {windowWidth < 912 ? (
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
