import bgImage from "../assets/walpaper.jpg";
import MoviesList from "./MoviesList";
import useHome from "../hooks/useHome";
import { QUOTE } from "../utils/constant";

const Home = () => {
  const { nowPlaying } = useHome();

  return (
    <div>
      {/* Poster */}
      <div
        style={{ backgroundImage: `url(${bgImage})` }}
        className="relative w-full md:h-[70vh] h-[40vh] bg-no-repeat bg-cover bg-center bg-none md:px-10 px-4"
      >
        <h2 className="absolute md:top-[50%] bottom-[20%] text-slate-100 font-semibold md:text-4xl text-lg max-w-[800px] italic ">
          {QUOTE}
        </h2>
      </div>
      <div>
        <MoviesList name="Now Playing" movies={nowPlaying} />
      </div>
    </div>
  );
};

export default Home;
