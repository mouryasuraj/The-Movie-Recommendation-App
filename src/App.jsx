import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./store/appStore";
import Home from "./components/Home";
import Search from "./components/Search";
import Generes from "./components/Generes";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import WatchList from "./components/WatchList";
import Login from "./components/Login";
import Error from "./components/Error";

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
        path: "/search",
        element: <Search />,
      },
      {
        path: "/generes",
        element: <Generes />,
      },
      {
        path: "/about",
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
        path: "error",
        element: <Error />,
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
