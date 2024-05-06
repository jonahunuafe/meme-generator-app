import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Meme } from "../Meme/Meme"

export const App = () => {
  const router = createBrowserRouter([
    { path: "/", element: <Meme /> },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
