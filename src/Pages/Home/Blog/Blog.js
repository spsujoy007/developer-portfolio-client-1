import { useQuery } from '@tanstack/react-query';
import React from 'react';
import CommonHeading from '../../../Components/CommonHeading/CommonHeading';
import Loader from '../../../Components/Loader/Loader';
import BlogCard from './BlogCard';

const Blog = () => {

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
        <div className='pt-16'>
            <CommonHeading>Total Blog: {blogs.length}</CommonHeading>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
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