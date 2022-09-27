import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <ul
        className="flex flex-row justify-center gap-3 mt-6 mb-6
            "
      >
        <li>
          <Link href="https://github.com/Infiplaya">
            <a className="dark:text-blue-500 text-blue-700 dark:hover:text-blue-700 hover:text-blue-300">
              Github
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://www.linkedin.com/in/pawe%C5%82-sobaniec-091077248/">
            <a className="dark:text-blue-500 text-blue-700 dark:hover:text-blue-700 hover:text-blue-300">
              Linkedin
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://twitter.com/sobanpablo">
            <a className="dark:text-blue-500 text-blue-700 dark:hover:text-blue-700 hover:text-blue-300">
              Twitter
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
