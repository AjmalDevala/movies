import { createBrowserRouter } from "react-router-dom";
// pages
import App from "@/App";
import Movies from "@/pages/genre/[no]/movie";
import TVShows from "@/pages/genre/[no]/tv";
import MediaType from "@/pages/[type]/[id]";
import Search from "@/pages/search";
import MediaQuery from "@/pages/[type]/category/[query]";
import LoginPage from "@/pages/[Auth]/Login";
import RegisterPage from "@/pages/[Auth]/Signup";
import ForgetPassword from "@/pages/[Auth]/forgetPassword";
import PageNotFound from "@/404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/forgetPassword",
        element: <ForgetPassword />,
      },
      {
        path: "/movie",
        element: <Movies />,
      },
      {
        path: "/tv",
        element: <TVShows />,
      },
      {
        path: "/movie/:id",
        element: <MediaType />,
      },
      {
        path: "/tv/:id",
        element: <MediaType />,
      },
      {
        path: "/movie/category/:query",
        element: <MediaQuery />,
      },
      {
        path: "/tv/category/:query",
        element: <MediaQuery />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);

export default router;
