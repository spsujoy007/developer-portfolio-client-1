import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Fade } from 'react-reveal';
import { Link } from 'react-router-dom';
import CommonHeading from '../../../Components/CommonHeading/CommonHeading';
import Loader from '../../../Components/Loader/Loader';
import useTitle from '../../../MyHooks/useTitle';
import BlogCard from './BlogCard';

const Blog = () => {
    useTitle('Blog')
//     const userName = process.env.REACT_APP_username;
//   const userPass = process.env.REACT_APP_ADMIN_pass;

    const {data: blogs = [], refetch, isLoading} = useQuery({
        queryKey: ['blogs'],
        queryFn: async() => {
            const res = await fetch(`https://developer-portfolio-server.vercel.app/blogs`);
            const data = await res.json();
            return data;
        }
    });

    
    if(isLoading){
        return <div className='mx-auto md:max-w-[500px]'>
            <Loader></Loader>
        </div>
    }
    refetch();
    
    return (
        
        <div data-aos="fade-up" data-aos-duration="1000" className='py-16 min-h-screen '>
            <div className='md:max-w-[1240px] mx-auto'>
            <CommonHeading>Blog<Link to='/dashboard' className='text-gray-900 text-xs'>.</Link></CommonHeading>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
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
        
    );
};

export default Blog;