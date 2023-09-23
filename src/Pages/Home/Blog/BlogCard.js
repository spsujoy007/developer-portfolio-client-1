import React, { useState } from 'react';
import { FaCheckCircle, FaThumbsUp } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import './BlogCard.css'

const BlogCard = ({blog, refetch}) => {
    // const [like, setLike] = useState(0);
    const [showDetail, setShowDetail] = useState(false)
    const {title, _id, adminimg, adminName, blogimg, description, likes} = blog;
    const likevalue = localStorage.getItem(`${_id}`)
    const [ifLiked, setIfLiked] = useState(likevalue)
    const navigate= useNavigate()

    const handleLike = () => {
        refetch()
        localStorage.setItem(`${_id}`, 'liked')
        const getlikevalue = localStorage.getItem(`${_id}`)
        setIfLiked(getlikevalue)
        
        fetch(`https://developer-portfolio-server.vercel.app/likeblog?id=${_id}`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({'condition': true})
        })
        .then(res => res.json())
        .then(data => {
            refetch()
        })
        refetch()
    }

    const handleDeleteLike = () => {
        refetch()
        localStorage.removeItem(`${_id}`)
        const getlikevalue = localStorage.getItem(`${_id}`)
        setIfLiked(getlikevalue)

        fetch(`https://developer-portfolio-server.vercel.app/likeblog?id=${_id}`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({'condition': false})
        })
        .then(res => res.json())
        .then(data => {
            refetch()
        })
        refetch()
    }

    return (
        <div className="card card-compact bg-[#fbf6e4] shadow-xl rounded-xl">
  <div className="card-body min-h-[100px] max-w-[400px]">
       

    <div className='flex gap-2 items-center tooltip' data-tip={`Author & admin ${adminName}`}>
            <div className="avatar relative">
                <div className="w-8 rounded-full">
                    <img src={adminimg} alt={adminName}/>
                </div>
                 <div className='absolute ml-5 rounded-full p-px bg-white'>
                    <FaCheckCircle className='animate-pulse text-sky-600'></FaCheckCircle>
                 </div>
            </div>
            <h2 className='text-md uppercase'>{adminName}</h2>
        </div>

    <figure>
        <div className='imgEffect rounded-xl overflow-hidden'>
            <img className='image ' loading='lazy' src={blogimg} alt={title.slice(0, 15)} />
        </div>
    </figure>
        <h2 className="card-title text-[#FE634E] py-2">{title.slice(0, 30)}</h2>
        <div className='px-2 rounded-xl min-h-[40px]'>
    {
        showDetail ? <>
        <button className='text-left rounded-lg' onClick={() => {
            // setShowDetail(!showDetail)
            navigate(`/blog/${_id}`)
        }
        }>
            <p>{description}</p>
            </button></>
            :
            <p className=' text-gray-800'>{description.length > 80 ? <span>{description.slice(0, 80)}...
            <button onClick={() => setShowDetail(!showDetail)} className="text-[#2B4B36] font-semibold">See more</button> </span> :
            <span>{description}</span>}
            </p>
        }
    </div>
    <div className="card-actions justify-between items-center mt-2">
        {/* <h2 className='flex items-center'><BiTimeFive className='mr-1'></BiTimeFive> {date}</h2> */}
        <div>
            {
                ifLiked === 'liked' ?
                <button onClick={handleDeleteLike} className='flex items-center gap-x-2 text-lg p-2 rounded-xl hover:bg-[#ff644f78] hover:text-sky-500 bg-white text-[#FF644F] outline-none '><FaThumbsUp></FaThumbsUp> Liked {likes}</button>
                :
                <button onClick={handleLike} className='flex items-center gap-x-2 text-lg p-2 rounded-xl hover:bg-[#ff644f33] hover:text-[#FF644F]  text-black outline-none '><FaThumbsUp></FaThumbsUp> Like {likes}</button>
            }
        </div>
    <Link to={`/blog/${_id}`}>
        <button className="px-2 py-px bg-[#FF644F] rounded-full transition-all ease-in text-white text-lg hover:bg-[#FFA61B] ">See Post</button>
      </Link>
        
        </div>

  </div>

  
</div>
    );
};

export default BlogCard;