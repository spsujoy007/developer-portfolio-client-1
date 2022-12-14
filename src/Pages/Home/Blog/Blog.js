import { useQuery } from '@tanstack/react-query';
import React from 'react';
import RubberBand from 'react-reveal/RubberBand';
import { Link } from 'react-router-dom';
import CommonHeading from '../../../Components/CommonHeading/CommonHeading';
import Loader from '../../../Components/Loader/Loader';
import useTitle from '../../../MyHooks/useTitle';
import BlogCard from './BlogCard';

const Blog = () => {
    useTitle('Blog')

    const {data: blogs = [], refetch, isLoading} = useQuery({
        queryKey: ['blogs'],
        queryFn: async() => {
            const res = await fetch(`http://localhost:5000/blogs`);
            const data = await res.json();
            return data;
        }
    });

    refetch();

    if(isLoading){
        return <Loader></Loader>
    }
    

    return (
        
        <div className='py-16'>
            <CommonHeading>Blog<Link to='/dashboard-6a4588sgww52' className='text-gray-900 text-xs'>.</Link></CommonHeading>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    blogs.map(blog => <BlogCard
                        key={blog._id}
                        blog={blog}
                    ></BlogCard>)
                }
            </div>
        </div>
        
    );
};

export default Blog;