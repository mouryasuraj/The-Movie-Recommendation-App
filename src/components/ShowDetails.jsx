import PropTypes from "prop-types";

const ShowDetails = ({ title, releaseDate }) => {
  return (
    <div className="text-slate-300 text-left w-full">
      <h1 className="text-lg font-bold italic line-clamp-1 ">{title}</h1>
      <p>{releaseDate}</p>
    </div>
  );
};

export default ShowDetails;

ShowDetails.propTypes = {
  title: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
};
