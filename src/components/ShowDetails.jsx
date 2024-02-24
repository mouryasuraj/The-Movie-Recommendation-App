import PropTypes from "prop-types";
import useShowDetails from "../hooks/useShowDetails";

const ShowDetails = ({ title, releaseDate }) => {
  const { year, month, date } = useShowDetails(releaseDate);

  return (
    <div className="dark:text-slate-200 text-slate-900 md:text-slate-200 text-left w-full">
      <h1 className="text-lg font-bold italic line-clamp-1 ">{title}</h1>
      <p>{`${month} ${date}, ${year}`}</p>
    </div>
  );
};

export default ShowDetails;

ShowDetails.propTypes = {
  title: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
};
