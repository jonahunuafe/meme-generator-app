import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Meme } from "../Meme/Meme"

export const App = () => {
  const router = createBrowserRouter([
    { path: "/", element: <Meme /> }
  ]);

  return (
    <div>
      <h1>Meme Generator</h1>
      <RouterProvider router={router} />
    </div>
  );
}
