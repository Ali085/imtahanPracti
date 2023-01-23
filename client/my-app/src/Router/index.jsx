import {createBrowserRouter} from "react-router-dom";
import AddPage from "../Pages/AddPage";
import Home from "../Pages/Home";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
        path: "/addpage",
        element: <AddPage/>,
      },
  ]);

  export default router