import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import Layout from "../components/layout/Layout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {index:true, element: <Home/>},
            {path:"about", element:<About/>},
            {path:"projects", element:<Projects/>},
            {path:"skills", element:<Skills/>},
            {path:"contact", element:<Contact/>},
            {path:"*", element:<NotFound/>},
        ],
    },
])