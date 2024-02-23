import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./store/appStore";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [],
  },
]);

function App() {
  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter}>
        <Outlet />
      </RouterProvider>
    </Provider>
  );
}

export default App;
