import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddBlog = () => {
    const [loading, setLoading] = useState(false)
    const [selectImg, setSelectImg] = useState(true);
    const [checkImage, setCheckImage] = useState('')
    

    // const imageHostKey = process.env.REACT_APP_imgbb_key;
    const imageHostKey = 'ff3809d2742608d297787e8303a0cf38';
    const navigate = useNavigate();

    const currentdate = new Date();
    const date = currentdate.toLocaleDateString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });

    const handlePostBlog = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const sourse = form.sourse.value;
        const title = form.title.value;
        const description = form.description.value;
        
        if(selectImg){
            const picture = form.image?.files[0];
            const formData = new FormData()
            const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
            formData.append('image', picture);
            fetch(url, {
                method: 'POST',
                body: formData
            })
            .then(res => res.json())
            .then(pictureData => {
                console.log(pictureData)
                setLoading(true)
                // if(pictureData.success){
                    const blogcontent = {
                        title,
                        sourse,
                        blogimg: pictureData.data.url,
                        adminimg: 'https://i.ibb.co/6Phpt7C/6b0-MATk-Q-400x400.jpg',
                        adminName: name,
                        description,
                        date,
                        likes: 0
                    }
    
                    fetch(`https://developer-portfolio-server.vercel.app/blogs`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(blogcontent)
                    })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        toast.success('Blog added. Keep rock!')
                        setLoading(false)
                        form.reset()
                        navigate('/dashboard')
                    })
                // }
            })
            .catch(err => console.error(err))
        }
        else{
            const blogcontent = {
                        title,
                        sourse,
                        blogimg: checkImage,
                        adminimg: 'https://i.ibb.co/6Phpt7C/6b0-MATk-Q-400x400.jpg',
                        adminName: name,
                        description,
                        date,
                        likes: 0
                    }
                    fetch(`https://developer-portfolio-server.vercel.app/blogs`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(blogcontent)
                    })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        toast.success('Blog added. Keep rock!')
                        setLoading(false)
                        form.reset()
                        navigate('/dashboard')
                    })
        }
    }
    

    return (
        <div className='px-5'>
            <form onSubmit={handlePostBlog}>
                <div className='p-5 border-dashed border-sky-500 border-2 grid md:grid-cols-2 grid-cols-1 rounded-xl gap-10'>
                
                {/* left side input */}
                <div>
                <div className='flex items-center gap-2'>
                    <input type="checkbox" className="toggle toggle-lg" onClick={() => setSelectImg(!selectImg)} />
                    <h2 className='text-white'>{selectImg ? 'Tap to add a link' : "Tap to select photo from file"}</h2>
                </div>
                {
                    selectImg ?
                    <div className="form-control">
                        <label className="label"><span className="label-text text-white">Blog Image</span></label>
                        <input onChange={(e) => setCheckImage(e.target.value)} name="image" type="file" className="file-input file-input-bordered w-full" />
                    </div>
                    :
                    <div className="form-control">
                        <label className="label"><span className="label-text text-white">Blog Image</span></label>
                        <input onChange={(e) => setCheckImage(e.target.value)} name="image" type="url" className="file-input file-input-bordered w-full pl-2" placeholder='Image address (url)' />
                    </div>
                }

                <div className="form-control mt-5">
                    <label className="label"><span className="label-text text-white">Author name</span></label>
                    <input required name="name" type="text" className="input input-bordered w-full" disabled defaultValue='Sujoy Paul'/>
                </div>

                <div className="form-control mt-5">
                    <label className="label"><span className="label-text text-white">Sourse</span></label>
                    <input name="sourse" type="text" className="input input-bordered w-full" placeholder='type sourse url:' />
                </div>

                {/* <div className='flex items-center justify-center md:py-20 py-6'>
                    <h1 className='uppercase text-3xl text-error font-bold'>Keep rock</h1>
                </div> */}
                </div>

                {/* right side input  */}
                <div>
                <div className="form-control">
                    <label className="label"><span className="label-text text-white">Blog title</span></label>
                    <input required name="title" type="text" className="input input-bordered w-full"  placeholder="blog title" />
                </div>

                <div className="form-control mt-5">
                    <label className="label"><span className="label-text text-white">Add description</span></label>
                    <textarea name="description" type="text" className="input input-bordered w-full h-36 py-3"  placeholder="blog description" />
                </div>

                <div className='py-3 flex justify-end'>
                    {
                        loading ? 
                        <button className='btn btn-info w-full laoding'>Posting</button>
                        :
                        <button type='submit' className='btn btn-info w-full'>Post</button>
                    }
                </div>
                </div>

                </div>


            </form>
        </div>
    );
};

export default AddBlog;