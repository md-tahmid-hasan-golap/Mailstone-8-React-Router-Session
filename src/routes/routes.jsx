import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import Layouts from "../layouts/Layouts";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layouts,
    errorElement: <p>Error</p>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/favarites",
        element: <p>this is a favarites</p>,
      },
      {
        path: "/about",
        element: <p>this is an about page</p>,
      },
    ],
  },
]);

export default router;
