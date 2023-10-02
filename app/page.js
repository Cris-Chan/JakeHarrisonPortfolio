import BlobApple from "./components/blobApple";
import BlobEmail from "./components/blobEmail";
import BlobSpotify from "./components/blobSpotify";
import BlobYoutube from "./components/blobYoutube";
import JakeCoin from "./components/jakeCoin";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div style={{ position: "absolute", top: "18%", left: "18%" }}>
        <BlobSpotify />
      </div>
      <div style={{ position: "absolute", bottom: "18%", left: "18%" }}>
        <BlobApple />
      </div>
      <div style={{ position: "absolute", top: "18%", right: "18%" }}>
        <BlobYoutube />
      </div>
      <div style={{ position: "absolute", bottom: "18%", right: "18%" }}>
        <BlobEmail />
      </div>
      <div
        style={{
          backgroundImage: "url(/jakeBackground.jpeg)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "calc(100vh - 8rem)",
        }}
        className="w-full flex h-full justify-center items-center "
      >
        <JakeCoin />
      </div>

      {/* info seciton */}

      <div
        className="flex my-20 flex-col md:flex-row w-full justify-center items-center text-center md:text-left"
        style={{ height: "calc(100vh - 8rem)" }}
      >
        <div className="w-3/4 h-auto gap-10 flex flex-col md:flex-row justify-center items-center space-x-4">
          <p className="w-full md:w-1/3">
            Jake Harrison is an up-and-coming indie-pop artist from San Antonio,
            Texas. His music presents a unique blend of psychedelic and R&B
            influences and can be found on a variety of streaming platforms.
          </p>
          <div className="flex justify-center items-center w-full md:w-1/3">
            <Image
              src="/jake.jpg"
              alt="Jake Harrison"
              width={350}
              height={350}
            />
          </div>
          <p className="w-full md:w-1/3">
            More information about Jake Harrison and his music can be found
            here. Stay tuned for more updates and new releases.
          </p>
        </div>
      </div>
    </main>
  );
}
