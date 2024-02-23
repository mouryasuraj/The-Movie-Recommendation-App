import PropTypes from "prop-types";
import ShowDetails from "./ShowDetails";
import { useState } from "react";

const MovieCard = ({ movie }) => {
  const [showDetails, setShowDetails] = useState(false);
  const { original_title, poster_path, release_date } = movie;

  const handleMovieCardEnter = () => {
    setShowDetails(true);
  };
  const handleMovieCardLeave = () => {
    setShowDetails(false);
  };

  return (
    <div className="relative md:w-[220px] w-[170px]">
      <div
        onMouseEnter={handleMovieCardEnter}
        onMouseLeave={handleMovieCardLeave}
        className="relative md:w-[220px] w-[170px] md:h-[300px] h-[250px] rounded-md overflow-hidden cursor-pointer"
      >
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          className="object-cover w-full h-full"
          alt=""
        />
        <div
          className={`${
            showDetails ? "bottom-[0]" : "bottom-[-100%]"
          } md:absolute left-0 bg-gradient-to-t from-black  w-full h-full flex items-end transition-all duration-200 p-4`}
        >
          <ShowDetails title={original_title} releaseDate={release_date} />
        </div>
      </div>
      <div className="px-1 my-1 md:hidden">
        <ShowDetails title={original_title} releaseDate={release_date} />
      </div>
    </div>
  );
};

export default MovieCard;

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};
