import React from "react";
import IconVercel from "./icon/IconVercel";
import { lang } from "@/constants/lang";
import StarsRate from "./StarsRate";
import { useDispatch, useSelector } from "react-redux";
import { incrementRating, decrementRating } from "@/store/starSlice";

const TheFooter = () => {
  const rating = useSelector((state) => state.star.rating);
  const dispatch = useDispatch();
  return (
    <footer className="p-6 flex flex-col gap-2 w-full">
      <div className="flex flex-col md:flex  gap-2 items-center my-2">
        <img src="/movies-sm.webp" width="25" height="25" alt="Logo" />
        <div className="text-xl text-center md:text-left">
          Movies Trailers 2024
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-around gap-4 mt-5 items-center">
        <a
          href="https://github.com/AjmalDevala/movies"
          target="_blank"
          aria-label="Link to GitHub account"
          rel="noopener noreferrer"
          className="mb-2 md:mb-0"
        >
          <div className="i-simple-icons:github"></div>
        </a>
        <div className="text-gray-900 text-sm">
          <a
            href="https://www.themoviedb.org/"
            target="_blank"
            rel="noopener noreferrer"
            title="The Movie Database"
          >
            <IconVercel />
          </a>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-2.5 mb-2 md:mb-0">
          <span>Languages:</span>
          <label htmlFor="langSwitcher" className="sr-only"></label>
          <select
            id="langSwitcher"
            className="rounded-md text-sm p-2 bg-gray-800 text-white"
          >
            {lang.map((lag, index) => (
              <option
                className="bg-gray-800"
                key={`${lag}-${index}`}
                value={lag}
              >
                {lag}
              </option>
            ))}
          </select>
        </div>
        <div className="p-2 text-white rounded-lg">
          <h1 className="text-lg mb-2 text-center">
            Give some Ratings{" "}
            {rating > 8 ? "🔥" : rating > 5 ? "😊" : rating > 3 ? "😶" : ""}
          </h1>
          <div className="flex justify-center items-center space-x-4">
            <button
              onClick={() => rating > 0 && dispatch(decrementRating())}
              className={`text-xl ${
                rating > 0 ? "bg-red-500 hover:bg-red-600" : "bg-gray-400"
              } text-white rounded-full px-3 py-1 transition duration-200`}
            >
              -
            </button>
            <StarsRate value={rating} />
            <button
              onClick={() => rating < 10 && dispatch(incrementRating())}
              className={`text-xl ${
                rating < 10 ? "bg-green-500 hover:bg-green-600" : "bg-gray-400"
              } text-white rounded-full px-3 py-1 transition duration-200`}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto text-start">
        <p>&copy; 2024 MovieZone. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default TheFooter;
