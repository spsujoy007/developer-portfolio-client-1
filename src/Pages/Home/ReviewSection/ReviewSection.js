import React from 'react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { FaCheckCircle } from 'react-icons/fa';

const ReviewSection = ({project}) => {
    const { _id, title } = project;
    const [rating, setRating] = useState(3);
    const [describe, setDescribe] = useState('');
    const [dark, setDark] = useState(false)
    const [getReview, setGetReview] = useState({})
    // const [loading, setLoading] = useState(true)

    const review = JSON.parse(localStorage.getItem("review_id"))?.find(r => r?.id === _id)
    
    
    
    const getName = localStorage.getItem("username")
    const [showPostedMsg, setShowPostedMsg] = useState(false)  
    
    const handlePostReview = (event) => {
        setGetReview(review)
        event.preventDefault();
        
        if(!getReview){
            localStorage.setItem("review_id", JSON.stringify([{id: '0'}]))
        }
        
        const date = new Date();    
        const form = event.target;
        const describe = form.describe.value;
        const projectDoc = project;
        const viewerName = form.viewerName.value;
        
        fetch(`https://developer-portfolio-server.vercel.app/makereview`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({describe, date, projectDoc, viewerName, rating, review_status: 'pending'})
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                toast.success(`Thanks for your feed back dear ${viewerName.length > 15 ? viewerName.slice(' ')[0] : viewerName}`)
                const getReviews = JSON.parse(localStorage.getItem("review_id"))
                const newReview = [...getReviews, {id: _id}]
                localStorage.setItem("review_id", JSON.stringify(newReview))
                localStorage.setItem("username", viewerName);
                setShowPostedMsg(true)
                form.reset()

            }
        })
    }

    return (
        <div className='mt-20 '>
            {/* <CommonHeading>Review Section</CommonHeading> */}
            {
                review?.id === _id ?
                <div className=''>
                    {showPostedMsg ? 
                        <h3 className='text-xl bg-sky-100 text-sky-500 p-3 border-l-4 border-sky-500'>Review submited dear {getName}</h3>
                    :
                    <></>
                    }
                </div>
                :
                <form onSubmit={handlePostReview} className='border-t-2 border-sky-500 pt-10 border-dashed'>
            <div className={dark ? 'bg-black p-5  text-white': 'bg-white p-5 text-black'}>
            <div className='flex justify-between items-center'>
            <div className='flex gap-2 items-center tooltip' data-tip={`Author & admin sp sujoy`}>
            <div className="avatar relative">
                <div className="w-12 rounded-full">
                    <img src="https://i.ibb.co/zm5y2Z1/275702359-154109040392904-2771545278164783547-n.jpg" alt='sujoy paul'/>
                </div>
                 <div className='absolute ml-7 rounded-full p-px bg-white'>
                    <FaCheckCircle className=' text-sky-600'></FaCheckCircle>
                 </div>
            </div>
            <div>
                <h2 className='text-lg uppercase'>Sujoy Paul</h2>
                <p className='text-md capitalize'>Web developer</p>
            </div>
            </div>
            <div>
                <label  className="swap swap-rotate">
  <input onClick={() => setDark(!dark)} type="checkbox" />
  
  <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
  <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
  
                </label>
            </div>
            </div>

            <div>
                <h4 className='mt-3'>Please rate my work</h4>
                <div className="rating">
                    <input onClick={() => setRating(1)} type="radio" name="rating-2" className={!dark ? 'mask mask-star-2 bg-yellow-400': 'mask mask-star-2 bg-sky-500'} />
                    <input onClick={() => setRating(2)} type="radio" name="rating-2" className={!dark ? 'mask mask-star-2 bg-yellow-400': 'mask mask-star-2 bg-sky-500'}  />
                    <input onClick={() => setRating(3)} type="radio" name="rating-2" className={!dark ? 'mask mask-star-2 bg-yellow-400': 'mask mask-star-2 bg-sky-500'} />
                    <input onClick={() => setRating(4)} type="radio" name="rating-2" className={!dark ? 'mask mask-star-2 bg-yellow-400': 'mask mask-star-2 bg-sky-500'} />
                    <input onClick={() => setRating(5)} type="radio" name="rating-2" className={!dark ? 'mask mask-star-2 bg-yellow-400': 'mask mask-star-2 bg-sky-500'} />
                </div>

                {/* on change rating */}
                {/* <div className={!dark ? rating >= 3 ? ' p-2 bg-blue-100 text-blue-500 border-l-4 rounded-r-lg border-blue-500 mt-2' : ' p-2 bg-red-100 text-red-500 border-l-4 rounded-r-lg border-red-500 mt-2': rating >= 3 ? ' p-2 bg-yellow-100 text-yellow-500 border-l-4 rounded-r-lg border-yellow-500 mt-2' : ' p-2 bg-red-100 text-red-500 border-l-4 rounded-r-lg border-red-500 mt-2' }>
                    <div>
                    {rating < 3 && <h3>Oppps 😢</h3> }
                    {rating === 3 && <h3>You are doing well 😄</h3> }
                    {rating === 4 && <h3>Go ahead champion 🥰</h3> }
                    {rating === 5 && <h3>You are amazing. UWU 😍</h3> }
                    </div>
                </div> */}

                <div className='mt-4'>
                    <textarea required name='describe' onChange={(e) => setDescribe(e.target.value)} maxLength={200} type="text" className='text-black pt-2 input w-full h-[120px]' placeholder={`Describe something about my project ${title}`}/> 
                    <p className='text-sm mt-0 mb-2 text-red-400'>{describe.length >= 200  && '200 characters limited'}</p>

                    <div className='flex flex-col md:flex-row justify-between'>
                        <div>
                            <input className='input w-full' name='viewerName' type="text" placeholder='Enter your name' required />
                        </div>
                    <button type='submit' className='bg-sky-500 btn btn-md mt-5 md:mt-0 text-white border-none px-10 '>
                        Post
                    </button>

                    </div>
                </div>
            </div>
            </div>
            </form>
            }
        </div>
    );
};

export default ReviewSection;