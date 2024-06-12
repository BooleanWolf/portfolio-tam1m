import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Research from "../components/Home/Research/Research";
import Project from "../components/Home/Project/Project";

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
    ],
  },
]);
