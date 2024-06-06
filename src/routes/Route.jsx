import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../page/Home";
import Products_details from "../page/home/Products_details";
import About from "../page/About";
import Service_details from "../page/home/Service_details";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "product-details/:id",
                element: <Products_details />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "service-details/:id",
                element: <Service_details />,
            },
        ],
    },
]);