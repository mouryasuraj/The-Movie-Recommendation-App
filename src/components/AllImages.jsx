import { useSelector } from "react-redux";
import { TMDB_IMAGE } from "../utils/constant";
import Breadcumbs from "./Breadcumbs";
import { useEffect, useState } from "react";
import useMovieImages from "../hooks/useMovieImages";
import { useParams } from "react-router-dom";
import useMovieInfo from "../hooks/useMovieInfo";

const AllImages = () => {
  useMovieImages();
  const { movieDetails } = useMovieInfo();
  const { movie_id, movie_name } = useParams();
  const [isBackdropActive, setIsBackdropActive] = useState(true);
  const [isLogoActive, setIsLogoActive] = useState(false);
  const [isPosterActive, setIsPosterActive] = useState(false);
  const [backdropIndex, setBackdropIndex] = useState(0);
  const [logosIndex, setLogosIndex] = useState(0);
  const [posterIndex, setPosterIndex] = useState(0);
  const goTo = `/movie/${movie_name}/${movie_id}`;
  const allImages = useSelector((store) => store.app.allImages);
  const backdrop = allImages.backdrops;
  const logos = allImages.logos;
  const poster = allImages.posters;

  const handleBackdrop = () => {
    setIsBackdropActive(true);
    setIsLogoActive(false);
    setIsPosterActive(false);
  };
  const handleLogos = () => {
    setIsBackdropActive(false);
    setIsLogoActive(true);
    setIsPosterActive(false);
  };
  const handlePoster = () => {
    setIsBackdropActive(false);
    setIsLogoActive(false);
    setIsPosterActive(true);
  };

  if (!allImages || !movieDetails) return <p className="pt-32">Loading.....</p>;

  return (
    <div className="px-5">
      <div className="pt-[16%] sm:pt-[13%] md:pt-[8%] lg:pt-[6%] max-w-[1200px] mx-auto">
        {/* Breadcumbs */}
        <div className="my-4">
          <Breadcumbs
            goTo={goTo}
            previousPage={movieDetails.title}
            currentPage="Images"
          />
        </div>
        {/* Tabs */}
        <div className="border-b dark:border-slate-100 border-slate-900">
          <div className="relative w-fit flex items-center">
            <h2
              onClick={handleBackdrop}
              className={`md:text-xl border-b-4  text-md font-bold text-slate-900 ${
                isBackdropActive
                  ? "dark:text-blue-300 text-blue-600 border-text-600  dark:border-blue-300 border-blue-600 "
                  : "dark:text-slate-100 border-transparent"
              } px-4 md:py-3 py-2  cursor-pointer transition-all duration-500  `}
            >
              Backdrops
            </h2>
            <h2
              onClick={handleLogos}
              className={`md:text-xl border-b-4  text-md font-bold text-slate-900 ${
                isLogoActive
                  ? "dark:text-blue-300 text-blue-600 border-text-600  dark:border-blue-300 border-blue-600 "
                  : "dark:text-slate-100 border-transparent"
              } px-4 md:py-3 py-2  cursor-pointer transition-all duration-500  `}
            >
              Logos
            </h2>
            <h2
              onClick={handlePoster}
              className={`md:text-xl border-b-4  text-md font-bold text-slate-900 ${
                isPosterActive
                  ? "dark:text-blue-300 text-blue-600 border-text-600  dark:border-blue-300 border-blue-600 "
                  : "dark:text-slate-100 border-transparent"
              } px-4 md:py-3 py-2  cursor-pointer transition-all duration-500  `}
            >
              Posters
            </h2>
          </div>
        </div>
        {/* Big Image */}
        {isBackdropActive && (
          <div className="flex w-full items-center justify-between py-6 gap-3">
            <div
              onClick={() => setBackdropIndex((prev) => prev - 1)}
              className="text-2xl cursor-pointer dark:bg-slate-200 hover:dark:bg-opacity-80  hover:opacity-90 bg-slate-800 w-fit px-3 py-2 h-fit rounded-md bg-opacity-90 dark:text-slate-900 text-slate-100"
            >
              <i className="fa-solid fa-arrow-left"></i>
            </div>
            <img
              className="w-[60%] rounded-lg select-none"
              src={TMDB_IMAGE + backdrop[backdropIndex].file_path}
              alt=""
            />
            <div
              onClick={() => setBackdropIndex((prev) => prev + 1)}
              className="text-2xl cursor-pointer dark:bg-slate-200 hover:dark:bg-opacity-80  hover:opacity-90 bg-slate-800 w-fit px-3 py-2 h-fit rounded-md bg-opacity-90 dark:text-slate-900 text-slate-100"
            >
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        )}
        {isLogoActive && (
          <div className="flex w-full items-center justify-between py-6 gap-3">
            <div
              onClick={() => setLogosIndex((prev) => prev - 1)}
              className="text-2xl cursor-pointer dark:bg-slate-200 hover:dark:bg-opacity-80  hover:opacity-90 bg-slate-800 w-fit px-3 py-2 h-fit rounded-md bg-opacity-90 dark:text-slate-900 text-slate-100"
            >
              <i className="fa-solid fa-arrow-left"></i>
            </div>
            <img
              className="w-[30%] rounded-lg select-none"
              src={TMDB_IMAGE + logos[logosIndex].file_path}
              alt=""
            />
            <div onClick={()=> setLogosIndex(prev => prev +1)} className="text-2xl cursor-pointer dark:bg-slate-200 hover:dark:bg-opacity-80  hover:opacity-90 bg-slate-800 w-fit px-3 py-2 h-fit rounded-md bg-opacity-90 dark:text-slate-900 text-slate-100">
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        )}
        {isPosterActive && (
          <div className="flex w-full items-center justify-between py-6 gap-3">
            <div
              onClick={() => setPosterIndex((prev) => prev - 1)}
              className="text-2xl cursor-pointer dark:bg-slate-200 hover:dark:bg-opacity-80  hover:opacity-90 bg-slate-800 w-fit px-3 py-2 h-fit rounded-md bg-opacity-90 dark:text-slate-900 text-slate-100"
            >
              <i className="fa-solid fa-arrow-left"></i>
            </div>
            <img
              className="w-[20%] rounded-lg select-none"
              src={TMDB_IMAGE + poster[posterIndex].file_path}
              alt=""
            />
            <div onClick={()=> setPosterIndex(prev => prev +1)} className="text-2xl cursor-pointer dark:bg-slate-200 hover:dark:bg-opacity-80  hover:opacity-90 bg-slate-800 w-fit px-3 py-2 h-fit rounded-md bg-opacity-90 dark:text-slate-900 text-slate-100">
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllImages;
