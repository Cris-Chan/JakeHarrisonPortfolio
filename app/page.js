import JakeCoin from "./components/jakeCoin";

export default function Home() {
  return (
    <main>
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
    </main>
  );
}
