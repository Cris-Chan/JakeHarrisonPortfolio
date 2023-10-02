import BlobApple from "./components/blobApple";
import BlobEmail from "./components/blobEmail";
import BlobSpotify from "./components/blobSpotify";
import BlobYoutube from "./components/blobYoutube";
import JakeCoin from "./components/jakeCoin";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div
        className="w-full flex h-full justify-center items-center "
        style={{
          height: "calc(100vh - 16rem)",
          borderLeft: "48px solid black",
          borderRight: "48px solid black",
          borderBottom: "48px solid black",
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline // This attribute prevents fullscreen playback on mobile devices
          style={{
            position: "absolute",
            width: "100%",
            left: "50%",
            top: "50%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: "-100",
            pointerEvents: "none", // This attribute makes the video non-clickable
          }}
        >
          <source src="/lava.mp4" type="video/mp4" />
        </video>
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
        <JakeCoin />
      </div>
    </main>
  );
}
