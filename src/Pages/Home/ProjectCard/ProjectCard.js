import React from 'react';
import { FaCode, FaInfoCircle, FaLaptop } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ProjectCard = ({project, handleDetailpage}) => {
    const {image, title, tools, codelink, demolink, _id} = project
    // const detailProject = {image, title, tools}

    return (
        <div className='p-3 bg-white rounded-xl shadow-lg mx-auto w-[380px]'>
            <h2 className='text-xl text-black mb-2 font-semibold uppercase py-2'>{title}</h2>
            <div className=''>
                <img className='rounded-xl w-full shadow-lg' src={image} alt={title} />
            </div>
            <div>
                <div className='flex justify-between items-center py-3'>
                    <Link to={`/project/${_id}`} className='w-full'>
                        <button className='flex items-center justify-center border-[2px] text-center px-5 py-1 w-full  btn-sky-500 rounded-md hover:bg-[#39253C] bg-transparent duration-150 text-[#39253C] hover:text-white'> <FaInfoCircle className='mr-2'></FaInfoCircle>view details</button>
                    </Link>
                </div>
                <div className='flex flex-wrap'>
                    {
                        tools.map((tool, i) => <div key={i} className='cursor-pointer md:w-[32%] w-[48%] hover:bg-sky-200  text-center rounded-full bg-sky-100 text-white p-1 m-[2px]'>
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