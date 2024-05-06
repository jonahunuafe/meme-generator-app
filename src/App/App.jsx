import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Meme } from "../Meme/Meme"
import { MemeGenerated } from "../MemeGenerated/MemeGenerated";

export const App = () => {
  const router = createBrowserRouter([
    { path: "/", element: <Meme /> },
    {path: "/generated", element: <MemeGenerated />}
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
