import PropTypes from "prop-types";
import MovieCard from "./MovieCard";
import { useRef } from "react";

const MoviesList = ({ name, movies }) => {
  const moviesList = useRef();
  if (!movies) return null;

  const handleLeftArrow = () => {
    moviesList.current.scrollBy(-900, 0);
  };
  const handleRightArrow = () => {
    moviesList.current.scrollBy(900, 0);
  };

  return (
    <div className="w-full lg:pl-20 pl-3 py-5">
      <div className="flex items-center md:pb-3 justify-between md:pr-5">
        <h2 className="md:text-3xl text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          {name}
        </h2>
        <div className="flex gap-4">
          {/* left arrow */}
          <div
            onClick={handleLeftArrow}
            className="text-2xl md:block cursor-pointer hidden dark:bg-slate-200 hover:dark:bg-opacity-80  hover:opacity-90 bg-slate-800 w-fit px-4 py-3 rounded-md bg-opacity-90 dark:text-slate-900 text-slate-100"
          >
            <i className="fa-solid fa-arrow-left"></i>
          </div>
          {/* Right arrow */}
          <div
            onClick={handleRightArrow}
            className="text-2xl md:block cursor-pointer hidden dark:bg-slate-200 hover:dark:bg-opacity-80  hover:opacity-90 bg-slate-800 w-fit px-4 py-3 rounded-md bg-opacity-90 dark:text-slate-900 text-slate-100"
          >
            <i className="fa-solid fa-arrow-right"></i>
          </div>
        </div>
      </div>
      <div
        ref={moviesList}
        className="flex overflow-x-auto scrollbar-hide scroll-smooth"
      >
        <div className="flex items-center md:gap-4 gap-3 pr-4">
          {movies.map((movie) => {
            return <MovieCard key={movie.id} movie={movie} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;

MoviesList.propTypes = {
  name: PropTypes.string.isRequired,
  movies: PropTypes.array.isRequired,
};
