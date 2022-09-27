import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import ProfileImage from "../components/ProfileImage";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Projects from "../components/Projects";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Paweł Sobaniec</title>
      </Head>
      <Header />
      <main className="flex flex-col items-center">
        <ProfileImage />
        <h1 className="text-3xl text-center">Paweł Sobaniec</h1>
        <Navbar />
        <section className="flex flex-col justify-start m-5 max-w-sm sm:max-w-3xl">
          <About />
          <Projects />
          <p className="mt-10">
            See more things that I worked on at my{" "}
            <Link href="https://github.com/Infiplaya">
              <a className="text-blue-500 dark:text-blue-500 dark:hover:text-blue-700 hover:text-blue-300">GitHub profile</a>
            </Link>
          </p>
        </section>
      </main>
    </div>
  );
};

export default Home;
