import React, { useState } from 'react';
import { BsFileEarmarkImage, BsFillBookmarkStarFill } from "react-icons/bs";
import useTitle from '../../../MyHooks/useTitle';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
// import metarialui from '../../../assets/tools/metarialui.png'
// import git from '../../../assets/tools/git.png'
// import vercel from '../../../assets/tools/vercel.png'

const AddProject = () => {
    useTitle('Add Project')
    const html = 'https://i.ibb.co/VC8x2RM/html.png'
    const css = 'https://i.ibb.co/09Q4tsP/css.png'
    const bootstrap = 'https://i.ibb.co/wBhBZFF/bootstrap.png'
    const tailwind = 'https://i.ibb.co/1by4CGK/tailwind.png'
    const react = 'https://i.ibb.co/48Kw6zg/react.png'
    const js = 'https://i.ibb.co/Jjrm70h/js.png'
    const mongo = 'https://i.ibb.co/2SCD4Z2/mongodb.png'
    const nodejs = 'https://i.ibb.co/1nRV2k1/5968322.png'
    const firebase = 'https://i.ibb.co/vcrbK9t/firebase.png'
    const nextJS = 'https://i.ibb.co/02VFwTh/nextjs-logo.png'
    const express = 'https://i.ibb.co/2Zd8xt3/expressjs-logo-icon-169185.png'
    
    const [projectType, setProjectType] = useState(true);
    const [livePhoto, setLivePhoto] = useState(null);
    const [getImage, setGetImage] = useState('');
    const [cardTitle, setCardTitle] = useState('Add New Project')
    const [selectedTool, setSelectedTool] = useState([]); // array of selected tool;
    const imageHost = 'ff3809d2742608d297787e8303a0cf38';

    const {data: projects = [], refetch } = useQuery({
        queryKey: ['projects'],
        queryFn: async() => {
            const res = await fetch(`https://developer-portfolio-server.vercel.app/projects`);
            const data = await res.json()
            return data
        }
    })

    const handleSubmitForm = (event) =>{
        refetch()
        event.preventDefault()
        const form = event.target;

        const id = form.project_no.value;
        const title = form.title.value;
        // const image = getImage;
        const tools = selectedTool;
        const demolink = form.demolink.value;
        const codelink = form.codelink.value;
        const details = form.details.value;
        const project_type = projectType ? "react" : "html";
        
        const pictures = form.image?.files[0];
        console.log(pictures)
        const formData = new FormData()
        const url = `https://api.imgbb.com/1/upload?key=${imageHost}`
        formData.append('image', pictures);
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(pictureData => {
            const projectZip = {
                title, 
                image: pictureData.data.url,
                codelink, 
                demolink, 
                id, 
                tools, 
                details, 
                project_type
            }
            
            fetch('https://developer-portfolio-server.vercel.app/addProject', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(projectZip)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success("Project added")
                setTimeout(() => {window.location.reload()}, 2500)
            })
            
        })

    }

    const sTool = (toolData) =>{ //for selecting languages and tools
        setSelectedTool([...selectedTool, toolData]);
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
                    }} className='hidden' id='Pimage' name='image' type="file" accept='' />
                </div>

                <div className='w-[60%] pr-5'>
                    <div className='flex items-center gap-2'>
                        <input type="checkbox" className="toggle toggle-lg" onClick={() => setProjectType(!projectType)} />
                        <h2 className='text-white'>{projectType ? '"React" based project' : '"Html" based project'}</h2>
                    </div>

                    <div className="form-control flex mt-5">
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
                        <input defaultValue={projects.length + 1} required name="project_no" type="number" className="input input-bordered w-full"  />
                    </div> 
                    
                    {/* select language and tool path ********************************************** */}
                    <div className='bg-white p-5 mt-5 rounded-xl flex items-center gap-5'>
                        <div className='flex items-center gap-3'>
                            <input 
                                onClick={() => {sTool({title: 'Html', img: html})}} 
                            name="html" id='html' type="checkbox" className="checkbox checkbox-primary checkbox-md" />
                            <label className='text-gray-800 font-semibold' htmlFor="html">HTML 5</label>
                        </div>

                        <div className='flex items-center gap-3'>
                            <input 
                                onClick={() => {sTool({title: 'Css', img: css})}}
                            name="css" id='css' type="checkbox" className="checkbox checkbox-primary checkbox-md" />
                            <label className='text-gray-800 font-semibold' htmlFor="css">CSS 3</label>
                        </div>

                        <div className='flex items-center gap-3'>
                            <input 
                                onClick={() => {sTool({title: 'Bootstrap', img: bootstrap})}}
                            name="bootstrap" id='Bootstrap' type="checkbox" className="checkbox checkbox-primary checkbox-md" />
                            <label className='text-gray-800 font-semibold' htmlFor="Bootstrap">Bootstrap</label>
                        </div>

                        <div className='flex items-center gap-3'>
                            <input 
                                onClick={() => {sTool({title: 'Tailwind', img: tailwind})}}
                            name="Tailwind" id='Tailwind' type="checkbox" className="checkbox checkbox-primary checkbox-md" />
                            <label className='text-gray-800 font-semibold' htmlFor="Tailwind">Tailwind</label>
                        </div>

                        <div className='flex items-center gap-3'>
                            <input 
                                onClick={() => {sTool({title: 'JavaScript', img: js})}}
                            name="javascript" id='javascript' type="checkbox" className="checkbox checkbox-primary checkbox-md" />
                            <label className='text-gray-800 font-semibold' htmlFor="javascript">Javascript</label>
                        </div>

                        <div className='flex items-center gap-3'>
                            <input 
                                onClick={() => {sTool({title: 'React', img: react})}}
                            name="react" id='react' type="checkbox" className="checkbox checkbox-primary checkbox-md" />
                            <label className='text-gray-800 font-semibold' htmlFor="react">React Js</label>
                        </div>


                        <div className='flex items-center gap-3'>
                            <input 
                                onClick={() => {sTool({title: 'Mongo DB', img: mongo})}}
                            name="mongodb" id='Mongodb' type="checkbox" className="checkbox checkbox-primary checkbox-md" />
                            <label className='text-gray-800 font-semibold' htmlFor="Bootstrap">MongoDB</label>
                        </div>

                        <div className='flex items-center gap-3'>
                            <input 
                                onClick={() => {sTool({title: 'Node JS', img: nodejs})}}
                            name="nodejs" id='Nodejs' type="checkbox" className="checkbox checkbox-primary checkbox-md" />
                            <label className='text-gray-800 font-semibold' htmlFor="Bootstrap">Node JS</label>
                        </div>

                        <div className='flex items-center gap-3'>
                            <input 
                                onClick={() => {sTool({title: 'Firebase', img: firebase})}}
                            name="Firebase" id='Firebase' type="checkbox" className="checkbox checkbox-primary checkbox-md" />
                            <label className='text-gray-800 font-semibold' htmlFor="Firebase">Firebase</label>
                        </div>

                        <div className='flex items-center gap-3'>
                            <input 
                                onClick={() => {sTool({title: 'NextJS', img: nextJS})}}
                            name="NextJS" id='NextJS' type="checkbox" className="checkbox checkbox-primary checkbox-md" />
                            <label className='text-gray-800 font-semibold' htmlFor="NextJS">Next JS</label>
                        </div>

                        <div className='flex items-center gap-3'>
                            <input 
                                onClick={() => {sTool({title: 'Express', img: express})}}
                            name="Express" id='Express' type="checkbox" className="checkbox checkbox-primary checkbox-md" />
                            <label className='text-gray-800 font-semibold' htmlFor="Express">Express js</label>
                        </div>
                        

                    </div>

                    <div className="form-control flex mt-5">
                        <label className="label"><span className="label-text text-white">Details about project</span></label>
                        <textarea name="details" type="text" className="input input-bordered h-[150px] w-full"  placeholder="project description..." />
                    </div>



                    <div className='flex justify-end mt-5'>
                        <button className='bg-sky-500 text-6xl px-10 w-full py-5 rounded-lg text-white hover:bg-sky-600 duration-300 select-none'>Let's throw the ball to add project</button>
                    </div>
                </div>

            </div>
            </form>
        </div>
        </div>
    );
};

export default AddProject;