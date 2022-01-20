import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import s from "./Test/switcher.module.css";

const themes = [
  {
    title: "light Mode",
    name: "light",
  },
  {
    title: "dark Mode",
    name: "dark",
  },
];

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const currentIndex = Math.max(
    0,
    themes.findIndex((t) => t.name === theme)
  );

  const nextTheme = themes[(currentIndex + 1) % themes.length];
  const currentTheme = themes[currentIndex];

  return (
    <button
      onClick={() => setTheme(nextTheme.name)}
      aria-label={`Change theme to ${nextTheme.title}`}
      className={s.switcher}
    ></button>
  );
};

export default ThemeSwitch;
