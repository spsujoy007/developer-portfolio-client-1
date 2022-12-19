import React from 'react';
import { useLoaderData } from 'react-router-dom';

const DetailBlog = () => {
    const blog = useLoaderData();
    const {title, description, adminName, adminimg, blogimg, date} = blog

    return (
        <div className='py-20 mb-36'>
            <div style={{height: "300px",overflow: 'hidden'}} className=" rounded-2xl">
                <img className='w-full' src={blogimg} alt={title} />
            </div>
            <div className=' md:mt-[-2%] mt-[1%] ml-[7%] flex items-center'>
                <img className='rounded-full w-20 md:w-36 ring ring-white ring-offset-base-100 ring-offset-2' src={adminimg} alt=""  />
                <div className='ml-5'>
                    <h3 className='text-2xl text-white uppercase '>{adminName}</h3>
                    <p className='text-base-200'>Post time: ({date})</p>
                </div>
            </div>

            <div className='mt-10 px-2 md-px-0'>
                <div className='py-2'>
                    <h1 className='text-2xl text-base-200 py-2 uppercase'>About Blog:</h1> <hr />
                </div>
                <div>
                    <h5 className='text-white text-lg'>{description}</h5>
                </div>
            </div>
        </div>
    );
};

export default DetailBlog;