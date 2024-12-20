import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { Teams } from "./pages/Teams";
import { Register } from "./pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/teams",
    element: <Teams />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    basename: "/December2024/"
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
