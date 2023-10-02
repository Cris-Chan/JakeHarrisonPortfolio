import Header from "./components/header";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jake Harrsion",
  description: "Music site for Jake Harrisions groovy and smooth tunes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <div style={{ position: "sticky", top: 0, zIndex: 1000 }}>
          <Header />
        </div>
        {children}
      </body>
    </html>
  );
}
