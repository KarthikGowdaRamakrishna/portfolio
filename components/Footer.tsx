import Link from "next/link";
import { useTheme } from "@/hooks/useTheme";

const Footer = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <footer className="w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-6 border-t border-gray-200 dark:border-neutral-700">
        <div className="flex flex-wrap justify-between items-center gap-2">
          {/* Copyright */}
          <div>
            <p className="text-xs text-gray-600 dark:text-neutral-400">
              © 2025 Karthik Gowda.
            </p>
          </div>

          {/* Social Links */}
          <ul className="flex flex-wrap items-center">
            <li className="inline-block pe-4 text-xs">
              <Link
                className="text-xs text-gray-500 underline hover:text-gray-800 dark:text-neutral-500 dark:hover:text-neutral-400"
                href="https://github.com/KarthikGowdaRamakrishna"
                target="_blank"
              >
                GitHub
              </Link>
            </li>
            <li className="inline-block pe-4 text-xs">
              <Link
                className="text-xs text-gray-500 underline hover:text-gray-800 dark:text-neutral-500 dark:hover:text-neutral-400"
                href="https://www.linkedin.com/in/karthik-gowda-r-45ab8b1a2/"
                target="_blank"
              >
                LinkedIn
              </Link>
            </li>
          </ul>

          {/* Dark Mode Toggle */}
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
      </div>
    </footer>
  );
};

export default Footer;
