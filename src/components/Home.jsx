import MoviesList from "./MoviesList";
import { TMDB_IMAGE } from "../utils/constant";
import useNowPLaying from "../hooks/useNowPlaying";
import usePopular from "../hooks/usePopular";
import useTopRated from "../hooks/useTopRated";
import useUpComing from "../hooks/useUpComing";
import HomeShimmer from "./HomeShimmer";

const Home = () => {
  const { nowPlaying } = useNowPLaying();
  const { popular } = usePopular();
  const { topRated } = useTopRated();
  const { upcoming } = useUpComing();
  if (!nowPlaying) return <HomeShimmer />;

  const random = Math.floor(Math.random() * 20 + 0);
  const { backdrop_path, title, overview } = nowPlaying[random];

  return (
    <div>
      {/* Poster */}
      <div
        style={{ backgroundImage: `url(${TMDB_IMAGE + backdrop_path})` }}
        className="relative w-full md:h-[70vh] h-[40vh] bg-no-repeat bg-cover bg-center bg-none cursor-pointer"
      >
        <div className="w-full h-full md:px-10 px-2 bg-black bg-opacity-40">
          <div className="absolute md:top-[50%] bottom-0 max-w-[800px] flex justify-end gap-6 flex-col md:pb-20 pb-5">
            <h2 className=" text-slate-100 font-semibold md:text-4xl pb-1 md:border-b-4 w-fit text-2xl italic ">
              {title}
            </h2>
            <p className="md:text-xl text-md text-blue-100 md:line-clamp-none line-clamp-4 ">
              {overview}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <MoviesList name="Now Playing" movies={nowPlaying} />
        <MoviesList name="Top Rated" movies={topRated} />
        <MoviesList name="Popular" movies={popular} />
        <MoviesList name="Up coming" movies={upcoming} />
      </div>
    </div>
  );
};

export default Home;
