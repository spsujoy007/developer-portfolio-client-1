import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../MyHooks/useTitle';
import { toast } from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';
// import userImg from '../../../assets/user.png'
import { RiArrowRightUpLine } from "react-icons/ri";

const DetailBlog = () => {
    const [commentBody, setCommentBody] = useState('')
    const [nameCondition, setNameCondition] = useState(false)
    const blog = useLoaderData();
    const {_id, title, description, adminName, adminimg, blogimg, date, sourse} = blog
    useTitle(title.slice(0, 15))
    const currentdate = new Date()


    const {data: blogComments = [] , refetch} = useQuery({
        queryKey: ["blogComments"],
        queryFn: async () => {
            const res = await fetch(`https://developer-portfolio-server.vercel.app/blogcomments?blogid=${_id}`)
            const data = res.json()
            return data
        }
    })
    // console.log(blogComments)


    const handleAddComment = () => {

        if(commentBody.length > 0){
            const comment = {
                blog_id: _id,
                comment: commentBody,
                date: currentdate
            }
    
            fetch(`https://developer-portfolio-server.vercel.app/addcommentblog`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(comment)
            })
            .then(res => res.json())
            .then(data => {
                if(data.acknowledged){
                    setCommentBody('')
                    toast.success('Comment added')
                    setNameCondition(false)
                    refetch()
                }
            })
        }
    }

    return (
        <div className='py-20 mb-36  mx-auto commentsbg'>
            <div className='mx-auto md:max-w-[1240px] detailsBg'>
            

            <div className='mt-10 px-2 md-px-0'>
                <div className='py-2'>
                    <h1 className='text-xl text-base-200 uppercase  border-gray-500'>About Blog</h1>
                    <p className='text-gray-300 text-xs border-b-[1px] pb-2'>Posted in: {date.split(',')[0]}</p>
                </div>
                <div className='mt-5'>
                    <h1 className={`${title.length < 50 ? 'md:text-6xl text-3xl' : 'md:text-3xl text-3xl'} text-white mb-5`}>{title}:</h1>
                    <h5 className='text-white text-lg'>{description}</h5>
                </div>
            </div>

            <div className=' mt-3 flex justify-start '>
            <div className="rounded-2xl p-3 md:w-[450px] bg-[#eaeaea]">
                <img className='rounded-2xl ' src={blogimg} alt={title} />
                <p className='text-[#3f9ab3] py-3 text-center'></p>
            </div>
            </div>
                    <div className='my-4 flex gap-2'>
                    {
                        sourse && <a target='_blank' rel="noreferrer" className='font-normal flex  gap-x-1 bg-[#152e35] text-sky-500  items-center text-sm px-2 justify-center py-1 rounded-full' href={sourse}> Learn more <RiArrowRightUpLine></RiArrowRightUpLine> </a>
                    }
                    <a target='_blank' rel="noreferrer" className='font-normal flex   gap-x-1 bg-[#15351e] text-[#4ced7a] items-center text-sm px-2 justify-center py-1 rounded-full' href={sourse}>Open image <RiArrowRightUpLine></RiArrowRightUpLine> </a>
                    </div>

            <div className='bg-[#1e4752] p-4 mt-20 rounded-md  commentsbg'>
            <div className='flex items-center p-2 '>
                <img className='rounded-full w-10 border-[3px] border-white' src={adminimg} alt=""  />
                <div className='ml-5'>
                    <h3 className='text-xl text-white uppercase my-0'>{adminName}</h3>
                    <p className='text-gray-300 text-xs'>What's in your mind?</p>
                </div>
            </div>

            <div className=' bg-[#ededed] rounded-md w-full p-2 '>
                {nameCondition && <p className='mb-2'>You can type your name in the comment like <span className='font-bold'>"Name: John smith"</span></p>}
                <textarea 
                value={commentBody}
                onChange={(e) => {setCommentBody(e.target.value)}}
                onKeyDown={() => setNameCondition(true)}
                className='w-full min-h-[105px] rounded-md outline-none p-2 bg-[#ffffff]' name="" placeholder={`Share your opinion about ${title.slice(0, 30)}...`} id=""></textarea>
                <div className='w-full flex justify-end items-end'>
                    <button onClick={handleAddComment} className='bg-sky-500 w-full rounded-md px-5 py-1 uppercase text-white'>Post</button>
                </div>
            </div>

            

            <div className='px-3 mt-8 '>
                <p className='text-white mb-2'>Comment's</p>
                {
                    blogComments.length ? blogComments.slice(0, 5).map(comment => <div className='mb-3 text-lg' key={comment._id}>
                        <div className='flex gap-2 items-end'>
                            <img className='w-[50px] h-[50px] rounded-full' src={`https://api.dicebear.com/7.x/thumbs/svg?seed=Mimi`} alt="user" />
                            <div className='chat chat-start w-full'>
                                <p className='bg-[#ffffff]  min-w-[130px] chat-bubble  text-black rounded-md'>{comment.comment.length > 300 ? <>{comment.comment.slice(0, 300)}...</> : comment.comment}</p>
                            </div>
                        </div>
                    </div>)
                    :
                    <div>
                        <p className='text-gray-300 text-center'>No comment's yet. You can make a comment. 😀</p>
                    </div>
                }
            </div>
            </div>
            </div>
        </div>
    );
};

export default DetailBlog;