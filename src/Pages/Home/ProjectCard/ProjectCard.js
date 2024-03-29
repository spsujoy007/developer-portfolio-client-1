import React from 'react';
import { FaCode, FaInfoCircle, FaLaptop } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// 0e2025b8
const ProjectCard = ({project, handleDetailpage}) => {
    const {image, title, tools, details, codelink, demolink, _id} = project
    // const detailProject = {image, title, tools}

    return (
        <div className='max-w-[550px] relative  overflow-hidden bg-white  mainCard z-[50]'>

            <div className='w-full h-full rounded-lg overflow-hidden absolute z-10 cardOverFLowUp  flex items-center justify-center'>
                <div className='mt-[150px]'>
                    {/* <div className='w-[80%] mx-auto '>
                        <h1 className={`md:text-3xl text-2xl title text-center  text-white ${details.length < 1 && 'mb-10' }`}>{title}</h1>
                        <p className='text-center'>{details.slice(0,60)}</p>
                    </div> */}

                    <div className='flex items-center justify-center flex-wrap gap-5 mt-4 px-1 py-2 rounded-md bg-[#0e2126b9] w-full '>
                        <div className='md:flex items-center justify-center flex-wrap gap-5 hidden'>
                            <a target='_blank' rel="noreferrer" className='text-md flex items-center gap-2 text-white hover:text-[#35C3E3] hover:border-[#35C3E3] duration-200 px-3 py-1 rounded-md border-[1px]' href={codelink}><FaCode></FaCode> Code link</a>
                            <a target='_blank' rel="noreferrer" className='text-md flex items-center gap-2 text-white px-3 py-1 rounded-md border-[1px] hover:text-[#35C3E3] hover:border-[#35C3E3] duration-200' href={demolink}><FaLaptop></FaLaptop> Live view</a>
                        </div>

                        <Link to={`/project/${_id}`} className='text-md detailBtn flex items-center px-3 gap-2 text-white  py-1 rounded-full border-[1px] hover:text-[#35C3E3] hover:border-[#35C3E3] duration-200' href={codelink}><FaInfoCircle></FaInfoCircle><span>Detail</span></Link>
                        
                    </div>
                </div>
            </div>

            <div className='rounded-lg overflow-hidden border-[1px] border-gray-500'>
                <img src={image} alt="" />
            </div>

            <div className='h-full  w-full absolute z-10 md:top-5 top-0 cardOverFLowDown flex items-center justify-center'>
                <div className='text-center'>
                    <h1 className='md:text-3xl text-2xl title mb-3'>{title}</h1>
                    {tools.map((t,i) => <span className={`text-center uppercase ${i%2===0 ? 'text-black': 'text-[#104f60] font-bold'}`}>{t.title}{i !==tools.length-1 && ','} </span>)}
                    <p className='text-center text-white text-sm mt-5 md:block hidden'>Hover to see</p>
                    <p className='text-center text-white text-sm mt-5 block md:hidden'>click to see</p>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;