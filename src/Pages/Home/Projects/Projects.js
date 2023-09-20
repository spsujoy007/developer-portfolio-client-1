import React from 'react';
import ContainItem from '../../../Components/Container/ContainItem';
import CommonHeading from '../../../Components/CommonHeading/CommonHeading';
import ProjectCard from '../ProjectCard/ProjectCard';
import { useQuery } from '@tanstack/react-query';
import Loader from '../../../Components/Loader/Loader';
import useTitle from '../../../MyHooks/useTitle';
import { useLocation, useNavigate } from 'react-router-dom';
import './Projects.css'

const Projects = () => {
    useTitle('PROJECTS OF')
    const navigate = useNavigate()

    const Ptitle = useLocation()

    const {data: projects = [], refetch, isLoading } = useQuery({
        queryKey: ['projects'],
        queryFn: async() => {
            const res = await fetch(`https://developer-portfolio-server.vercel.app/projects`);
            const data = await res.json()
            return data
        }
    })
    refetch()

    if(isLoading){
        return <div className='mx-auto md:max-w-[500px]'>
                    <Loader></Loader>
                </div>
    }

    return (
        <div >
            <ContainItem>
            <div className={`px-5  bglineleft ${Ptitle.pathname === '/projects' && "py-16 md:max-w-[1240px] mx-auto"}`} id='projects'>
            <CommonHeading>Projects</CommonHeading>
            <p className='text-center mb-10 text-base-100'>An accomplished individual with a powerful background in <span className='text-sky-500'>
                React, JavaScript, HTML and CSS, Express JS, Node
                JS, Tailwind CSS, and MongoDB,</span> I feel within the power of the web and have an intense want to be told the way to improve the web' absolute core practicality and to even be concerned in its future development. He conjointly
                incorporates a superb understanding of the terribly latest <span>Programming tricks.</span></p>
            <div className='flex flex-wrap gap-6'>
                {
                    Ptitle.pathname === '/' ?
                    <>
                    {
                    projects.slice(0, 3).map(project => <ProjectCard
                        key={project.id}
                        project={project}
                    ></ProjectCard>)
                    }
                    </>
                    :
                    <>
                    {
                    projects.map(project => <ProjectCard
                        key={project.id}
                        project={project}
                    ></ProjectCard>)
                }
                    </>
                }

                
            </div>
                {
                    Ptitle.pathname  === '/' &&
                    <div className='flex justify-center w-full mt-5'>
                        <button onClick={() => navigate('/projects')} className='text-sky-500 bg-[#17333a] hover:bg-[#214953] md:px-20 px-10 py-2 rounded-md'>view more</button>
                    </div>
                }
        </div>
            </ContainItem>
        </div>
    );
};

export default Projects;