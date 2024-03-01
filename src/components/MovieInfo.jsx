import { Link } from "react-router-dom";
import useMovieInfo from "../hooks/useMovieInfo";
import calculateMovieDuration from "../utils/calculateMovieDuration";
import calculateReleaseDate from "../utils/calculateRealeaseDate";
import { TMDB_IMAGE } from "../utils/constant";
import IMDBIcon from "./IMDBIcon";

const MovieInfo = () => {
  const { isMobile, movieDetails } = useMovieInfo();
  if (!movieDetails)
    return <p className="text-slate-200 pt-48 text-3xl">Loading.....</p>;
  const {
    backdrop_path,
    poster_path,
    original_title,
    release_date,
    genres,
    tagline,
    overview,
    status,
    runtime,
    imdb_id,
    budget,
    revenue,
  } = movieDetails;
  const { year, date, month } = calculateReleaseDate(release_date);
  const { hour, minute } = calculateMovieDuration(runtime);

  return (
    <div
      style={{
        backgroundImage: `${
          isMobile
            ? `url(${TMDB_IMAGE + poster_path})`
            : `url(${TMDB_IMAGE + backdrop_path})`
        }`,
      }}
      className="w-screen min-h-[100vh] md:min-h-[90vh] bg-no-repeat bg-cover bg-center"
    >
      <div className="w-full bg-slate-800 md:min-h-[90vh] min-h-[100vh] bg-opacity-60 backdrop-blur-xl md:pt-32 pt-24 px-4">
        <div className="mx-auto md:w-[1200px] flex md:flex-row flex-col md:items-center md:justify-normal md:gap-10 gap-5 w-full">
          <div className="overflow-hidden rounded-lg cursor-pointer">
            <img
              className="md:w-[400px] w-[170px] lg:h-[450px] hover:scale-110 transition-all duration-200 object-cover rounded-lg"
              src={TMDB_IMAGE + poster_path}
              alt={original_title + "Poster"}
            />
          </div>
          <div className="w-full flex flex-col gap-1">
            <div className="flex md:flex-col flex-wrap md:gap-2 gap-4">
              <h1 className="text-slate-200 md:text-4xl text-lg font-bold">
                {original_title}
                <span className="font-normal text-slate-300">{`(${year})`}</span>
              </h1>
              <div className="flex gap-3">
                <p className="text-slate-100 md:mb-0 mb-2">
                  {status === "Released" && (
                    <span
                      title="Released"
                      className="border px-1 text-slate-400 hover:text-slate-300 border-gray-400 cursor-pointer"
                    >
                      R
                    </span>
                  )}
                  {` ${month} ${date}, ${year}`}
                </p>
                <p className="text-slate-200">
                  <i className="fa-solid fa-circle text-[5px]" /> &nbsp;
                  {`${hour}h ${minute}m`}
                </p>
              </div>
            </div>
            <div className="md:my-3 my-2">
              <div className="flex items-center gap-2 flex-wrap text-slate-300">
                {genres.map((genre) => (
                  <Link to={`/genres/${genre.name.toLowerCase()}`} key={genre.id}>
                    <p className="px-2 py-1 border border-gray-400 rounded-3xl cursor-pointer before:w-full before:h-full relative before:absolute before:bg-slate-100 sm:hover:text-slate-800 before:bottom-[-100%] sm:hover:before:bottom-0 before:transition-all before:duration-200 before:left-0 before:rounded-full overflow-hidden sm:hover:before:rounded-xl font-semibold ">
                      <span className="relative transition-all duration-500">
                        {genre.name}
                      </span>
                    </p>
                  </Link>
                ))}
              </div>
            </div>
            <p className="text-slate-300 font-semibold md:text-xl text-lg italic my-2">
              {"Tagline : " + tagline}
            </p>
            <p className="text-slate-300 md:text-lg">
              <span className="text-slate-100 font-bold">Overview: </span>
              {overview}
            </p>
            <div className="flex items-center gap-4 text-slate-300 md:text-lg">
              <IMDBIcon imdbId={imdb_id} />
              {budget > 0 && (
                <div className="flex items-center gap-3">
                  <p>
                    <span className="font-bold text-slate-100">Budget: </span>
                    {`$${(budget / 1000000).toFixed(2)}M`}
                  </p>
                  <p>
                    <span className="font-bold text-slate-100">Revenue: </span>
                    {`$${(revenue / 1000000).toFixed(2)}M`}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
