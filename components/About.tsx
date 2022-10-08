import Link from "next/link";

export default function About() {
  return (
    <div>
      <h1 className="text-4xl dark:text-white text-black font-semibold  tracking-wider">
        Hello!
      </h1>
      <p className="mt-5 text-start leading-relaxed text-lg">
        {" "}
        I’m Paweł, a passionate amateur programmer who wants to learn as much as
        I can about web development and build cool apps! I’ve finished{" "}
        <Link
          href={`https://pll.harvard.edu/course/cs50-introduction-computer-science?delta=0`}
        >
          <a className="font-bold text-sky-500 hover:text-sky-600 ">CS50</a>
        </Link>{" "}
        - Harvard’s introductory course in computer science where I learned many
        interesting things about programming world, and did many hard but fun
        problems, and also{" "}
        <Link href={`https://cs50.harvard.edu/python/2022/`}>
          <a className="font-bold text-sky-500 hover:text-sky-600">CS50 Python</a>
        </Link>{" "}
        - Harvard’s introductory course for Python. I’m deeply interested in web
        development technologies such as{" "}
        <a className="font-bold underline decoration-yellow-300 decoration-4 underline-offset-4">
          JavaScript
        </a>
        ,{" "}
        <a className="font-bold underline decoration-sky-700 decoration-4 underline-offset-4">
          CSS
        </a>
        ,{" "}
        <a className="font-bold underline decoration-sky-500 decoration-4 underline-offset-4">
          React
        </a>
        ,{" "}
        <a className="font-bold underline decoration-indigo-500 decoration-4 underline-offset-4">
          NextJS
        </a>
        , and{" "}
        <a className="font-bold underline decoration-pink-500 decoration-4 underline-offset-4">
          tailwind CSS
        </a>
        , and using them to build fun websites and solve problems.
      </p>
      <p className="mt-5 text-left text-lg">
        {" "}
        Besides programming, I enjoy reading books, listening to my favorite
        music and meeting with my friends.
      </p>
      <p className="mt-3 text-lg">
        Contact me at{" "}
        <Link href="mailto:pawelsobaniec6@gmail.com">
          <a className="dark:text-blue-500 text-blue-700 dark:hover:text-blue-700 hover:text-blue-300">
            pawelsobaniec6@gmail.com
          </a>
        </Link>
      </p>
    </div>
  );
}
