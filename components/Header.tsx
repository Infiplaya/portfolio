import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

export default function Header() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <SunIcon
          className="w-7 h-7"
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <MoonIcon
          className="w-7 h-7"
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };
  return (
    <header className="flex justify-end m-5"><div className="m-5 dark:bg-zinc-600 px-3 py-2 rounded dark:hover:bg-zinc-400 bg-zinc-400 hover:bg-zinc-600">{renderThemeChanger()}</div></header>
  );
}
