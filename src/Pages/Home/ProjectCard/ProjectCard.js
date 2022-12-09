import React from 'react';
import { FaCode, FaLaptop } from 'react-icons/fa';

const ProjectCard = ({project}) => {
    const {image, title, tools} = project
    return (
        <div className='p-3 bg-white rounded-xl shadow-lg'>
            <div className=''>
                <img className='rounded-xl w-full shadow-lg' src={image} alt={title} />
            </div>
            <div>
                <h2 className='text-xl text-black mt-2 font-semibold uppercase py-2'>{title}</h2>
                <div className='grid md:grid-cols-3 grid-cols-2 gap-x-2 gap-y-2'>
                    {
                        tools.map((tool, i) => <div className='flex items-center px-2 py-1 rounded-md bg-sky-100 text-white' key={i}>
                            <img className='w-5 h-5 mr-2' src={tool.img} alt={tool.title} />
                            <p className='text-sky-500 font-semibold'>{tool.title}</p>
                        </div>)
                    }
                </div>

                <div className='flex justify-end gap-x-2 mt-6'>
                    <button className='px-4 py-2 bg-black text-white rounded-md flex items-center'>CODE <FaCode className='ml-2'></FaCode></button>
                    <button className='px-4 py-2 bg-black text-white rounded-md flex items-center'>LIVE DEMO <FaLaptop className='ml-2'></FaLaptop></button>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;