import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <ul
        className="flex flex-row justify-center gap-3 mt-6 mb-6
            "
      >
        <Link href="https://github.com/Infiplaya">
          <li className="dark:hover:bg-black hover:bg-gray-400 rounded-xl p-2 mr-2 cursor-pointer">
            <a className="dark:text-blue-500 text-blue-700 ">Github</a>
          </li>
        </Link>
        <li className="dark:hover:bg-black rounded-xl p-2 mr-2 hover:bg-gray-400 cursor-pointer">
          <Link href="https://www.linkedin.com/in/pawe%C5%82-sobaniec-091077248/">
            <a className="dark:text-blue-500 text-blue-700">Linkedin</a>
          </Link>
        </li>
        <li className="dark:hover:bg-black rounded-xl p-2 mr-2 hover:bg-gray-400 cursor-pointer">
          <Link href="https://twitter.com/sobanpablo">
            <a className="dark:text-blue-500 text-blue-700">Twitter</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
