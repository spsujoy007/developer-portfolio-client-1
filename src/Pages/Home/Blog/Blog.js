import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Fade } from 'react-reveal';
import { Link } from 'react-router-dom';
import CommonHeading from '../../../Components/CommonHeading/CommonHeading';
import Loader from '../../../Components/Loader/Loader';
import useTitle from '../../../MyHooks/useTitle';
import BlogCard from './BlogCard';
import { useState } from 'react';
import { usePagination } from '../../../Hooks/usePagination';
import Pagination from '../../../Hooks/Pagination';

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

    const [firstPage, setFirstPage] = useState(0);
    const [lastPage, setLastPage] = useState(6);

    // const stateMent = {setFirstPage, setLastPage, firstPage, lastPage};

    const pages = [];
    const numofpage = Math.ceil(blogs.length / 6);
    for(let i = 0; i < numofpage; i++ )
    {
        pages.push({num: i+1})
    }
    
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
                    blogs.slice(firstPage, lastPage).map(blog => <BlogCard
                        key={blog._id}
                        blog={blog}
                        refetch={refetch}
                    ></BlogCard>)
                }
            </div>

            {/* pagination start //////////////////////////////////////////////////////// */}
            <div className='flex justify-center'>
            
            <div className='flex items-center mt-5 gap-2'>
                <button onClick={() => {
                        if(lastPage > 6){
                            setFirstPage(firstPage-6)
                        setLastPage(lastPage - 6)
                        }
                }} className='rounded-md border-2 bg-[#3e825e] border-[#2E4A3B] text-white py-2 px-4 '>Previous</button>

                <div className='flex gap-1 '>
                {
                    pages.map(({num}) => <button
                        onClick={() => {
                            setFirstPage(num*6 - 6)
                            setLastPage(6*num)
                        }}
                        key={num} 
                        className={`${firstPage / 6+1 === num ? 'bg-[#181818] border-black':'bg-[#3e825e] border-[#2E4A3B]'} rounded-md border-2  text-white py-2 px-4`}
                     >
                        {num}
                     </button>)
                }
                </div>

                <button onClick={() => {
                        if(firstPage < blogs.length-6){
                            setFirstPage(firstPage+6)
                        setLastPage(lastPage+6)
                        }
                }} className='rounded-md border-2 bg-[#3e825e] border-[#2E4A3B] text-white py-2 px-4 '>Next</button>
            </div>
            </div>
            {/* pagination end ////////////////////////////////////////////////////////// */}
            {/* <Pagination onPage='6' datas={blogs.length} stateMent={stateMent}></Pagination> */}

            </div>
            </div>
        </div>
        
    );
};

export default Blog;