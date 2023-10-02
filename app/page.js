import BlobApple from "./components/blobApple";
import BlobEmail from "./components/blobEmail";
import BlobSpotify from "./components/blobSpotify";
import BlobYoutube from "./components/blobYoutube";
import JakeCoin from "./components/jakeCoin";

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
      <div className="flex flex-row w-full h-auto p-96 bg-slate-600 justify-between items-center">
        <p className="w-1/3 text-left">
          Jake Harrison is an up-and-coming indie-pop artist from San Antonio,
          Texas. His music presents a unique blend of psychedelic and R&B
          influences and can be found on a variety of streaming platforms.
        </p>
        <img
          className="w-1/3"
          src="path_to_your_image.jpg"
          alt="Jake Harrison"
        />
        <p className="w-1/3 text-right">
          More information about Jake Harrison and his music can be found here.
          Stay tuned for more updates and new releases.
        </p>
      </div>
    </main>
  );
}
