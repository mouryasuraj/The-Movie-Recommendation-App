import PropTypes from "prop-types";

const LeftAndRightScrollFeature = ({ reference }) => {
  const handleLeftArrow = () => {
    reference.current.scrollBy(-900, 0);
  };
  const handleRightArrow = () => {
    reference.current.scrollBy(900, 0);
  };

  return (
    <div className="md:flex hidden gap-4">
      {/* left arrow */}
      <div
        onClick={handleLeftArrow}
        className="text-2xl cursor-pointer dark:bg-slate-200 hover:dark:bg-opacity-80  hover:opacity-90 bg-slate-800 w-fit px-3 py-2 h-fit rounded-md bg-opacity-90 dark:text-slate-900 text-slate-100"
      >
        <i className="fa-solid fa-arrow-left"></i>
      </div>
      {/* Right arrow */}
      <div
        onClick={handleRightArrow}
        className="text-2xl cursor-pointer dark:bg-slate-200 hover:dark:bg-opacity-80  hover:opacity-90 bg-slate-800 w-fit px-3 py-2 h-fit rounded-md bg-opacity-90 dark:text-slate-900 text-slate-100"
      >
        <i className="fa-solid fa-arrow-right"></i>
      </div>
    </div>
  );
};

export default LeftAndRightScrollFeature;

LeftAndRightScrollFeature.propTypes = {
  reference: PropTypes.object.isRequired,
};
