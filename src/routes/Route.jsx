import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../page/Home";
import Products_details from "../page/home/Products_details";
import Service_details from "../page/home/Service_details";
import AllCartProducts from "../page/AllCartProducts";
import Checkout from "../page/Checkout";
import PaymentSuccess from "../page/PaymentSuccess";
import NewsDetails from "../page/home/NewsDetails";
import Shop from "../page/shop/Shop";
import Contact from "../page/contact/Contact";
import About from "../page/About/About";


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
                path: "shop",
                element: <Shop />
            },
            {
                path: "shop/product-details/:id",
                element: <Products_details />,
            },
            {
                path: "all-cart-products",
                element: <AllCartProducts />,
            },
            {
                path: "checkout",
                element: <Checkout />,
            },
            {
                path: "payment-success",
                element: <PaymentSuccess />,
            },

            {
                path: "service-details/:id",
                element: <Service_details />,
            },
            {
                path: "news",
                element: <NewsDetails />,
            },
            {
                path: "contact",
                element: <Contact />
            },
            {
                path: "about",
                element: <About />
            }

        ],
    },
]);