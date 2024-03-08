
import useMovieInfo from "../hooks/useMovieInfo";
import { TMDB_IMAGE } from "../utils/constant";
import MovieCredits from "./MovieCredits";
import MovieInfoHeader from "./MovieInfoHeader";

const MovieInfo = () => {
  const { isMobile, movieDetails } = useMovieInfo();
  if (!movieDetails)
    return <p className="text-slate-200 pt-48 text-3xl">Loading.....</p>;
  const { backdrop_path, poster_path } = movieDetails;

  return (
    <div>
      <div
        style={{
          backgroundImage: `${
            isMobile
              ? `url(${TMDB_IMAGE + poster_path})`
              : `url(${TMDB_IMAGE + backdrop_path})`
          }`,
        }}
        className="w-full bg-no-repeat bg-cover bg-center"
      >
        <MovieInfoHeader />
      </div>
      <MovieCredits />
    </div>
  );
};

export default MovieInfo;
