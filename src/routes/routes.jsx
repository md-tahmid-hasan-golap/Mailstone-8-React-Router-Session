import { createBrowserRouter } from "react-router";

import Home from "../pages/Home";
import Layouts from "../layouts/Layouts";
import Favorites from "../pages/Favorites";
import About from "../pages/About";
import PhoneDetails from "../pages/PhoneDetails";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layouts,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/favorite",
        Component: Favorites,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/phone-details",
        element: <PhoneDetails></PhoneDetails>,
      },
    ],
  },
]);

export default router;
