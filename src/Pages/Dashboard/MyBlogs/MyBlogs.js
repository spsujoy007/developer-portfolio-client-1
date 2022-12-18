import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';
import { AiFillDelete } from 'react-icons/ai';
import Loader from '../../../Components/Loader/Loader';

const MyBlogs = () => {

    const {data: myblogs = [], refetch, isLoading} = useQuery({
        queryKey: ['myblogs'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/blogs`);
            const data = await res.json();
            return data
        }
    })


    if(isLoading){return <Loader></Loader>}

    const handleDeleteBlog = (id) => {
        const confirmation = window.confirm('Note: Once you have delete, its cant be undone!')
        if(confirmation){
            fetch(`http://localhost:5000/blogs?id=${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                toast.success('Blog deleted successful')
                refetch();
            }
            console.log(data);
        })

        }
    }

    refetch();


    return (
        <div className='px-5'>
            <div className="overflow-x-auto">
  <table className="table w-full">    
    <thead>
      <tr>
        <th></th>
        <th>Blog Image</th>
        <th>Title</th>
        <th>Description</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>     
      {
        myblogs.map((myblog, i) => <tr key={myblog._id} >
        <th>{i+1}</th>
        <td>
            <div className="avatar">
                <div className="w-24 rounded">
                    <img src={myblog.blogimg} alt='blogimg'/>
                </div>
            </div>
        </td>
        <td>{myblog.title.length > 20 ? <p>{myblog.title.slice(0, 20)}...</p> : <p>{myblog.title}</p> }</td>
        <td>{myblog.description.slice(0, 30)}...</td>
        <td>
            <button onClick={() => handleDeleteBlog(myblog._id)} className='btn btn-sm btn-info hover:btn-error'><AiFillDelete className='mr-2'></AiFillDelete> Delete</button>
        </td>
      </tr> )
      }     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyBlogs;