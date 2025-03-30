import { createBrowserRouter, Navigate } from "react-router-dom";

import Layout from "@/features/common/layout/layout";
import Homepage from "@/features/homepage/homepage";
import Project from "@/features/project/project";

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
