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
                loader: async ({params}) => await fetch(`http://localhost:5000/blogs/${params.id}`),
                element: <DetailBlog></DetailBlog>
            },
            {
                path: "/contact",
                element: <ContactForm></ContactForm>
            },
            {
                path: "/project/:id",
                loader: async ({params}) => await fetch(`http://localhost:5000/project/${params.id}`),
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
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/addskill',
                element: <AddSkills></AddSkills>
            },
            {
                path: '/dashboard/addblog',
                element: <AddBlog></AddBlog>
            },
            {
                path: '/dashboard/myblogs',
                element: <MyBlogs></MyBlogs>
            },
        ]
    }
])