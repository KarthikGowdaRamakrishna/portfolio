"use client"; 
import React from "react";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

import Link from "next/link";
import { useTheme } from "@/hooks/useTheme";




const Header = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <header className="sticky top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm">
      <nav className="mt-4 relative max-w-2xl w-full bg-white border border-gray-200 rounded-full mx-2 py-2.5 md:flex md:items-center md:justify-between md:py-0 md:px-4 md:mx-auto dark:bg-neutral-900 dark:border-neutral-700">
        <div className="px-4 md:px-0 flex justify-between items-center">
          <div className="flex items-center">
            {/* Stylized "G" Logo with Kannada 'ಜಿ' */}
            <Link href="/" aria-label="Home">
              <div className="flex items-center space-x-2">
              <svg
                    width="40"
                    height="45"
                    viewBox="0 0 40 40"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current block"
                    style={{ verticalAlign: "top" }}
                  >
                    {/* Shield shape with rounded corners */}
                    <path
                      d="M5 2C3.34315 2 2 3.34315 2 5V25.7735C2 26.9268 2.59536 28.0007 3.57544 28.6247L18.5754 37.9813C19.4474 38.5279 20.5526 38.5279 21.4246 37.9813L36.4246 28.6247C37.4046 28.0007 38 26.9268 38 25.7735V5C38 3.34315 36.6569 2 35 2H5Z"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    
                    {/* Kannada ಜಿ text */}
                    <text
                      x="20"
                      y="20"
                      fontSize="19"
                      fontWeight="bold"
                      className="text-white dark:text-black"
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fontFamily="'Noto Sans Kannada', Arial, sans-serif"
                    >
                      ಜಿ
                    </text>
                  </svg>
                <span className="text-2xl font-bold text-gray-800 dark:text-white">
                  Gowda
                </span>
              </div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="flex justify-center items-center size-7 border border-gray-200 text-gray-500  hover:bg-gray-200 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700"
              aria-label="Toggle navigation"
            >
              <svg className="size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex md:items-center md:justify-end gap-2 md:gap-3">
          <Link className="py-3 px-4 text-gray-800 font-medium dark:text-neutral-200" href="/">Home</Link>
          <Link className="py-3 px-4 text-gray-500 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200" href="#">Projects</Link>
          <Link className="py-3 px-4 text-gray-500 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200" href="#">Work</Link>
          {/* <Link className="py-3 px-4 text-gray-500 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200" href="#">Articles</Link> */}
          <button
            type="button"
            className="relative flex justify-center items-center size-7 border border-gray-200 text-gray-500 rounded-full hover:bg-gray-200 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700"
            onClick={toggleTheme}
          >
            {theme === "dark" ? (
              <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2"></path>
                <path d="M12 20v2"></path>
                <path d="m4.93 4.93 1.41 1.41"></path>
                <path d="m17.66 17.66 1.41 1.41"></path>
                <path d="M2 12h2"></path>
                <path d="M20 12h2"></path>
                <path d="m6.34 17.66-1.41 1.41"></path>
                <path d="m19.07 4.93-1.41 1.41"></path>
              </svg>
            ) : (
              <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
              </svg>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
