import { useSelector } from "react-redux";
import MovieIndividualCast from "./MovieIndividualCast";
import LeftAndRightScrollFeature from "./LeftAndRightScrollFeature";
import { useRef } from "react";
import { Link } from "react-router-dom";

const MovieCredits = () => {
  const credit = useRef();
  const movieCredits = useSelector((store) => store.moviesInfo.movieCredits);
  if (!movieCredits) return <p>Loading.....</p>;
  const { cast } = movieCredits;

  return (
    <div className="dark:text-slate-200 text-slate-900 md:max-w-[1200px] w-full mx-auto md:px-0 py-7 px-4">
      <div>
        <div className="flex items-center justify-between">
          <h2 className="text-xl md:text-2xl font-bold">Top Cast</h2>
          <LeftAndRightScrollFeature reference={credit} />
        </div>
        <div
          ref={credit}
          className="flex overflow-x-scroll scrollbar-hide scroll-smooth"
        >
          <div className="flex gap-5">
            {cast.map((cast) => (
              <Link
                key={cast.id}
                to={`/person/${cast.name.toLowerCase().replaceAll(" ", "-")}/${
                  cast.id
                }`}
              >
                <MovieIndividualCast cast={cast} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCredits;
