import {
  createHashRouter,
  RouterProvider as DefaultRouterProvider,
} from "react-router-dom";

import { Loader, MainLayout } from "..";
import { Error404, Home } from "@/pages";

const router = createHashRouter([
  {
    path: "/",
    element: <MainLayout />,
    loader: () => <Loader />,
    errorElement: <Error404 />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

export default function RouterProvider() {
  return <DefaultRouterProvider router={router} />;
}
