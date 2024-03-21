import useMovieInfo from "../hooks/useMovieInfo";
import { TMDB_IMAGE } from "../utils/constant";
import MovieCredits from "./MovieCredits";
import MovieImages from "./MovieImages";
import MovieInfoHeader from "./MovieInfoHeader";
import MovieVideo from "./MovieVideo";

const MovieInfo = () => {
  const { isMobile, movieDetails } = useMovieInfo();
  if (!movieDetails)
    return <p className="text-slate-200 pt-48 text-3xl">Loading.....</p>;

  const { backdrop_path, poster_path } = movieDetails;

  return (
    <div className="relative">
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
      <MovieVideo />
      <MovieImages />
    </div>
  );
};

export default MovieInfo;
