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
  const [isBackdropActive, setIsBackdropActive] = useState(false);
  const [isLogoActive, setIsLogoActive] = useState(true);
  const [isPosterActive, setIsPosterActive] = useState(false);
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
    <div className="pt-[6%] max-w-[1200px] mx-auto">
      {/* Breadcumbs */}
      <div className="my-4">
        <Breadcumbs
          goTo={goTo}
          previousPage={movieDetails.title}
          currentPage="Images"
        />
      </div>
      {/* Images */}
      {/* Backdrop */}
      <div className="border-b dark:border-slate-100 border-slate-900">
        <div className="relative w-fit flex items-center">
          <h2
            onClick={handleBackdrop}
            className={`md:text-xl border-b-4  text-xl font-bold text-slate-900 ${
              isBackdropActive
                ? "dark:text-blue-300 text-blue-600 border-text-600  dark:border-blue-300 border-blue-600 "
                : "dark:text-slate-100 border-transparent"
            } px-4 py-3  cursor-pointer transition-all duration-500  `}
          >
            Backdrops
          </h2>
          <h2
            onClick={handleLogos}
            className={`md:text-xl border-b-4  text-xl font-bold text-slate-900 ${
              isLogoActive
                ? "dark:text-blue-300 text-blue-600 border-text-600  dark:border-blue-300 border-blue-600 "
                : "dark:text-slate-100 border-transparent"
            } px-4 py-3  cursor-pointer transition-all duration-500  `}
          >
            Logos
          </h2>
          <h2
            onClick={handlePoster}
            className={`md:text-xl border-b-4  text-xl font-bold text-slate-900 ${
              isPosterActive
                ? "dark:text-blue-300 text-blue-600 border-text-600  dark:border-blue-300 border-blue-600 "
                : "dark:text-slate-100 border-transparent"
            } px-4 py-3  cursor-pointer transition-all duration-500  `}
          >
            Posters
          </h2>
        </div>
      </div>
    </div>
  );
};

export default AllImages;
