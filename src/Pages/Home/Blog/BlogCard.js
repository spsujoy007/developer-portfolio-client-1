import React from 'react';
import { FaMarker } from 'react-icons/fa';
import './BlogCard.css'

const BlogCard = ({blog}) => {

    const {title, _id, adminimg, adminName, blogimg, description} = blog;

    return (
        <div className="card card-compact bg-base-100 shadow-xl">
    <figure>
        <div className='imgEffect'>
            <img className='image' src={blogimg} alt="Shoes" />
        </div>
    </figure>
  <div className="card-body">

        <div className='flex gap-2 items-center'>
            <div className="avatar">
                <div className="w-10 rounded-full">
                    <img src={adminimg} alt={adminName}/>
                    <FaMarker></FaMarker>
                </div>
            </div>
            <h2 className='text-lg uppercase'>{adminName}</h2>
        </div>

    <h2 className="card-title">{title}</h2>
    <p>{description.slice(0, 100)}...</p>
    <div className="card-actions justify-end">
      <button className="btn btn-info">More details</button>
    </div>
  </div>
</div>
    );
};

export default BlogCard;