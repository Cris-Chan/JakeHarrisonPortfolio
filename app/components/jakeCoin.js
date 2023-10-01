"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function JakeCoin() {
  return (
    <div>
      <div className="bg-black w-full h-full rounded-full relative p-2">
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div style={{ width: "350px", height: "350px" }}>
            <Image
              alt="jake harrison graphic"
              layout="responsive"
              width={500}
              height={500}
              src={"/jakeGif.gif"}
            />
          </div>
        </div>
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ ease: "linear", duration: 50, repeat: true }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
          }}
        >
          <Image
            alt="jake harrison graphic"
            width={500}
            height={500}
            src={"/jakeCircle.png"}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default JakeCoin;
