import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Fade } from 'react-reveal';
import { FaCode, FaDotCircle, FaLaptop, FaUndoAlt } from 'react-icons/fa';
import ReviewSection from '../ReviewSection/ReviewSection';

const ProjectDetails = () => {
    const project = useLoaderData();
    const { id, image, title, tools, codelink, demolink, details } = project;
    const alldetails = details.split('. ');

    // useNotification()

    return (
        <div className="py-20 px-2 ">
            <Fade bottom>
            <div className="card bg-white shadow-xl rounded-xl mx-auto md:max-w-[1240px]">
  <figure><img className='md:w-full' loading='lazy' src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {title}
      <div className="badge badge-secondary">Project no: {id}</div>
    </h2>
    
    <div>
        {alldetails.length && alldetails.map((detail, i) => <div key={i} className='flex mb-2 items-start gap-x-2'>
            {/* <FaDotCircle className='text-xl'></FaDotCircle> */}
            <span className='text-xl'>{i+1}. </span>
            <h2 className=''> {detail}</h2>
        </div>)}
    </div>
    
    <h2 className='text-xl text-sky-500 font-semibold mt-6 uppercase'>Language, tools & other:</h2>
    <div className='grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-x-2 gap-y-2'>
                {
                    tools.map((tool, i) => <div key={i} title={tool.title} className='cursor-pointer hover:bg-sky-200 flex items-center md:px-3 px-1 py-2 rounded-lg bg-sky-100 text-white'>
                        <img className='w-5 h-5 mx-2' src={tool.img} alt={tool.title} />
                        <p className='text-sky-500 font-semibold '>{tool.title}</p>
                    </div>)
                }
    </div>

    <div className="card-actions justify-end mt-10">
    <a target="blank" href={codelink}><button className='hover:bg-sky-600 px-4 py-2 bg-sky-500 text-semibold text-white rounded-md flex items-center'>CODE <FaCode className='ml-2'></FaCode></button></a>

    <a target="blank" href={demolink}>
    <button className='hover:bg-sky-600 px-4 py-2 bg-sky-500 text-semibold text-white rounded-md flex items-center'>LIVE DEMO <FaLaptop className='ml-2'></FaLaptop></button>
    </a>
    <Link to='/projects'>
        <button className='hover:bg-sky-600 px-4 py-3 bg-sky-500 text-semibold text-white rounded-md flex items-center'><FaUndoAlt></FaUndoAlt> </button>
    </Link>
    </div>
  </div>

        <div>
                <ReviewSection
                    project={project}
                ></ReviewSection>
        </div>
</div>
        </Fade>

        </div>
    );
};

export default ProjectDetails;