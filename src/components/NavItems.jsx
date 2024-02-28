import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const NavItems = ({ itemName, toUrl }) => {
  return (
    <NavLink
      to={`/${toUrl}`}
      className={({ isActive }) =>
        ` relative px-4 py-2 md:bg-transparent bg-slate-500 text-center md:rounded-[4px] cursor-pointer dark:md:hover:text-slate-900 md:hover:text-slate-100  dark:md:text-slate-100 md:text-slate-900 text-slate-100 font-semibold lg:text-lg md:before:absolute before:w-full before:h-full before:bottom-[-100%] before:left-0 dark:before:bg-slate-100 before:bg-slate-900 before:rounded-[50%] overflow-hidden hover:before:bottom-[0] hover:before:rounded-none before:transition-all before:duration-500 transition-colors duration-100 ${
          isActive
            ? " md:border-b-4 dark:border-slate-100 border-slate-900 md:rounded-none"
            : ""
        }  `
      }
    >
      <p className="relative transition-all w-full h-full duration-300">
        {itemName}
      </p>
    </NavLink>
  );
};

export default NavItems;

NavItems.propTypes = {
  itemName: PropTypes.string.isRequired,
  toUrl: PropTypes.string.isRequired,
};
