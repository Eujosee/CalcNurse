import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Calculo from "../pages/Calculo";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/calculo",
        element: <Calculo/>,
    },
    {
        path: "*",
        element: <NotFound/>,
    },
])

export default function Routes(){
   return <RouterProvider router={router}/>
}