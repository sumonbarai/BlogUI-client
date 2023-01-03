import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Main from "../layout/Main";
import NotFound from "../shared/NotFound";
import BlogPage from "../pages/BlogPage";
import DashBoard from "../pages/DashBoard";
import AddPost from "../pages/AddPost";
import EditPost from "../pages/EditPost";

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
        path: "/post",
        element: <BlogPage />,
      },
      {
        path: "/dashboard",
        element: <DashBoard />,
      },
      {
        path: "/addPost",
        element: <AddPost />,
      },
      {
        path: "/editPost",
        element: <EditPost />,
      },
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
    ],
  },
]);

export default router;
