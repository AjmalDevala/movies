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
import ProtectedRoute from "@/config/ProtectedRoute"; // Import the ProtectedRoute component
import MovieLandingPage from "@/pages/MovieLandingPage";

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
      // Protected routes start here
      {
        path: "/movie",
        element: (
          <ProtectedRoute>
            <Movies />
          </ProtectedRoute>
        ),
      },
      {
        path: "/tv",
        element: (
          <ProtectedRoute>
            <TVShows />
          </ProtectedRoute>
        ),
      },
      {
        path: "/movie/:id",
        element: (
          <ProtectedRoute>
            <MediaType />
          </ProtectedRoute>
        ),
      },
      {
        path: "/tv/:id",
        element: (
          <ProtectedRoute>
            <MediaType />
          </ProtectedRoute>
        ),
      },
      {
        path: "/movie/category/:query",
        element: (
          <ProtectedRoute>
            <MediaQuery />
          </ProtectedRoute>
        ),
      },
      {
        path: "/tv/category/:query",
        element: (
          <ProtectedRoute>
            <MediaQuery />
          </ProtectedRoute>
        ),
      },
      {
        path: "/search",
        element: (
          <ProtectedRoute>
            <Search />
          </ProtectedRoute>
        ),
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
      {
        path: "/moviezone",
        element: <MovieLandingPage />,
      },
    ],
  },
]);

export default router;
