import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Gotejamento from "../pages/Gotejamento";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/gotejamento",
        element: <Gotejamento/>,
    },
    {
        path: "*",
        element: <NotFound/>,
    },
])

export default function Routes(){
   return <RouterProvider router={router}/>
}