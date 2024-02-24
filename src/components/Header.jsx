import { Link } from "react-router-dom";
import NavItems from "./NavItems";
import useHeader from "../hooks/useHeader";

const Header = () => {
  const { theme, menuBar, handleMenuBar, handleTheme } = useHeader();

  return (
    <div className="w-full px-4 py-3 fixed top-0 left-0 dark:bg-slate-900 dark:bg-opacity-50 bg-opacity-80 backdrop-blur-[14px] bg-slate-100 z-[100]">
      <div className="max-w-[1200px] flex items-center justify-between mx-auto">
        {/* logo */}
        <div>
          <Link to="/">
            <h1
              title="The Movie Recommendation App"
              className="md:text-3xl text-xl dark:text-slate-200 text-slate-900 w-fit tracking-widest border-b-8 border-slate-600 cursor-pointer select-none"
            >
              TMRA
            </h1>
          </Link>
        </div>
        {/* Nav items */}
        <div className="flex items-center gap-2">
          {/* Theme */}
          <div
            onClick={handleTheme}
            className="md:text-2xl text-xl p-1 cursor-pointer md:hover:scale-125 md:transition-all md:duration-300 md:mx-2 mx-4"
          >
            <i
              className={`fa-regular fa-${
                theme ? "moon" : "sun"
              } dark:text-slate-100 text-slate-900 `}
            ></i>
          </div>
          {/* Menu Bar */}
          <i
            onClick={handleMenuBar}
            className="fa-solid fa-bars md:hidden cursor-pointer dark:text-slate-100 text-slate-400 text-3xl z-[1000]"
          ></i>
          <div className="">
            <ul
              ref={menuBar}
              className="flex md:flex-row flex-col md:items-center md:gap-2 gap-[2px] md:relative absolute md:top-0 md:right-0 top-0 right-[-100%] md:w-fit w-[60%] md:bg-transparent bg-slate-700 md:py-0 py-20 md:h-fit h-screen transition-all duration-300 rounded-l-lg"
            >
              {/* theme */}
              <NavItems itemName="Home" toUrl="" />
              <NavItems itemName="Search" toUrl="search" />
              <NavItems itemName="Generes" toUrl="generes" />
              <NavItems itemName="About US" toUrl="about" />
              <NavItems itemName="Contact US" toUrl="contact" />
              <NavItems itemName="Watchlist" toUrl="watchlist" />
              <Link className="md:mx-2 md:my-0 my-2 w-fit mx-auto" to="/login">
                <li className="dark:text-slate-900 text-slate-200 bg-slate-900 dark:bg-slate-100 px-3 py-2 rounded-sm font-semibold">
                  <p className="relative transition-all duration-500">LOGIN</p>
                </li>
              </Link>
            </ul>
          </div>
        </div>
        {/* Theme */}
      </div>
    </div>
  );
};

export default Header;
