import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import SingUp from "../Pages/Home/SingUp/SingUp";

  
const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,

      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
            path: "login",
            element: <SingUp></SingUp>,
          },
      ],
    },
  ]);
  export default router;