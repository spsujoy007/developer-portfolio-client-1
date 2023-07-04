import { useQuery } from '@tanstack/react-query';
import { FaEye } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { TiTick } from "react-icons/ti";
import React, { useState } from 'react';
import loadingIcon from '../../../assets/loading-gif.gif'
import { toast } from 'react-hot-toast';

const Reviews = () => {
    const [loading, setLoading] = useState(false)

    const {data: reviews = [], refetch} = useQuery({
        queryKey: ["reviews"],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/getReviews`, {method: 'GET'})
            const data = res.json()
            return data
        }
    })

    const handleActionAccept = (id) => {
        setLoading(true)
        fetch(`http://localhost:5000/editreview?id=${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                setLoading(false)
                refetch()
            }
        })
    }


    const handleActionDelete = (id) => {
        const confirm = window.confirm('Are you want to delete?')
        if(confirm){
            fetch(`http://localhost:5000/deleteReview?id=${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount > 0){
                toast.success("deleted")
                refetch()
            }
        })
        }
    }

    return (
        <div className='px-20 pt-10'>
            <h1 className='text-3xl text-white mb-2'>check for reviews</h1>

            <div>
            <div className="overflow-x-auto w-full">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Project name</th>
        <th>Review</th>
        <th>full_review</th>
        <th>Accept</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
        {
            reviews.map(({_id, projectDoc, describe, review_status}, idx) => <tr key={_id} className="">
            <th>{idx+1}</th>
            <td>{projectDoc?.title}</td>
            <td>{describe?.slice(0, 50)}...</td>
            <td className='text-center'>
                <button className='bg- p-2 bg-sky-500 text-white rounded-full'><FaEye></FaEye></button>
            </td>
                {
                    review_status !== 'accepted' ? 
                <td>
                    <button onClick={() => handleActionAccept(_id)} className='text-2xl p-2'><TiTick></TiTick></button>
                </td>
                :
                <td className='text-green-500'>Accepted</td>
                }
            <td>
                <button onClick={() => handleActionDelete(_id)} className='text-2xl p-2'><RxCross2></RxCross2></button>
            </td>
          </tr> )
        }
    </tbody>
  </table>
</div>
            </div>
        </div>
    );
};

export default Reviews;