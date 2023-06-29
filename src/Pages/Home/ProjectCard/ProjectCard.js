import React, { useState } from 'react';
import { FaCode, FaInfoCircle, FaLaptop } from 'react-icons/fa';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import ProjectDetails from '../ProjectDetails/ProjectDetails';

const ProjectCard = ({project, handleDetailpage}) => {
    const {image, title, tools, codelink, demolink, _id} = project
    // const detailProject = {image, title, tools}

    return (
        <div className='p-3 bg-white rounded-xl shadow-lg'>
            <div className=''>
                <img className='rounded-xl w-full shadow-lg' src={image} alt={title} />
            </div>
            <div>
                <div className='flex justify-between items-center py-3'>
                    <h2 className='text-xl text-black mt-2 font-semibold uppercase py-2'>{title}</h2>
                    <Link to={`/project/${_id}`}>
                        <button className='btn btn-xs px-5 btn-outline btn-sky-500 rounded-full'> <FaInfoCircle className='mr-2'></FaInfoCircle>view details</button>
                    </Link>
                </div>
                <div className='grid md:grid-cols-3 grid-cols-2 gap-x-2 gap-y-2'>
                    {
                        tools.map((tool, i) => <div className='cursor-pointer hover:bg-sky-200 flex items-center px-2 py-2 rounded-full bg-sky-100 text-white' key={i}>
                            <img className='w-5 h-5 mr-2' src={tool.img} alt={tool.title} />
                            <p className='text-sky-500 text-sm font-semibold '>{tool.title}</p>
                        </div>)
                    }
                </div>


                <div className='flex justify-end gap-x-2 mt-6'>
                    <a target="blank" href={codelink}><button className='hover:bg-sky-600 px-4 py-2 bg-sky-500 text-semibold text-white rounded-md flex items-center'>CODE <FaCode className='ml-2'></FaCode></button></a>

                    <a target="blank" href={demolink}>
                    <button className='hover:bg-sky-600 px-4 py-2 bg-sky-500 text-semibold text-white rounded-md flex items-center'>LIVE DEMO <FaLaptop className='ml-2'></FaLaptop></button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;