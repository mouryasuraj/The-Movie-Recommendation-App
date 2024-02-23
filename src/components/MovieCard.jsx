import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleShowDetails } from "../store/slices/moviesSlice";
import ShowDetails from "./ShowDetails";

const MovieCard = () => {
  const showDetails = useSelector((store) => store.movies.showDetails);
  const dispatch = useDispatch();

  const handleMovieCardEnter = () => {
    dispatch(toggleShowDetails());
  };
  const handleMovieCardLeave = () => {
    dispatch(toggleShowDetails());
  };

  return (
    <div className="relative md:w-[220px] w-[190px]">
      <div
        onMouseEnter={handleMovieCardEnter}
        onMouseLeave={handleMovieCardLeave}
        className="relative md:w-[220px] w-[190px] md:h-[300px] h-[270px] rounded-md overflow-hidden cursor-pointer"
      >
        <img
          src="https://media.themoviedb.org/t/p/w220_and_h330_face/AbFtI353N2Pggl5TxfsI2VtpUt8.jpg"
          className="object-cover w-full h-full"
          alt=""
        />
        <div
          className={`${
            showDetails ? "bottom-[0]" : "bottom-[-100%]"
          } md:absolute left-0 bg-gradient-to-t from-black  w-full h-full flex items-end transition-all duration-200 p-4`}
        >
          <ShowDetails />
        </div>
      </div>
      <div className="px-1 my-1 md:hidden">
        <ShowDetails />
      </div>
    </div>
  );
};

export default MovieCard;
