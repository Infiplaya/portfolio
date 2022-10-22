import type { NextPage } from "next";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Image from "next/future/image";
import lostknight from "../public/lostknight.png";
import cryptosito from "../public/cryptosito.png";
import grabafood from "../public/grabafood.png";
import portfolio from "../public/portfolio.png";

const Projects: NextPage = () => {
  return (
    <>
      <motion.div
        className="box"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <Navbar />
        <div className="w-full md:container md:mt-10 mx-auto flex flex-col p-5 lg:px-64 text-gray-800 dark:text-gray-200">
          <h1 className="text-3xl font-bold">My work</h1>
          <div className="mt-5 flex flex-col gap-20 w-full">
            <a href={`https://cryptosito.vercel.app/`} target={`_blank`}>
              <div>
                <Image
                  src={cryptosito}
                  alt={`cryptosito`}
                  className={`object-cover object-left-top rounded-lg h-96 shadow-md`}
                ></Image>
                <h3 className="mt-5 font-bold text-xl">Cryptosito</h3>
                <p className="mt-2 text-left dark:text-gray-200">
                  I&apos;m currently working on it. It will be a cryptocurrency
                  market, something like CoinMarketCap. I&apos;m using Coingecko
                  API to fetch data for my platform, including the list of the
                  100 most popular cryptos, trending cryptos, and additional
                  information about the market. I use React.js, Next.js, TRPC,
                  Next Auth, and Prisma for this project. It will be the biggest
                  thing I&apos;ve done yet.
                </p>
              </div>
            </a>

            <a href={`https://grabafood.vercel.app/`} target={`_blank`}>
              <div>
                <Image
                  src={grabafood}
                  alt={`grabafood`}
                  className={`object-cover object-left rounded-lg h-96 shadow-md`}
                ></Image>
                <h3 className="mt-5 font-bold text-xl">Grab a Food</h3>
                <p className="mt-2 text-left dark:text-gray-200">
                  A web application that helps you find a recipe for a dish.
                  Created using React, NextJS, NextAuth, and Typescript and
                  styled with tailwind CSS. Uses API from Spoonacular food API,
                  next auth enable to log in with Google. A lot to improve, but
                  the main idea is there. Try it out!
                </p>
              </div>
            </a>

            <a
              href={`https://www.youtube.com/watch?v=9TwwR-VbXLI`}
              target={`_blank`}
            >
              <div>
                <Image
                  src={lostknight}
                  alt={`lostknight`}
                  className={`object-cover object-left-top md:object-bottom rounded-lg h-96 shadow-md`}
                ></Image>
                <h3 className="mt-5 font-bold text-xl">Lost Knight</h3>
                <p className="mt-2 text-left dark:text-gray-200">
                  Demo of the platformer game created with LUA framework LÖVE. I
                  was curious about how the games were made so I decided to make
                  this one! It&apos;s not a completed work, but a cool demo that
                  shows some mechanics of the gameplay. In my github, you should
                  find a link to a video about it. The final project for CS50x
                </p>
              </div>
            </a>
            <a
              href={`https://psobaniec.vercel.app/`}
              target={`_blank`}
            >
              <div>
                <Image
                  src={portfolio}
                  alt={`portfolio`}
                  className={`object-cover h-96 rounded-lg shadow-md`}
                ></Image>
                <h3 className="mt-5 font-bold text-xl">Personal portfolio</h3>
                <p className="mt-2 text-left dark:text-gray-200">
                  You are looking at it right now!
                  After grasping the basics of React and learning about NextJS,
                  I decided to create a personal page where I would post my
                  description so that people could get to know me and my
                  projects.
                </p>
              </div>
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Projects;
