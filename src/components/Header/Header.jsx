import { Link } from "react-router-dom";
import NavItems from "./NavItems";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../../store/slices/themeSlice";
import { useSelector } from "react-redux";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const menuBar = useRef();
  const dispatch = useDispatch();
  const theme = useSelector((store) => store.theme.theme);

  const handleTheme = () => {
    dispatch(toggleTheme());
  };

  const handleMenuBar = () => {
    if (isMenuOpen) {
      menuBar.current.style.right = "0";
      setIsMenuOpen(false);
    } else {
      menuBar.current.style.right = "-100%";
      setIsMenuOpen(true);
    }
  };

  return (
    <div className="w-full px-4 py-3 shadow-lg shadow-slate-700 fixed top-0 left-0 bg-slate-900">
      <div className="max-w-[1200px] flex items-center justify-between mx-auto">
        {/* logo */}
        <div>
          <Link to="/">
            <h1
              title="The Movie Recommendation App"
              className="md:text-3xl text-xl text-slate-200 w-fit tracking-widest border-b-8 border-slate-700 cursor-pointer"
            >
              TMRA.
            </h1>
          </Link>
        </div>
        {/* Nav items */}
        <div className="flex items-center gap-2">
          {/* Theme */}
          <div
            onClick={handleTheme}
            className="text-2xl p-1 cursor-pointer hover:scale-125 transition-all duration-300 mx-2"
          >
            <i
              className={`fa-regular fa-${
                theme ? "moon" : "sun"
              } text-slate-100`}
            ></i>
          </div>
          {/* Menu Bar */}
          <i
            onClick={handleMenuBar}
            className="fa-solid fa-bars md:hidden text-slate-100 text-3xl z-[1000]"
          ></i>
          <div className="">
            <ul
              ref={menuBar}
              className="flex md:flex-row flex-col md:items-center md:gap-0 gap-1 md:relative absolute md:top-0 md:right-0 top-0 right-[-100%] md:w-fit w-[60%] md:bg-transparent bg-slate-700 md:py-0 py-20 md:h-fit h-screen transition-all duration-300 rounded-l-lg"
            >
              {/* theme */}
              <NavItems itemName="Home" toUrl="" />
              <NavItems itemName="Search" toUrl="search" />
              <NavItems itemName="Generes" toUrl="/generes" />
              <NavItems itemName="About US" toUrl="about" />
              <NavItems itemName="Contact US" toUrl="contact" />
              <Link className="md:mx-2 md:my-0 my-2 w-fit mx-auto" to="/login">
                <li className="text-slate-900 bg-slate-100 px-3 py-2 rounded-sm font-bold">
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
