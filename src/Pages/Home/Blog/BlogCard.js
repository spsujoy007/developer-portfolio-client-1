import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import './BlogCard.css'

const BlogCard = ({blog}) => {

    const {title, _id, adminimg, adminName, blogimg, description} = blog;

    return (
        <div className="card card-compact bg-base-100 shadow-xl rounded-b-none  rounded-t-2xl">
    <figure>
        <div className='imgEffect'>
            <img className='image' src={blogimg} alt="Shoes" />
        </div>
    </figure>
  <div className="card-body">

        <div className='flex gap-2 items-center tooltip' data-tip={`Author & admin ${adminName}`}>
            <div className="avatar relative">
                <div className="w-10 rounded-full">
                    <img src={adminimg} alt={adminName}/>
                </div>
                 <div className='absolute ml-7 rounded-full p-px bg-white'>
                    <FaCheckCircle className=' text-blue-600'></FaCheckCircle>
                 </div>
            </div>
            <h2 className='text-lg uppercase'>{adminName}</h2>
        </div>

    <h2 className="card-title">{title}</h2>
    <p>{description.slice(0, 100)}...</p>
    <div className="card-actions justify-end mt-2">
      <button className="px-10 py-2 bg-sky-600 rounded-full transition-all ease-in text-white text-lg hover:bg-black">More details</button>
    </div>
  </div>
</div>
    );
};

export default BlogCard;