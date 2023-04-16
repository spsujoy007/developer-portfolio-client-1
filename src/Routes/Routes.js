import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import AddBlog from "../Pages/Dashboard/AddBlog/AddBlog";
import AddSkills from "../Pages/Dashboard/AddSkills/AddSkills";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import MyBlogs from "../Pages/Dashboard/MyBlogs/MyBlogs";
import AboutSection from "../Pages/Home/AboutSection/AboutSection";
import Blog from "../Pages/Home/Blog/Blog";
import ContactForm from "../Pages/Home/ContactForm/ContactForm";
import DetailBlog from "../Pages/Home/DetailBlog/DetailBlog";
import Home from "../Pages/Home/Home/Home";
import ProjectDetails from "../Pages/Home/ProjectDetails/ProjectDetails";
import Projects from "../Pages/Home/Projects/Projects";
import Skills from "../Pages/Home/Skills/Skills";
import ErrorPage from "../Pages/Shared/ErrorPage/ErrorPage";
import AddProject from "../Pages/Dashboard/AddProject/AddProject";
import AdminProtect from "../Components/PrivetRoute/AdminProtect";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/about",
                element: <AboutSection></AboutSection>
            },
            {
                path: "/skills",
                element: <Skills></Skills>
            },
            {
                path: "/projects",
                element: <Projects></Projects>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/blog/:id",
                loader: async ({params}) => await fetch(`https://developer-portfolio-server.vercel.app/blogs/${params.id}`),
                element: <DetailBlog></DetailBlog>
            },
            {
                path: "/contact",
                element: <ContactForm></ContactForm>
            },
            {
                path: "/project/:id",
                loader: async ({params}) => await fetch(`https://developer-portfolio-server.vercel.app/project/${params.id}`),
                element: <ProjectDetails></ProjectDetails>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/dashboard',
                element: <AdminProtect><Dashboard></Dashboard></AdminProtect>
            },
            {
                path: '/dashboard/addskill',
                element: <AdminProtect><AddSkills></AddSkills></AdminProtect>
            },
            {
                path: '/dashboard/addProject',
                element: <AdminProtect><AddProject></AddProject></AdminProtect>
            },
            {
                path: '/dashboard/addblog',
                element: <AdminProtect><AddBlog></AddBlog></AdminProtect>
            },
            {
                path: '/dashboard/myblogs',
                element: <AdminProtect><MyBlogs></MyBlogs></AdminProtect>
            },
        ]
    }
])