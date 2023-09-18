import React, { useState } from 'react';
import { BsFileEarmarkImage, BsFillBookmarkStarFill } from "react-icons/bs";

const AddProject = () => {
    // codelink demolink details id image title tools
    //codelink details tools

    const [livePhoto, setLivePhoto] = useState(null);
    const [getImage, setGetImage] = useState('');
    const [cardTitle, setCardTitle] = useState('Add New Project')

    const handleSubmitForm = (event) =>{
        event.preventDefault()
        const form = event.target;
        const image = getImage;
        const title = form.title.value;
        const demolink = form.demolink.value;
        const codelink = form.codelink.value;
        const id = form.project_no.value;

        console.log(title, codelink, demolink, id, image)
    }

    return (
        <div>
            <div className='px-5'>
            <form onSubmit={handleSubmitForm}>
            <div className='overflow-hidden bg-gray-800 w-full rounded-xl'>
                <div className='bg-gray-900 py-2 px-5 rounded-t-xl flex gap-4 justify-between items-center'>
                    <div className='flex items-center gap-2'>
                        <div className='w-4 h-4 rounded-full bg-sky-500'></div>
                        <div className='w-4 h-4 rounded-full bg-red-500'></div>
                        <div className='w-4 h-4 rounded-full bg-yellow-500'></div>
                    </div>
                    <h2 className='text-2xl text-right font-semibold text-white uppercase'>Project : {cardTitle}</h2>
                    <div className='md:block hidden text-2xl text-white'>
                        <BsFillBookmarkStarFill></BsFillBookmarkStarFill>
                    </div>
                </div>

                <div className='flex items-center p-10'>

                {/* photo upload system  */}
                <div className='w-[40%] flex justify-center'>
                    <label className={`${livePhoto && 'selectedDiv'}`} htmlFor="Pimage">
                    <div data-tip="Add Image" className={`tooltip tooltip-primary tooltip-top rounded-xl border-dashed h-[170px] w-[300px] flex justify-center overflow-hidden  border-4 border-gray-600`}>
                        {
                            livePhoto ?
                            <div className='flex items-center justify-center'>
                                <figure>
                                    <img name='image' className='w-full rounded-xl' src={livePhoto} alt="" />
                                </figure>
                            </div>
                            :
                            <div className='flex items-center justify-center'>
                                <BsFileEarmarkImage className='text-[50px] text-gray-600'></BsFileEarmarkImage>
                            </div>
                        }
                    </div>
                    </label>
                    <input onChange={(e) => {
                        const photourl = URL.createObjectURL(e.target.files[0])
                        setLivePhoto(photourl)
                        setGetImage(e.target.value)
                    }} className='hidden' id='Pimage' type="file" accept='' />
                </div>

                <div className='w-[60%] pr-5'>
                    <div className="form-control flex">
                        <label className="label"><span className="label-text text-white">Project title</span></label>
                        <input onBlur={(e) => setCardTitle(e.target.value)} required name="title" type="text" className="input input-bordered w-full"  placeholder="project title" />
                    </div>
                    <div className="form-control">
                        <label className="label"><span className="label-text text-white">Demo link</span></label>
                        <input required name="demolink" type="url" className="input input-bordered w-full"  placeholder="project demo link: https:livewebsite.com" />
                    </div>
                </div>

                </div>

                <div className='p-10'>
                    <div className="form-control flex">
                        <label className="label"><span className="label-text text-white">Code link:</span></label>
                        <input required name="codelink" type="text" className="input input-bordered w-full"  placeholder="https://github.com/spsujoy007/spsujoy007" />
                    </div> 

                    <div className="form-control flex">
                        <label className="label"><span className="label-text text-white">Project no:</span></label>
                        <input required name="project_no" type="text" className="input input-bordered w-full"  placeholder="0" />
                    </div> 
                    
                    <div className='bg-white p-5 mt-5 rounded-xl flex items-center gap-5'>
                        <div className='flex items-center gap-3'>
                            <input name="html" id='html' type="checkbox" className="checkbox checkbox-primary checkbox-md" />
                            <label className='text-gray-800 font-semibold' htmlFor="html">HTML 5</label>
                        </div>

                        <div className='flex items-center gap-3'>
                            <input name="css" id='css' type="checkbox" className="checkbox checkbox-primary checkbox-md" />
                            <label className='text-gray-800 font-semibold' htmlFor="css">CSS 3</label>
                        </div>

                        <div className='flex items-center gap-3'>
                            <input name="javascript" id='javascript' type="checkbox" className="checkbox checkbox-primary checkbox-md" />
                            <label className='text-gray-800 font-semibold' htmlFor="javascript">Javascript</label>
                        </div>

                        <div className='flex items-center gap-3'>
                            <input name="react" id='react' type="checkbox" className="checkbox checkbox-primary checkbox-md" />
                            <label className='text-gray-800 font-semibold' htmlFor="react">React Js</label>
                        </div>

                        <div className='flex items-center gap-3'>
                            <input name="bootstrap" id='Bootstrap' type="checkbox" className="checkbox checkbox-primary checkbox-md" />
                            <label className='text-gray-800 font-semibold' htmlFor="Bootstrap">Bootstrap</label>
                        </div>

                        <div className='flex items-center gap-3'>
                            <input name="mongodb" id='Mongodb' type="checkbox" className="checkbox checkbox-primary checkbox-md" />
                            <label className='text-gray-800 font-semibold' htmlFor="Bootstrap">MongoDB</label>
                        </div>

                        <div className='flex items-center gap-3'>
                            <input name="nodejs" id='Nodejs' type="checkbox" className="checkbox checkbox-primary checkbox-md" />
                            <label className='text-gray-800 font-semibold' htmlFor="Bootstrap">Node JS</label>
                        </div>

                    </div>



                    <div className='flex justify-end mt-5'>
                        <button className='bg-sky-500 text-6xl px-10 py-3 rounded-lg text-white hover:bg-sky-600 duration-300 select-none'>Let's throw</button>
                    </div>
                </div>

            </div>
            </form>
        </div>
        </div>
    );
};

export default AddProject;