import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const themes = [
  {
    title: "Light Mode",
    name: "light",
  },
  {
    title: "Pink Mode",
    name: "pink",
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
      className="cursor-pointer"
      onClick={() => setTheme(nextTheme.name)}
      aria-label={`Change theme to ${nextTheme.title}`}
    >
      <div
        aria-label={currentTheme.title}
        className="text-uppercase"
        style={{ color: "inherit" }}
      >
        {currentTheme.title}
      </div>
    </button>
  );
};

export default ThemeSwitch;
