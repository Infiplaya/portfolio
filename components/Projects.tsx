import Image from "next/image";
import quizImage from "../public/quiz.png";
import foodappImage from "../public/foodapp.png";
import Link from "next/link";
import portfolioImage from "../public/profpic.png";

export default function Projects() {
  return (
    <div className="mt-10 flex flex-col gap-5">
      <h1 className="font-semibold text-3xl text-black dark:text-white tracking-wider">
        Projects
      </h1>
      <div className="mt-5 flex gap-10 ">
        <Link href="https://grabafood.vercel.app/">
          <a className="w-1/4">
            <Image
              alt={`GrabAFood`}
              src={foodappImage}
              className="rounded contrast-125 brightness-125 first-letter:cursor-pointer"
              width={384}
              height={240}
            ></Image>
          </a>
        </Link>
        <div className="w-1/2 flex flex-col align-middle justify-center">
          <Link href="https://grabafood.vercel.app/">
            <h1 className="cursor-pointer text-2xl font-semibold dark:text-blue-500 text-blue-700">
              Grab A Food
            </h1>
          </Link>
          <p>Web application that will help you try new food!</p>
          <Link href="https://github.com/Infiplaya/grabafood">
            <a className="dark:text-blue-500 text-blue-700 dark:hover:text-blue-700 hover:text-blue-300">
              Github
            </a>
          </Link>
        </div>
      </div>
      <div className="mt-10 flex gap-10">
        <Link href="https://quizgame-1xt4.vercel.app/">
          <a className="w-1/4">
            <Image
              alt={`Quiz`}
              src={quizImage}
              className="rounded contrast-125 brightness-125 w-20 cursor-pointer"
              width={384}
              height={240}
            ></Image>
          </a>
        </Link>
        <div className="w-1/2 flex flex-col align-middle justify-center">
          <Link href="https://quizgame-1xt4.vercel.app/">
            <h1 className="cursor-pointer text-2xl font-semibold dark:text-blue-500 text-blue-700">
              Trivia quiz
            </h1>
          </Link>
          <p>Interactive quiz, where you can test your knowledge</p>
          <Link href="https://github.com/Infiplaya/quizgame">
            <a className="dark:text-blue-500 text-blue-700 dark:hover:text-blue-700 hover:text-blue-300">
              Github
            </a>
          </Link>
        </div>
      </div>
      <div className="mt-10 flex gap-10">
        <Link href="https://portfolio-infiplaya.vercel.app/">
          <a className="w-1/4">
            <Image
              alt={`Portfolio`}
              src={portfolioImage}
              className="rounded brightness-125 w-20 cursor-pointer"
              width={384}
              height={240}
            ></Image>
          </a>
        </Link>
        <div className="w-1/2 flex flex-col align-middle justify-center">
          <Link href="https://portfolio-infiplaya.vercel.app/">
            <h1 className="cursor-pointer text-2xl font-semibold dark:text-blue-500 text-blue-700">
              Portfolio
            </h1>
          </Link>
          <p>This is where you are. Place where you can learn more about me.</p>
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
