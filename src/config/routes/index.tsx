import { createBrowserRouter, Navigate } from "react-router-dom";

import Homepage from "@/features/homepage/homepage";
import Project from "@/features/project/project";
import Layout from "@/layout";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/proyecto/:internal_link",
        element: <Project />,
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);
