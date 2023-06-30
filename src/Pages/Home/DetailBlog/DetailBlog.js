import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../MyHooks/useTitle';

const DetailBlog = () => {
    const blog = useLoaderData();
    const {title, description, adminName, adminimg, blogimg, date} = blog
    useTitle(title.slice(0, 15))

    return (
        <div className='py-20 mb-36 w-[85%] mx-auto'>
            <div>
            <div  className="flex justify-start rounded-2xl">
                <img className='w-full' src={blogimg} alt={title} />
            </div>
            <div className='flex items-center p-2 bg-white rounded-b-xl'>
                <img className='rounded-full w-10 ring ring-white ring-offset-base-100 ring-offset-[1px]' src={adminimg} alt=""  />
                <div className='ml-5'>
                    <h3 className='text-xl text-black uppercase my-0'>{adminName}</h3>
                    <p className='text-gray-700'>Post time: ({date})</p>
                </div>
            </div>

            <div className='mt-10 px-2 md-px-0'>
                <div className='py-2'>
                    <h1 className='text-xl text-base-200 py-2 uppercase border-b-[1px] border-gray-500'>About Blog</h1>
                </div>
                <div className='mt-5'>
                    <h1 className={`${title.length < 50 ? 'text-6xl' : 'text-3xl'} text-white mb-5`}>{title}:</h1>
                    <h5 className='text-white text-lg'>{description}</h5>
                </div>
            </div>
            </div>
        </div>
    );
};

export default DetailBlog;