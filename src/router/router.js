import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Main from "../layout/Main";
import NotFound from "../shared/NotFound";
import Blog from "../pages/Blog";
import DashBoard from "../pages/DashBoard";
import AddBlog from "../pages/AddBlog";
import EditBlog from "../pages/EditBlog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog/:id",
        element: <Blog />,
      },
      {
        path: "/dashboard",
        element: <DashBoard />,
      },
      {
        path: "/addBlog",
        element: <AddBlog />,
      },
      {
        path: "/editBlog",
        element: <EditBlog />,
      },
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
    ],
  },
]);

export default router;
