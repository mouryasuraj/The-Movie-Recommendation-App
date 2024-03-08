import { useSelector } from "react-redux";
import MovieIndividualCast from "./MovieIndividualCast";
import LeftAndRightScrollFeature from "./LeftAndRightScrollFeature";
import { useRef } from "react";
import { Link } from "react-router-dom";

const MovieCredits = () => {
  const credit = useRef();
  const movieCredits = useSelector((store) => store.moviesInfo.movieCredits);
  if (!movieCredits) return <p>Loading.....</p>;
  const { cast, crew } = movieCredits;
  const movieDirector = crew.filter((crew) => crew?.job === "Director");
  const movieProducer = crew.filter((crew) => crew?.job === "Producer");
  const { id, original_name } = movieDirector[0];
  const convertToURL = (name) => {
    return name.toLowerCase().replaceAll(" ", "-");
  };

  return (
    <div className="dark:text-slate-200 text-slate-900 md:max-w-[1200px] w-full mx-auto md:px-0 py-7 px-4">
      <div>
        <div className="flex items-center justify-between">
          <h2 className="text-xl md:text-2xl font-bold">Top Cast</h2>
          <LeftAndRightScrollFeature reference={credit} />
        </div>
        <div
          ref={credit}
          className="flex overflow-x-scroll scrollbar-hide scroll-smooth my-4"
        >
          <div className="flex gap-5">
            {cast.map((cast) => (
              <Link
                key={cast.id}
                className="h-fit"
                to={`/person/${convertToURL(cast.name)}/${cast.id}`}
              >
                <MovieIndividualCast cast={cast} />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <h1 className="text-xl dark:text-slate-100 text-slate-900 font-bold">
        Director:{" "}
        <Link to={`/person/${convertToURL(original_name)}/${id}`}>
          <span className="cursor-pointer dark:text-sky-200 text-sky-600 font-semibold hover:underline md:no-underline underline dark:hover:text-sky-500 text-lg tracking-wide">
            {original_name}
          </span>
        </Link>
      </h1>
      <h1 className="text-xl dark:text-slate-100 text-slate-900 font-bold">
        {movieProducer.length === 1 ? "Producer: " : "Producers: "}
        {movieProducer.map((producer, index) => (
          <Link
            key={producer.id}
            to={`/person/${convertToURL(producer.name)}/${producer.id}`}
          >
            <span className="cursor-pointer dark:text-sky-200 text-sky-600 font-semibold hover:underline md:no-underline underline dark:hover:text-sky-500 text-lg tracking-wide">
              {producer.name + (index === movieProducer.length - 1 ? "" : ", ")}
            </span>
          </Link>
        ))}
      </h1>
    </div>
  );
};

export default MovieCredits;
