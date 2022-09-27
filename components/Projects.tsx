import Image from "next/image";
import blackjackImage from "../public/blackjack.png";
import biopageImage from "../public/biopage.png";
import homepageImage from "../public/homepage.png";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="mt-10 flex flex-col">
      <h1 className="font-medium text-3xl text-black dark:text-white">
        Projects
      </h1>
      <div className="mt-5 flex gap-5">
        <div style={{ position: "relative", width: "400px", height: "400px" }}>
          <Link href="https://portoliotest.vercel.app/">
            <Image
              alt={`Homepage`}
              src={homepageImage}
              layout="fill"
              objectFit="scale-down"
              quality={100}
            ></Image>
          </Link>
        </div>
        <div className="self-center">
          <Link href="https://portoliotest.vercel.app/">
            <h1>Homepage</h1>
          </Link>
          <p>Description</p>
          <Link href="https://github.com/Infiplaya/portoliotest">
            <a>Github</a>
          </Link>
        </div>
      </div>
      <div className="mt-5 flex gap-5">
        <div style={{ position: "relative", width: "400px", height: "400px" }}>
          <Link href="https://biopage-rho.vercel.app/">
            <Image
              alt={`Biopage`}
              src={biopageImage}
              layout="fill"
              objectFit="scale-down"
              quality={100}
            ></Image>
          </Link>
        </div>
        <div className="self-center">
          <Link href="https://biopage-rho.vercel.app/">
            <h1>Biopage</h1>
          </Link>
          <p>Description</p>
          <Link href="https://github.com/Infiplaya/biopage">
            <a>Github</a>
          </Link>
        </div>
      </div>
      <div className="mt-5 flex gap-5">
        <div style={{ position: "relative", width: "400px", height: "400px"}}>
          <Link href="https://blackjack-eobu.vercel.app/">
            <Image
              alt={`Blackjack`}
              src={blackjackImage}
              layout="fill"
              objectFit="scale-down"
              quality={100}
            ></Image>
          </Link>
        </div>
        <div className="self-center">
          <Link href="https://blackjack-eobu.vercel.app/">
            <h1>Blackjack game</h1>
          </Link>
          <p>Description</p>
          <Link href="https://github.com/Infiplaya/blackjack">
            <a>Github</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
