import Image from "next/image";
import blackjackImage from "../public/blackjack.png";
import biopageImage from "../public/biopage.png";
import homepageImage from "../public/homepage.png";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="mt-10 flex flex-col justify-start">
      <h1 className="text-4xl text-black font-medium dark:text-white">
        Projects
      </h1>
      <div className="mt-7 flex flex-row gap-5">
        <div className="relative h-48 w-64">
          <Image
            src={homepageImage}
            alt="blackjack game"
            className="rounded"
            objectFit="contain"
            layout="fill"
          ></Image>
        </div>
        <div>
          <Link href="https://portoliotest-nsm60juag-infiplaya.vercel.app/">
            <h1 className="dark:text-blue-500 text-blue-700 text-3xl font-medium">
              Homepage
            </h1>
          </Link>
          <p className="mt-3">
            Homepage that I created for one of CS50 problem sets, using plain
            HTML, bootstrap and Javascript
          </p>
          <Link href="https://github.com/Infiplaya">
            <a className="dark:text-blue-500 text-blue-700 dark:hover:text-blue-500">
              Github
            </a>
          </Link>
        </div>
      </div>
      <div className="mt-7 flex flex-row gap-5">
      <div className="relative h-48 w-64">
          <Image
            src={biopageImage}
            alt="blackjack game"
            className="rounded"
            objectFit="contain"
            layout="fill"
          ></Image>
        </div>
        <div>
          <Link href="https://biopage-dnt5ghdr3-infiplaya.vercel.app/">
            <h1 className="dark:text-blue-500 text-blue-700 text-3xl font-medium">
              Biopage
            </h1>
          </Link>
          <p className="mt-3">
            Web bio created using simply HTML, CSS, JS i vanta.js for cool
            animated smoke
          </p>
          <Link href="https://github.com/Infiplaya">
            <a className="dark:text-blue-500 text-blue-700 dark:hover:text-blue-500">
              Github
            </a>
          </Link>
        </div>
      </div>
      <div className="mt-7 flex flex-row gap-5">
      <div className="relative h-48 w-64">
          <Image
            src={blackjackImage}
            alt="blackjack game"
            className="rounded"
            objectFit="contain"
            layout="fill"
          ></Image>
        </div>
        <div>
          <Link href="https://blackjack-eobu-5uxvxvjq8-infiplaya.vercel.app/">
            <h1 className="dark:text-blue-500 text-blue-700 text-3xl font-medium">
              Blackjack
            </h1>
          </Link>
          <p className="mt-3">
            Basic Blackjack game that I builded using JavaScript
          </p>
          <Link href="https://github.com/Infiplaya">
            <a className="dark:text-blue-500 text-blue-700 dark:hover:text-blue-500">
              Github
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
