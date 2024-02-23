import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NavItems = ({ itemName, toUrl }) => {
  return (
    <Link className="" to={`/${toUrl}`}>
      <li className="relative px-4 py-2 md:bg-transparent bg-slate-500 text-center md:rounded-[4px] cursor-pointer md:hover:text-slate-900 text-slate-100 font-semibold text-lg md:before:absolute before:w-full before:h-full before:bottom-[-100%] before:left-0 before:bg-slate-100 before:rounded-[50%] overflow-hidden hover:before:bottom-[0] hover:before:rounded-none before:transition-all before:duration-500 ">
        <p className="relative transition-all w-full h-full duration-500">
          {itemName}
        </p>
      </li>
    </Link>
  );
};

export default NavItems;

NavItems.propTypes = {
  itemName: PropTypes.string.isRequired,
  toUrl: PropTypes.string.isRequired,
};
