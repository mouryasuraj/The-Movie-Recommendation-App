import PropTypes from "prop-types";
import MovieCard from "./MovieCard";
import { useRef } from "react";
import LeftAndRightScrollFeature from "./LeftAndRightScrollFeature";

const MoviesList = ({ name, movies }) => {
  const moviesList = useRef();
  if (!movies) return null;

  return (
    <div className="w-full lg:pl-20 pl-3 py-5 ">
      <div className="flex md:pb-3 items-center justify-between md:pr-16">
        <h2 className="md:text-3xl text-xl font-bold text-slate-900 dark:text-slate-100 mb-4 transition-colors duration-300">
          {name}
        </h2>
        <LeftAndRightScrollFeature reference={moviesList} />
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
  name: PropTypes.string,
  movies: PropTypes.array,
};
