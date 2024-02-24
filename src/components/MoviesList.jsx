import PropTypes from "prop-types";
import MovieCard from "./MovieCard";

const MoviesList = ({ name, movies }) => {
  if (!movies) return <p>Loading....</p>;

  return (
    <div className="w-full lg:pl-20 pl-3 py-5">
      <h2 className="md:text-3xl text-xl font-bold text-slate-900 dark:text-slate-200 mb-4">
        {name}
      </h2>
      <div className="flex overflow-x-scroll scrollbar-hide">
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
