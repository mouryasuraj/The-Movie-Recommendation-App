import useMovieImages from "../hooks/useMovieImages";
import { TMDB_IMAGE } from "../utils/constant";
import LeftAndRightScrollFeature from "./LeftAndRightScrollFeature";
import { useRef } from "react";

const MovieImages = () => {
  const imageContainer = useRef();
  const { movieImage } = useMovieImages();
  if (!movieImage) return;
  return (
    <div className="max-w-[1200px] dark:text-slate-200 text-slate-900 mx-auto md:px-0 px-4 space-y-4 pb-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl md:text-2xl font-bold">
          Images ({movieImage.backdrops.length})
        </h2>
        <LeftAndRightScrollFeature reference={imageContainer} />
      </div>
      <div
        ref={imageContainer}
        className="flex overflow-x-scroll scroll-smooth scrollbar-hide"
      >
        <div className="flex gap-4">
          {movieImage.backdrops.map((image, index) => {
            if (index < 5)
              return (
                <img
                  key={index}
                  className="w-[300px] h-[200px] object-cover rounded-md cursor-pointer hover:opacity-80"
                  src={TMDB_IMAGE + image.file_path}
                  alt=""
                />
              );
          })}
          <div className="flex items-center justify-center gap-2 w-[300px]">
            <p className="">See all images</p>
            <i className="fa-solid fa-arrow-right bg-slate-200 text-slate-900 px-3 py-2 rounded-full text-xl cursor-pointer hover:bg-slate-300" />
          </div>
        </div>
      </div>
      <div className="w-screen hidden h-screen bg-black bg-opacity-70 fixed top-[-15px] left-0 z-[100] items-center justify-between px-4">
        <button className="px-2 py-1 bg-slate-100 rounded-md text-slate-900">
          Previous
        </button>
        <div className="w-[80%] h-[80%]">
          <img className="w-full h-full object-cover" src="" alt="Images" />
        </div>
        <button className="px-2 py-1 bg-slate-100 rounded-md text-slate-900">
          Next
        </button>
      </div>
    </div>
  );
};

export default MovieImages;