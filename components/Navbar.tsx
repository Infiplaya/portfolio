import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "next-themes";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <nav className="flex w-full items-center justify-evenly align-middle py-5 px-20 shadow dark:shadow-zinc-800">
        <ul
          className="flex w-full items-center justify-center gap-3 text-lg sm:text-xl font-mono font-semibold uppercase
            "
        >
          <Link href={`/`}>
            <li
              className={`cursor-pointer dark:text-orange-100  dark:hover:bg-zinc-800 hover:bg-gray-200 p-3 rounded-lg`}
            >
              Home
            </li>
          </Link>
          <Link href={`/projects`}>
            <li
              className={`cursor-pointer dark:text-orange-100  dark:hover:bg-zinc-800   hover:bg-gray-200 p-3 rounded-lg`}
            >
              Projects
            </li>
          </Link>
          <Link href={`https://pablitoblogito.vercel.app/`}>
            <li
              className={`cursor-pointer dark:text-orange-100  dark:hover:bg-zinc-800  hover:bg-gray-200 p-3 rounded-lg`}
            >
              Blog
            </li>
          </Link>
        </ul>
        <FontAwesomeIcon
          icon={theme === "dark" ? faSun : faMoon}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className={`border-gray-300 text-2xl ml-auto text-blue-600 dark:border-gray-700 dark:text-yellow-400`}
          role={`button`}
        />
      </nav>
    </div>
  );
}
