import { useEffect, useState } from "react";

type Mode = "auto" | "dark" | "light";

function getInitialMode(): Mode {
  const stored = localStorage.getItem("theme");
  return stored === "dark" || stored === "light" ? stored : "auto";
}

function systemTheme(): "dark" | "light" {
  return matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

export default function ThemeToggle() {
  const [mode, setMode] = useState<Mode>(getInitialMode);

  useEffect(() => {
    if (mode === "auto") {
      localStorage.removeItem("theme");
      document.documentElement.dataset.theme = systemTheme();

      const mq = matchMedia("(prefers-color-scheme: light)");
      const onChange = () => {
        document.documentElement.dataset.theme = systemTheme();
      };
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    }

    document.documentElement.dataset.theme = mode;
    localStorage.setItem("theme", mode);
  }, [mode]);

  return (
    <div className="theme-toggle mono" role="group" aria-label="Theme">
      <button type="button" className={mode === "auto" ? "is-active" : ""} aria-pressed={mode === "auto"} onClick={() => setMode("auto")}>
        AUTO
      </button>
      <button type="button" className={mode === "dark" ? "is-active" : ""} aria-pressed={mode === "dark"} onClick={() => setMode("dark")}>
        DARK
      </button>
      <button type="button" className={mode === "light" ? "is-active" : ""} aria-pressed={mode === "light"} onClick={() => setMode("light")}>
        LIGHT
      </button>
    </div>
  );
}
