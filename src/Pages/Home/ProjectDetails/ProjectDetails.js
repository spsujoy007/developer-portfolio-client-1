import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Fade } from 'react-reveal';
import { FaCode, FaDotCircle, FaLaptop } from 'react-icons/fa';

const ProjectDetails = () => {
    const project = useLoaderData();
    // console.log(project);
    const { _id, id, image, title, tools, codelink, demolink, details } = project;
    const alldetails = details.split('.');

    return (
        <div className="py-20">
            <Fade bottom>
            <div className="card bg-white shadow-xl ">
  <figure><img className='md:w-1/2' src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {title}
      <div className="badge badge-secondary">Project no: {id}</div>
    </h2>
    
    <ol>
        {alldetails.map(detail => <li className='flex'><FaDotCircle className='mr-2'></FaDotCircle> {detail}</li>)}
    </ol>
    
    <h2 className='text-xl text-sky-500 font-semibold mt-6 uppercase'>Languages & tools:</h2>
    <div className='grid md:grid-cols-3 lg:grid-cols-5 grid-cols-2 gap-x-2 gap-y-2'>
                    {
                        tools.map((tool, i) => <div title={tool.title} className='cursor-pointer hover:bg-sky-200 flex items-center px-5 py-2 rounded-lg bg-sky-100 text-white' key={i}>
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
    </div>
  </div>
</div>
        </Fade>
        </div>
    );
};

export default ProjectDetails;