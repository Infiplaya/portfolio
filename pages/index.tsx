import type { NextPage } from "next";
import Head from "next/head";
import ProfileImage from "../components/ProfileImage";
import Navbar from "../components/Navbar";
import About from "../components/About";
import { motion } from "framer-motion";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Paweł Sobaniec</title>
      </Head>
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
        <main className="flex flex-col lg:px-64 px-10 items-center mx-auto container h-screen">
          <ProfileImage />
          <section className="flex flex-col justify-start">
            <About />
          </section>
        </main>
      </motion.div>
    </>
  );
};

export default Home;
