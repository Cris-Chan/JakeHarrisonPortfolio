"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function JakeCoin() {
  return (
    <div className="bg-black relative rounded-full w-64 h-64 sm:w-96 sm:h-96 flex justify-center items-center">
      <div className="absolute">
        <Image
          width={10}
          height={10}
          className="w-40 h-40 sm:w-64 sm:h-64"
          src={"/jakeGif.gif"}
        />
      </div>
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 90, repeat: Infinity }}
        className={"absolute"}
      >
        <Image
          style={{ padding: 15 }}
          width={500}
          height={500}
          src={"/jakeCircle.png"}
        />
      </motion.div>
    </div>
  );
}

export default JakeCoin;
