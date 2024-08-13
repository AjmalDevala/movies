import React from "react";
// icon
import IconVercel from "./icon/IconVercel";

const TheFooter = () => {
  const lang = [
    "English",
    "Deutsch",
    "Español",
    "Italiano",
    "Italiano",
    "日本語",
    "简体中文",
    "Português",
    "Português do Brasil",
    "Русский",
    "Français",
    "Українська",
    "Malayalam",
    "Tamil",
  ];
  return (
    <footer className="p-[3.75rem] flex flex-col gap-4">
      <div className="flex flex-row gap-2 items-center my-2">
        <img src="/movies-sm.webp" width="25" height="25" alt="Logo" />
        <div className="text-xl">movies trailers 2024</div>
      </div>
      <div className="flex flex-row gap-4 mt-5 items-center">
        <a
          href="https://github.com/AjmalDevala/movies"
          target="_blank"
          aria-label="Link to GitHub account"
          rel="noopener"
          n-link=""
        >
          <div i-simple-icons:github=""></div>
        </a>
        <div className="text-gray-900 text-sm">
          <a
            href="https://www.themoviedb.org/"
            target="_blank"
            rel="noopener noreferrer"
            title="The Movie Database"
            className="text-opacity-100"
          >
            <IconVercel />
          </a>
        </div>
        <div className="flex items-center gap-2.5">
          <span>Languages:</span>
          <label htmlFor="langSwitcher" className="sr-only"></label>
          <select
            id="langSwitcher"
            className="rounded-s-md text-sm p-2 bg-[#ccd2dc26]"
          >
            {lang.map((lag, index) => (
              <option
                className="bg-[#403b3b]"
                key={`${lag}-${index}`}
                value={lag}
              >
                {lag}
              </option>
            ))}
          </select>
        </div>
      </div>
    </footer>
  );
};

export default TheFooter;
