import React, { useState } from 'react';
import { BsFileEarmarkImage, BsFillBookmarkStarFill } from "react-icons/bs";

const AddProject = () => {
    // codelink demolink details id image title tools
    //codelink details tools

    const [livePhoto, setLivePhoto] = useState(null);
    const [cardTitle, setCardTitle] = useState('Add New Project')

    return (
        <div>
            <div className='px-5'>
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
                            <label className="label"><span className="label-text text-white">Code link</span></label>
                            <input required name="codelink" type="text" className="input input-bordered w-full"  placeholder="https://github.com/spsujoy007/spsujoy007" />
                    </div> 
                    <div>
                        <div>
                            <input type="checkbox" className="checkbox checkbox-primary checkbox-md" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default AddProject;