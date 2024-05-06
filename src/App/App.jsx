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
      <h1>
        <span className="spanM">M</span><span className="memeSpan">eme</span> 
        <span className="spanC"> C</span><span className="memeSpan">reator</span>
      </h1>
      <RouterProvider router={router} />
    </div>
  );
}
