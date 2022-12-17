import React from 'react';

const AddBlog = () => {
    const imageHostKey = process.env.REACT_APP_imgbb_key;

    const handlePostBlog = (event) => {
        event.preventDefault();
        const form = event.target;
        const picture = form.image.files[0];
        const name = form.name.value;
        const title = form.title.value;
        const description = form.description.value;
        console.log(picture, name, title, description)

        const formData = new FormData()
        formData.append('image', picture);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(pictureData => {
            console.log(pictureData);
            const blogcontent = {
                title,
                blogimg: pictureData.data.url,
                adminimg: 'https://i.ibb.co/Y39y0Zz/6b0-MATk-Q-400x400.jpg',
                adminName: name,
                description
            }
        })
    }

    return (
        <div className='px-5'>
            <form onSubmit={handlePostBlog}>
                <div className='p-5 border border-dashed border-sky-500 border-2 grid md:grid-cols-2 grid-cols-1 rounded-xl gap-10'>
                
                {/* left side input */}
                <div>
                <div className="form-control">
                    <label className="label"><span className="label-text text-white">Blog Image</span></label>
                    <input name="image" type="file" className="file-input file-input-bordered w-full" />
                </div>

                <div className="form-control mt-5">
                    <label className="label"><span className="label-text text-white">Author name</span></label>
                    <input required name="name" type="text" className="input input-bordered w-full" disabled defaultValue='Sujoy Paul'/>
                </div>
                </div>

                {/* right side input  */}
                <div>
                <div className="form-control">
                    <label className="label"><span className="label-text text-white">Blog title</span></label>
                    <input required name="title" type="text" className="input input-bordered w-full"  placeholder="blog title" />
                </div>

                <div className="form-control mt-5">
                    <label className="label"><span className="label-text text-white">Add description</span></label>
                    <textarea required name="description" type="text" className="input input-bordered w-full h-36 py-3"  placeholder="blog description" />
                </div>

                <div className='py-3 flex justify-end'>
                    <button type='submit' className='btn btn-info w-full'>Post</button>
                </div>
                </div>

                </div>


            </form>
        </div>
    );
};

export default AddBlog;