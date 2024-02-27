import { useEffect } from "react";
import Header from "./Header";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
const Body = () => {
  const theme = useSelector((store) => store.theme.theme);

  /* eslint-disable */
  useEffect(() => {
    const html = document.querySelector("html");
    theme ? html.classList.remove("dark") : html.classList.add("dark");
  }, [theme]);
  /* eslint-enable */

  return (
    <div className="dark:bg-slate-700 bg-slate-200 w-full min-h-screen transition-colors duration-300  ">
      <Header />
      <Outlet />
    </div>
  );
};

export default Body;
