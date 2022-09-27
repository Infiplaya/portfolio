import Link from "next/link";

export default function About() {
  return (
    <div>
      <h1 className="text-4xl dark:text-white text-black font-medium">
        Hello!
      </h1>
      <p className="mt-5 text-left">
        {" "}
        I’m Paweł, a passionate amateur programmer who wants to learn as much as
        I can about web development and build cool apps! I’ve finished CS50 -
        Harvard’s introductory course in computer science where I learned many
        interesting things about programming world, and did many hard but fun
        problems, and also CS50 Python - Harvard’s introductory course for
        Python. I’m deeply interested in web development technologies such as
        JavaScript, CSS, React, NextJS, and tailwind CSS, and using them to
        build fun websites and solve problems.
      </p>
      <p className="mt-5 text-left">
        {" "}
        Besides programming, I enjoy reading books, listening to my favorite
        music and meeting with my friends.
      </p>
      <p className="mt-3">
        Contact me at{" "}
        <Link href="mailto:pawelsobaniec6@gmail.com">
          <a className="dark:text-blue-500 text-blue-700">
            pawelsobaniec6@gmail.com
          </a>
        </Link>
      </p>
    </div>
  );
}
