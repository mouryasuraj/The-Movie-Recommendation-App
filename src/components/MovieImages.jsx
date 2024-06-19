import { Link } from "react-router-dom";
import useMovieImages from "../hooks/useMovieImages";
import { TMDB_IMAGE } from "../utils/constant";
import LeftAndRightScrollFeature from "./LeftAndRightScrollFeature";
import { useRef } from "react";

const MovieImages = () => {
  const imageContainer = useRef();
  const { movieImage, imagePath, movie_id, movie_name, showImageSlider, handleShowImage, handleCloseImage } =
    useMovieImages();
  if (!movieImage) return;
  return (
    <div className="max-w-[1200px] dark:text-slate-200 text-slate-900 mx-auto md:px-0 px-4 space-y-4 pb-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl md:text-2xl mt-5 font-bold">
          Images ({movieImage.backdrops.length})
        </h2>
        {movieImage.backdrops.length > 3 && (
          <LeftAndRightScrollFeature reference={imageContainer} />
        )}
      </div>
      <div
        ref={imageContainer}
        className="flex overflow-x-scroll scroll-smooth scrollbar-hide"
      >
        <div className="flex gap-4">
          {movieImage.backdrops.map((image, index) => {
            if (index < 6)
              return (
                <img
                  key={index}
                  onClick={() => handleShowImage(image.file_path)}
                  className="md:w-[30vw] w-[40vw]   md:h-[200px] object-cover rounded-md cursor-pointer hover:opacity-80"
                  src={TMDB_IMAGE + image.file_path}
                  alt={movie_name}
                />
              );
          })}
          {movieImage.backdrops.length > 3 && (
            <Link to={`/movie/${movie_name}/${movie_id}/images`} className="flex items-center justify-center gap-2 w-[300px]">
              <p className="">See all images</p>
              <i className="fa-solid fa-arrow-right bg-slate-200 text-slate-900 px-3 py-2 rounded-full text-xl cursor-pointer hover:bg-slate-300" />
            </Link>
          )}
        </div>
      </div>
      {showImageSlider && (
        <div onClick={handleCloseImage} className="w-full h-screen flex items-center justify-center bg-black z-[1000] fixed top-[-15px] left-0 px-5 bg-opacity-70">
          {/* Image */}
          <img onClick={(e)=> e.stopPropagation()} className="w-fit h-[90%] rounded-lg object-contain" src={TMDB_IMAGE + imagePath} alt="" />
          {/* Close Button */}
          <i onClick={handleCloseImage} className="fa-solid fa-xmark text-4xl absolute top-[1%] right-[7%] cursor-pointer px-[14px] hover:text-slate-800 transition-all text-white duration-300 py-2 rounded-full hover:bg-white" />
        </div>
        
      )}
    </div>
  );
};

export default MovieImages;
