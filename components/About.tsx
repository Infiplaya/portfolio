import Link from "next/link";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function About() {
  return (
    <div className="dark:text-gray-100 text-gray-800 mt-10 lg:mt-20 leading-relaxed">
      <h1 className="text-3xl font-bold tracking-wider">
        Hello!
      </h1>
      <article className="mt-5 prose-zinc prose-lg lg:prose-xl">
        {" "}
        I am Paweł, a self-taught programmer who wants to learn a lot
        about web development and build cool and beautiful stuff! I have studied
        cognitive science but discovered a true passion for programming and
        decided that the path is for me. Currently deeply interested in Web
        Development, especially the front end. Every day I improve my knowledge
        and skills by building projects and learning.
      </article>
      <article className="mt-5 prose-zinc  lg:prose-lg">
        {" "}
        Besides programming, just a guy who likes to read books, listen to my
        favorite music, and hang out with friends.
      </article>
      <div className="flex mt-10 w-20 gap-4 justify-center text-2xl mx-auto mb-10">
        <a href="mailto:pawelsobaniec6@gmail.com" >
          <FontAwesomeIcon icon={faEnvelope} role={`button`} className={`p-2 dark:hover:bg-zinc-800 hover:bg-gray-200 rounded-full`} />
        </a>

        <a href="https://github.com/Infiplaya" target={`_blank`}>
          <FontAwesomeIcon icon={faGithub} role={`button`} className={`p-2 dark:hover:bg-zinc-800 hover:bg-gray-200 rounded-full`}/>
        </a>
      </div>
    </div>
  );
}
