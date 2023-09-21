import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Fade } from 'react-reveal';
import { Link } from 'react-router-dom';
import CommonHeading from '../../../Components/CommonHeading/CommonHeading';
import Loader from '../../../Components/Loader/Loader';
import useTitle from '../../../MyHooks/useTitle';
import BlogCard from './BlogCard';
import { useState } from 'react';

const Blog = () => {
    const [waiting, setWaiting] = useState(false)
    useTitle('Blog')
//     const userName = process.env.REACT_APP_username;
//   const userPass = process.env.REACT_APP_ADMIN_pass;

    setTimeout(() => setWaiting(false), 1200)

    const {data: blogs = [], refetch, isLoading} = useQuery({
        queryKey: ['blogs'],
        queryFn: async() => {
            const res = await fetch(`https://developer-portfolio-server.vercel.app/blogs`);
            const data = await res.json();
            return data;
        }
    });

    
    if(isLoading || waiting){
        return <div className='mx-auto md:max-w-[500px] min-h-screen'>
            <Loader></Loader>
        </div>
    }
    refetch();
    
    return (
        
        // <div data-aos="fade-up" data-aos-duration="1000" data-aos-easing="linear" >
        <div  >
            <div className='py-16  blogbgimg '>
            <div className='md:max-w-[1240px] mx-auto px-3 md:px-0'>
            <CommonHeading>Blog<Link to='/dashboard' className='text-gray-900 text-xs'>.</Link></CommonHeading>
            <div className='flex flex-wrap gap-5 justify-center'>
                {
                    blogs.map(blog => <BlogCard
                        key={blog._id}
                        blog={blog}
                        refetch={refetch}
                    ></BlogCard>)
                }
            </div>
            </div>
            </div>
        </div>
        
    );
};

export default Blog;