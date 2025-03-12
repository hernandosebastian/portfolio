import { createBrowserRouter } from "react-router-dom";
import Layout from "@/layout";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <p>Home</p>,
      },
      {
        path: "/proyectos/:id",
        element: <p>Proyectos</p>,
      },
    ],
  },
]);
