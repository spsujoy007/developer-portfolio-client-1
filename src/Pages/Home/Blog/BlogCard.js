import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './BlogCard.css'
import { BiTimeFive } from "react-icons/bi";

const BlogCard = ({blog}) => {

    const {title, _id, adminimg, adminName, blogimg, description, date} = blog;

    return (
        <Link to={`/blog/${_id}`}>
        <div className="card card-compact bg-white shadow-xl rounded-none">
  <div className="card-body">

        <div className='flex gap-2 items-center tooltip' data-tip={`Author & admin ${adminName}`}>
            <div className="avatar relative">
                <div className="w-10 rounded-full">
                    <img src={adminimg} alt={adminName}/>
                </div>
                 <div className='absolute ml-7 rounded-full p-px bg-white'>
                    <FaCheckCircle className=' text-sky-600'></FaCheckCircle>
                 </div>
            </div>
            <h2 className='text-lg uppercase'>{adminName}</h2>
        </div>

    <div className='p-2 rounded-xl'>
    <h2 className="card-title">{title}</h2>
    <p className=' text-gray-800'>{description.length > 100 ? <span>{description.slice(0, 100)}...
    <Link to={`/blog/${_id}`} className="text-blue-500 font-semibold">See more</Link> </span> :
    <span>{description}</span>}
    </p>
    </div>
    
    <div className="card-actions justify-between items-center mt-2">
    <h2 className='flex items-center'><BiTimeFive className='mr-1'></BiTimeFive> {date}</h2>
    
      {/* <Link to={`/blog/${_id}`}>
        <button className="px-6 py-1 bg-sky-600 rounded-full transition-all ease-in text-white text-lg hover:bg-black uppercase">see post</button>
      </Link> */}
    </div>
  </div>

  <figure>
        <div className='imgEffect'>
            <img className='image' src={blogimg} alt="Shoes" />
        </div>
    </figure>
</div>
        </Link>
    );
};

export default BlogCard;