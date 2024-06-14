import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Research from "../components/Home/Research/Research";
import Project from "../components/Home/Project/Project";
import Award from "../components/Home/Award/Award";
import Blogs from "../components/Home/Blogs/Blogs";
import Educations from "../components/Home/Educations/Educations";
import Experience from "../components/Home/Experience/Experience";
import Update from "../components/Home/Update/Update";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/research",
        element: <Research />,
      },
      {
        path: "/projects",
        element: <Project />,
      },
      {
        path: "/award",
        element: <Award />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/projects",
        element: <Project />,
      },
      {
        path: "/educations",
        element: <Educations />,
      },
      {
        path: "/experience",
        element: <Experience />,
      },
      {
        path: "/",
        element: <Update/>,
      },
    ],
  },
]);
