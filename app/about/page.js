import Image from "next/image";
import React from "react";

function About() {
  return (
    <div>
      <div
        className="flex my-20 flex-col lg:flex-row w-full justify-center items-center text-center lg:text-left"
        style={{ height: "calc(100vh - 15rem)" }}
      >
        <div className="w-3/4 h-auto gap-10 flex flex-col lg:flex-row justify-center items-center space-x-4">
          <p className="w-full lg:w-1/3">
            Jake Harrison is an up-and-coming indie-pop artist from San Antonio,
            Texas. His music presents a unique blend of psychedelic and R&B
            influences and can be found on a variety of streaming platforms.
          </p>
          <div className="flex justify-center items-center w-full lg:w-1/3">
            <Image
              src={"/jake.jpg"}
              alt="Jake Harrison"
              width={350}
              height={350}
            />
          </div>
          <p className="w-full lg:w-1/3">
            More information about Jake Harrison and his music can be found
            here. Stay tuned for more updates and new releases.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
