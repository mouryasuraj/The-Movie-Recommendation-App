import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./store/appStore";
import Home from "./components/Home";
import Search from "./components/Search";
import Genres from "./components/Genres";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import WatchList from "./components/WatchList";
import Login from "./components/Login";
import Error from "./components/Error";
import MovieInfo from "./components/MovieInfo";
import PersonDetails from "./components/PersonDetails";
import CastAndCrews from "./components/CastAndCrews";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "genres/:genreType",
        element: <Genres />,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
      {
        path: "watchlist",
        element: <WatchList />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "movie/:movie_name/:movie_id",
        element: <MovieInfo />,
      },
      {
        path: "/person/:person_name/:person_id",
        element: <PersonDetails />,
      },
      {
        path: "/movie/cast&crews/:mov_name",
        element: <CastAndCrews />,
      },
    ],
    errorElement: <Error />,
  },
]);

function App() {
  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter}>
        <div className="w-full h-full">
          <Outlet />
        </div>
      </RouterProvider>
    </Provider>
  );
}

export default App;
