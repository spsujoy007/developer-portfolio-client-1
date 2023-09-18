import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../MyHooks/useTitle';
import { toast } from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';
import userImg from '../../../assets/user.png'
import { IconName, RiArrowRightUpLine } from "react-icons/ri";

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
        <div className='py-20 mb-36 w-[85%] mx-auto'>
            <div>
            <div  className="flex justify-start rounded-2xl">
                <img className='w-full' src={blogimg} alt={title} />
            </div>
            <div className='flex items-center p-2 bg-[#ededed] rounded-b-xl'>
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
                    <div className='mt-4'>
                    {
                        sourse && <a target='_blank' rel="noreferrer" className='font-normal underline px-5 py-1 gap-x-1 bg-[#152e35] text-sky-500 flex items-center' href={sourse}> Learn more <RiArrowRightUpLine></RiArrowRightUpLine> </a>
                    }
                    </div>
                </div>
            </div>

            <div className='bg-[#183841] p-4 mt-20 rounded-md'>

            <div className=' bg-[#ededed] rounded-md  p-2'>
                {nameCondition && <p className='mb-2'>You can type your name in the comment like <span className='font-bold'>"Name: John smith"</span></p>}
                <textarea 
                value={commentBody}
                onChange={(e) => {setCommentBody(e.target.value)}}
                onKeyDown={() => setNameCondition(true)}
                className='w-full h-[80px] rounded-md outline-none p-2 bg-[#ffffff]' name="" placeholder={`Share your opinion about ${title.slice(0, 30)}...`} id=""></textarea>
                <div className='h-[30px] flex justify-end'>
                    <button onClick={handleAddComment} className='bg-sky-500 rounded-md px-5 py-1 uppercase text-white'>Send</button>
                </div>
            </div>

            <div className='mt-12'>
                <p className='text-white mb-2'>comment's</p>
                {
                    blogComments.slice(0, 5).map(comment => <div className='mb-3 text-lg' key={comment._id}>
                        <div className='flex gap-2 items-end'>
                            <img className='w-[30px] h-[30px] bg-white rounded-full p-1' src={userImg} alt="user" />
                            <div className='chat chat-start w-full'>
                                <p className='bg-[#ffffff] w-full chat-bubble  text-black rounded-md'>{comment.comment.length > 300 ? <>{comment.comment.slice(0, 300)}...</> : comment.comment}</p>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            </div>
            </div>
        </div>
    );
};

export default DetailBlog;