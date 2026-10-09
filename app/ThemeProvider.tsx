"use client";

import { useEffect, useState, type ReactNode } from "react";

type Theme = "morado" | "verde" | "azul" | "rosa";

const themes: { value: Theme; label: string }[] = [
  { value: "morado", label: "💜 Morado Calma" },
  { value: "verde", label: "💚 Verde Mentea" },
  { value: "azul", label: "💙 Azul Serenidad" },
  { value: "rosa", label: "🩷 Rosa Cálido" },
];

export default function ThemeProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("mentea-theme") as Theme | null;
    const validThemes: Theme[] = ["morado", "verde", "azul", "rosa"];

    const initial =
      saved && validThemes.includes(saved) ? saved : "morado";

    setTheme(initial);
    document.documentElement.setAttribute(
      "data-mentea-theme",
      initial
    );
  }, []);

  useEffect(() => {
    if (!theme) return;

    document.documentElement.setAttribute(
      "data-mentea-theme",
      theme
    );
    localStorage.setItem("mentea-theme", theme);
  }, [theme]);

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 10,
          right: 10,
          zIndex: 99999,
          padding: 8,
          borderRadius: 12,
          background: "white",
          boxShadow: "0 2px 12px #0002",
          fontSize: 13,
        }}
      >
        <label htmlFor="mentea-theme">Tema </label>
        <select
          id="mentea-theme"
          value={theme ?? "morado"}
          onChange={(event) =>
            setTheme(event.target.value as Theme)
          }
          style={{
            maxWidth: 145,
            padding: 6,
            borderRadius: 8,
            border: "1px solid #ddd",
            background: "white",
            color: "#30264a",
          }}
        >
          {themes.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </div>

      {children}
    </>
  );
}
