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
      <div className="mt-10 flex gap-5">
        <Link href="https://portoliotest.vercel.app/">
          <Image
            alt={`Homepage`}
            src={homepageImage}
            className="rounded brightness-75 hover:brightness-100 cursor-pointer"
            width={384}
            height={240}
          ></Image>
        </Link>

        <div className="flex flex-col gap-4">
          <Link href="https://portoliotest.vercel.app/">
            <h1 className="cursor-pointer text-3xl font-semibold dark:text-blue-500 text-blue-700 dark:hover:text-blue-700 hover:text-blue-300">
              Homepage
            </h1>
          </Link>
          <p>Description</p>
          <Link href="https://github.com/Infiplaya/portoliotest">
            <a className="dark:text-blue-500 text-blue-700 dark:hover:text-blue-700 hover:text-blue-300">
              Github
            </a>
          </Link>
        </div>
      </div>
      <div className="mt-10 flex gap-5">
        <Link href="https://biopage-rho.vercel.app/">
          <Image
            alt={`Biopage`}
            src={biopageImage}
            className="rounded brightness-75 hover:brightness-100 cursor-pointer"
            width={384}
            height={240}
          ></Image>
        </Link>

        <div className="flex flex-col gap-4">
          <Link href="https://biopage-rho.vercel.app/">
            <h1 className="cursor-pointer text-3xl font-semibold dark:text-blue-500 text-blue-700 dark:hover:text-blue-700 hover:text-blue-300">
              Biopage
            </h1>
          </Link>
          <p>Description</p>
          <Link href="https://github.com/Infiplaya/biopage">
            <a className="dark:text-blue-500 text-blue-700 dark:hover:text-blue-700 hover:text-blue-300">
              Github
            </a>
          </Link>
        </div>
      </div>
      <div className="mt-10 flex gap-5">
        <Link href="https://blackjack-eobu.vercel.app/">
          <Image
            alt={`Blackjack`}
            src={blackjackImage}
            className="rounded brightness-75 hover:brightness-100 cursor-pointer"
            width={384}
            height={240}
          ></Image>
        </Link>
        <div className="flex flex-col gap-4">
          <Link href="https://blackjack-eobu.vercel.app/">
            <h1 className="cursor-pointer text-3xl font-semibold dark:text-blue-500 text-blue-700 dark:hover:text-blue-700 hover:text-blue-300">
              Blackjack game
            </h1>
          </Link>
          <p>Description</p>
          <Link href="https://github.com/Infiplaya/blackjack">
            <a className="dark:text-blue-500 text-blue-700 dark:hover:text-blue-700 hover:text-blue-300">
              Github
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
