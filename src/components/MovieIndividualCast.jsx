import PropTypes from "prop-types";
import {
  CAST_PROFILE_URL,
  FEMALE_PROFILE_URL,
  MALE_PROFILE_URL,
} from "../utils/constant";

const MovieIndividualCast = ({ cast }) => {
  const { original_name, profile_path, character, gender } = cast;
  return (
    <div className="md:w-[200px] w-[150px] dark:bg-slate-700 transition-all duration-300 bg-slate-200   rounded-lg overflow-hidden cursor-pointer">
      <div className="w-full md:h-[180px] h-[150px] relative overflow-hidden rounded-lg">
        <img
          className={`w-full h-full object-cover  z-[1] relative ${
            profile_path && "hover:scale-[1.05]"
          } transition-all duration-300`}
          src={
            profile_path
              ? CAST_PROFILE_URL + profile_path
              : gender === 2
              ? MALE_PROFILE_URL
              : FEMALE_PROFILE_URL
          }
          alt={original_name + " Profile Pic"}
        />
        <div className="dark:bg-slate-800 bg-slate-500 w-full h-full absolute top-0 left-0 z-[0]"></div>
      </div>
      <div className="my-2">
        <p
          title={original_name}
          className="px-2 md:text-lg text-[15px] font-bold dark:text-gray-400 cursor-pointer hover:text-slate-600 dark:hover:text-slate-300 w-fit"
        >
          {original_name}
        </p>
        <p
          title={character}
          className="px-2 md:text-md text-[15px] font-semibold dark:text-slate-50 line-clamp-1"
        >
          {character}
        </p>
      </div>
    </div>
  );
};

export default MovieIndividualCast;

MovieIndividualCast.propTypes = {
  cast: PropTypes.object.isRequired,
};
