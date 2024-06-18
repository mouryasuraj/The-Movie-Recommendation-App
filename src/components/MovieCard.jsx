import PropTypes from "prop-types";
import ShowDetails from "./ShowDetails";
import useMovieCard from "../hooks/useMovieCard";
import { posterAltName } from "../utils/constant";

const MovieCard = ({ movie }) => {
  const {
    showDetails,
    release_date,
    poster_path,
    title,
    handleMovieCardEnter,
    handleMovieCardLeave,
    handleAddToWatchlist,
    handleGotoMoviesInfo,
  } = useMovieCard(movie);

  return (
    <div
      onClick={handleGotoMoviesInfo}
      className="relative md:w-[220px] w-[170px]"
    >
      <div
        onMouseEnter={handleMovieCardEnter}
        onMouseLeave={handleMovieCardLeave}
        className="relative md:w-[220px] w-[170px] md:hover:scale-[.95] transition-all duration-200 md:h-[300px] h-[250px] rounded-md overflow-hidden cursor-pointer"
      >
        <i
          onClick={handleAddToWatchlist}
          className="fa-solid fa-plus absolute top-[0] left-0 z-[99] p-2 bg-slate-900 rounded-ee-sm text-slate-100 md:hover:bg-slate-800"
        ></i>
        <img
          src={`${
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : "https://www.reelviews.net/resources/img/default_poster.jpg"
          }`}
          className="object-cover w-full h-full rounded-[4px]"
          alt={`${title} ${posterAltName}`}
        />
        <div
          className={`${
            showDetails ? "bottom-[0]" : "bottom-[-100%]"
          } md:absolute left-0 bg-gradient-to-t from-black  w-full h-full flex items-end transition-all duration-200 p-4`}
        >
          <ShowDetails title={title} releaseDate={release_date} />
        </div>
      </div>
      <div className="px-1 my-1 md:hidden">
        <ShowDetails title={title} releaseDate={release_date} />
      </div>
    </div>
  );
};

export default MovieCard;

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};
