"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function SettingsPage() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8">
      <div className="text-9xl">😊</div>

      <div className="text-center">
        <h2 className="text-2xl font-bold mb-6">Theme Settings</h2>
        <p className="text-lg mb-6 text-gray-600 dark:text-gray-400">
          Current theme: <span className="font-semibold capitalize">{theme}</span>
        </p>

        <div className="flex gap-4 justify-center">
          <button
            onClick={() => setTheme("light")}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              theme === "light"
                ? "bg-black text-white dark:bg-white dark:text-black"
                : "bg-gray-200 text-black dark:bg-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600"
            }`}
          >
            ☀️ Light
          </button>

          <button
            onClick={() => setTheme("dark")}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              theme === "dark"
                ? "bg-black text-white dark:bg-white dark:text-black"
                : "bg-gray-200 text-black dark:bg-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600"
            }`}
          >
            🌙 Dark
          </button>

          <button
            onClick={() => setTheme("system")}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              theme === "system"
                ? "bg-black text-white dark:bg-white dark:text-black"
                : "bg-gray-200 text-black dark:bg-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600"
            }`}
          >
            💻 System
          </button>
        </div>
      </div>
    </div>
  );
}
