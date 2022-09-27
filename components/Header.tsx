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
        <button className="bg-zinc-600 p-2 rounded-md m-5">
          <SunIcon
            className="w-7 h-7"
            role="button"
            onClick={() => setTheme("light")}
          />
        </button>
      );
    } else {
      return (
        <button className="bg-zinc-400 p-2 rounded-md m-5">
          <MoonIcon
            className="w-7 h-7"
            role="button"
            onClick={() => setTheme("dark")}
          />
        </button>
      );
    }
  };
  return (
    <header className="flex justify-end m-5">{renderThemeChanger()}</header>
  );
}
