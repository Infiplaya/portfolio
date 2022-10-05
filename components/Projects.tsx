import Image from "next/image";
import blackjackImage from "../public/blackjack.png";
import quizImage from "../public/quiz.png"
import homepageImage from "../public/homepage.png";
import Link from "next/link";
import portfolioImage from "../public/portfolio.png"

export default function Projects() {
  return (
    <div className="mt-10 flex flex-col gap-5">
      <h1 className="font-semibold text-3xl text-black dark:text-white tracking-wider">
        Projects
      </h1>
      <div className="mt-5 flex gap-10">
        <Link href="https://portoliotest.vercel.app/">
          <a className="w-1/2">
            <Image
              alt={`Homepage`}
              src={homepageImage}
              className="rounded brightness-75 hover:brightness-100 cursor-pointer"
              width={384}
              height={240}
            ></Image>
          </a>
        </Link>
        <div className="w-1/2 flex flex-col gap-5">
          <Link href="https://portoliotest.vercel.app/">
            <h1 className="cursor-pointer text-2xl font-semibold dark:text-blue-500 text-blue-700">
              Homepage
            </h1>
          </Link>
          <p className="mb-auto">Description</p>
          <Link href="https://github.com/Infiplaya/portoliotest">
            <a className="dark:text-blue-500 text-blue-700 dark:hover:text-blue-700 hover:text-blue-300">
              Github
            </a>
          </Link>
        </div>
      </div>
      <div className="mt-10 flex gap-10">
        <Link href="https://biopage-rho.vercel.app/">
          <a className="w-1/2">
            <Image
              alt={`Quiz`}
              src={quizImage}
              className="rounded brightness-75 hover:brightness-100 w-20 cursor-pointer"
              width={384}
              height={240}
            ></Image>
          </a>
        </Link>
        <div className="w-1/2 flex flex-col justify-between gap-4">
          <Link href="https://biopage-rho.vercel.app/">
            <h1 className="cursor-pointer text-2xl font-semibold dark:text-blue-500 text-blue-700">
              Trivia quiz
            </h1>
          </Link>
          <p className="mb-auto">Description</p>
          <Link href="https://github.com/Infiplaya/quizgame">
            <a className="dark:text-blue-500 text-blue-700 dark:hover:text-blue-700 hover:text-blue-300">
              Github
            </a>
          </Link>
        </div>
      </div>
      <div className="mt-10 flex gap-10">
        <Link href="https://portfolio-infiplaya.vercel.app/">
          <a className="w-1/2">
            <Image
              alt={`Portfolio`}v
              src={portfolioImage}
              className="rounded brightness-75 hover:brightness-100 cursor-pointer"
              width={384}
              height={240}
            ></Image>
          </a>
        </Link>
        <div className="w-1/2 flex flex-col">
          <Link href="https://portfolio-infiplaya.vercel.app/">
            <h1 className="cursor-pointer text-2xl font-semibold dark:text-blue-500 text-blue-700">
              Portfolio
            </h1>
          </Link>
          <p className="mb-auto">Description</p>
          <Link href="https://github.com/Infiplaya/portfolio">
            <a className="dark:text-blue-500 text-blue-700 dark:hover:text-blue-700 hover:text-blue-300">
              Github
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
