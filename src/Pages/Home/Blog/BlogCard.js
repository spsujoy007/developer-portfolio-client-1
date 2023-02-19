import React, { useState } from 'react';
import { FaCheckCircle, FaThumbsUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './BlogCard.css'

const BlogCard = ({blog}) => {
    // const [like, setLike] = useState(0);
    const [showDetail, setShowDetail] = useState(false)
    const {title, _id, adminimg, adminName, blogimg, description} = blog;
    const likevalue = localStorage.getItem(`${_id}`)
    const [ifLiked, setIfLiked] = useState(likevalue)
    // console.log(_id, getlikevalue)

    const handleLike = () => {
        localStorage.setItem(`${_id}`, 'liked')
        const getlikevalue = localStorage.getItem(`${_id}`)
        setIfLiked(getlikevalue)

        fetch(`http://localhost:5000/likeblog?id=${_id}&value=true`, {
            method: "PUT"
        })
        .then(res => res.json())
        .then(data => {console.log(data)})
    }

    const handleDeleteLike = () => {
        localStorage.removeItem(`${_id}`)
        const getlikevalue = localStorage.getItem(`${_id}`)
        setIfLiked(getlikevalue)

        fetch(`http://localhost:5000/likeblog?id=${_id}&value=false`, {
            method: "PUT"
        })
        .then(res => res.json())
        .then(data => {console.log(data)})
    }

    return (
        <div className="card card-compact bg-white shadow-xl rounded-xl">
  <div className="card-body">
        <div className='flex gap-2 items-center tooltip' data-tip={`Author & admin ${adminName}`}>
            <div className="avatar relative">
                <div className="w-10 rounded-full">
                    <img src={adminimg} alt={adminName}/>
                </div>
                 <div className='absolute ml-7 rounded-full p-px bg-white'>
                    <FaCheckCircle className='animate-pulse text-sky-600'></FaCheckCircle>
                 </div>
            </div>
            <h2 className='text-lg uppercase'>{adminName}</h2>
        </div>

    <div className='p-2 rounded-xl min-h-[120px]'>
    <h2 className="card-title">{title}</h2>
    {
        showDetail ? <>
        <button className='text-left hover:bg-slate-50 rounded-lg' onClick={() => setShowDetail(!showDetail)}>
            <p>{description}</p>
        </button></>
        :
        <p className=' text-gray-800'>{description.length > 80 ? <span>{description.slice(0, 80)}...
    <button onClick={() => setShowDetail(!showDetail)} className="text-blue-500 font-semibold">See more</button> </span> :
    <span>{description}</span>}
    </p>
    }
    </div>
    
    <div className="card-actions justify-between items-center mt-2">
        {/* <h2 className='flex items-center'><BiTimeFive className='mr-1'></BiTimeFive> {date}</h2> */}
        <div>
            {
                ifLiked === 'liked' ?
                <button onClick={handleDeleteLike} className='flex items-center gap-x-2 text-lg p-2 rounded-xl hover:bg-sky-100 hover:text-sky-500 bg-white text-sky-500 outline-none '><FaThumbsUp></FaThumbsUp> Liked</button>
                :
                <button onClick={handleLike} className='flex items-center gap-x-2 text-lg p-2 rounded-xl hover:bg-sky-100 hover:text-sky-500 bg-white text-black outline-none '><FaThumbsUp></FaThumbsUp> Like</button>
            }
        </div>
    <Link to={`/blog/${_id}`}>
        <button className="px-2 py-px bg-sky-600 rounded-full transition-all ease-in text-white text-lg hover:bg-black uppercase">see post</button>
      </Link>
        
        </div>

  </div>

  <figure>
        <div className='imgEffect'>
            <img className='image' src={blogimg} alt="Shoes" />
        </div>
    </figure>
</div>
    );
};

export default BlogCard;