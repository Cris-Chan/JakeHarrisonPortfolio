import BlobApple from "./components/blobApple";
import BlobEmail from "./components/blobEmail";
import BlobSpotify from "./components/blobSpotify";
import BlobYoutube from "./components/blobYoutube";
import JakeCoin from "./components/jakeCoin";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div style={{ position: "absolute", top: "12%", left: "12%" }}>
        <BlobSpotify />
      </div>
      <div style={{ position: "absolute", bottom: "12%", left: "12%" }}>
        <BlobApple />
      </div>
      <div style={{ position: "absolute", top: "12%", right: "12%" }}>
        <BlobYoutube />
      </div>
      <div style={{ position: "absolute", bottom: "12%", right: "12%" }}>
        <BlobEmail />
      </div>
      <div
        className="w-full flex h-full justify-center items-center "
        style={{
          height: "calc(100vh - 4rem)",
          borderLeft: "48px solid black",
          borderRight: "48px solid black",
          borderBottom: "48px solid black",
        }}
      >
        <video
          autoPlay
          loop
          muted
          style={{
            position: "absolute",
            width: "100%",
            left: "50%",
            top: "50%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: "-100",
          }}
        >
          <source src="/lava.mp4" type="video/mp4" />
        </video>
        <JakeCoin />
      </div>

      {/* info seciton */}

      <div
        className="flex my-20 flex-col lg:flex-row w-full justify-center items-center text-center lg:text-left"
        style={{ height: "calc(100vh - 8rem)" }}
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
    </main>
  );
}
