import { useEffect } from "react";
import Header from "./Header/Header";
import { useSelector } from "react-redux";

const Body = () => {
  const theme = useSelector((store) => store.theme.theme);

  /* eslint-disable */
  useEffect(() => {
    const html = document.querySelector("html");
    theme ? html.classList.remove("dark") : html.classList.add("dark");
  }, [theme]);
  /* eslint-enable */

  return (
    <div className="dark:bg-slate-900 w-full min-h-screen">
      <Header />
    </div>
  );
};

export default Body;
