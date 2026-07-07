import { createBrowserRouter } from "react-router-dom";

import Layout from "@/features/common/layout/layout";
import Homepage from "@/features/homepage/homepage";
import Project from "@/features/project/project";
import { RootRedirect } from "@/config/routes/root-redirect";

export const router = createBrowserRouter([
  {
    path: "/:locale",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "proyecto/:internal_link",
        element: <Project />,
      },
    ],
  },
  {
    // Any path without a valid locale prefix — including "/" and legacy
    // "/proyecto/x" links — redirects to the detected-locale equivalent.
    path: "*",
    element: <RootRedirect />,
  },
]);
