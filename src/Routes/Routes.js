import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AboutSection from "../Pages/Home/AboutSection/AboutSection";
import Home from "../Pages/Home/Home/Home";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <AboutSection></AboutSection>
            }
        ]
    }
])