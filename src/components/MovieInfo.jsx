import useMovieInfo from "../hooks/useMovieInfo";
import calculateReleaseDate from "../utils/calculateRealeaseDate";
import { TMDB_IMAGE } from "../utils/constant";

const MovieInfo = () => {
  const { isMobile, movieDetails } = useMovieInfo();
  if (!movieDetails)
    return <p className="text-slate-200 pt-48 text-3xl">Loading.....</p>;
  const { backdrop_path, poster_path, original_title, release_date, genres } =
    movieDetails;
  const { year, date, month } = calculateReleaseDate(release_date);

  return (
    <div
      style={{
        backgroundImage: `${
          isMobile
            ? `url(${TMDB_IMAGE + poster_path})`
            : `url(${TMDB_IMAGE + backdrop_path})`
        }`,
      }}
      className="w-screen h-[90vh] bg-no-repeat bg-cover bg-center"
    >
      <div className="w-full bg-slate-800 h-full bg-opacity-60 backdrop-blur-xl py-32 px-4">
        <div className="mx-auto max-w-[1200px] flex flex-wrap items-center md:justify-normal justify-center md:gap-10 gap-2">
          <div>
            <img
              className="max-w-[300px] md:h-[450px] object-cover rounded-lg"
              src={TMDB_IMAGE + poster_path}
              alt=""
            />
          </div>
          <div className="">
            <h1 className="text-slate-200 md:text-4xl text-2xl font-bold">
              {original_title}
              <span className="font-normal text-slate-300">{`(${year})`}</span>
            </h1>
            <p className="text-slate-100">{`${month} ${date}, ${year}`}</p>
            <div className="text-slate-300 flex items-center gap-5">
              {genres.map((genre) => (
                <p className="flex items-center gap-1" key={genre.id}>
                  <i className="fa-solid fa-circle text-[8px]" />
                  <span>{`${genre.name}`}</span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
