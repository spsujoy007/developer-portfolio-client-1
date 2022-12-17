import React, { useState } from 'react';
//project images
// import img1 from '../../../assets/projectimg/puranbazar.png'
// import img2 from '../../../assets/projectimg/travellian.png'
// import img3 from '../../../assets/projectimg/deepcoder.png'

//languages and tools
// import Tailwind from '../../../assets/tools/tailwind.png'
// import react from '../../../assets/tools/react.png'
// import Mongo from '../../../assets/tools/mongodb.png'
// import firebase from '../../../assets/tools/firebase.png'
// import Bootstrap from '../../../assets/tools/bootstrap.png'
// import html from '../../../assets/tools/html.png'
// import CSS from '../../../assets/tools/css.png'
// import Express from '../../../assets/tools/express.png'
// import JS from '../../../assets/tools/js.png'
// import metarialui from '../../../assets/tools/metarialui.png'
// import nodejs from '../../../assets/tools/nodejs.webp'
// import git from '../../../assets/tools/git.png'
// import vercel from '../../../assets/tools/vercel.png'
import CommonHeading from '../../../Components/CommonHeading/CommonHeading';
import ProjectCard from '../ProjectCard/ProjectCard';
import { Fade } from 'react-reveal';
import { useQuery } from '@tanstack/react-query';
import Loader from '../../../Components/Loader/Loader';

const Projects = () => {

    // const projects = [
    //     {
    //         id: 1,
    //         title: 'Puran bazar',
    //         image: img1,
    //         tools: [
    //             {img: react, title: 'React JS'},
    //             {img: Mongo, title: 'MongoDb'},
    //             {img: firebase, title: 'Firebase'},
    //             {img: Tailwind, title: 'Tailwind'},
    //             {img: vercel, title: 'Vercel'},
    //         ],
    //         demolink: 'https://puran-bazar-resale.web.app/',
    //         codelink: 'https://github.com/spsujoy007/puran-bazar-client-12',
    //         details: `

    //         `
    //     },
    //     {
    //         id: 2,
    //         title: 'Travellian',
    //         image: img2,
    //         tools: [
    //             {img: react, title: 'React JS'},
    //             {img: Mongo, title: 'MongoDb'},
    //             {img: firebase, title: 'Firebase'},
    //             {img: Tailwind, title: 'Tailwind'},
    //             {img: vercel, title: 'Vercel'},
    //         ],
    //         demolink: 'https://travellian-client-007.web.app/',
    //         codelink: 'https://github.com/spsujoy007/Travellian-web-client-11'
    //     },
    //     {
    //         id: 3,
    //         title: 'Deep Coder',
    //         image: img3,
    //         tools: [
    //             {img: react, title: 'React JS'},
    //             {img: firebase, title: 'Firebase'},
    //             {img: Tailwind, title: 'Tailwind'},
    //             {img: vercel, title: 'Vercel'},
    //         ],
    //         demolink: 'https://deep-coder-knowledge.web.app/',
    //         codelink: 'https://github.com/spsujoy007/deep-coder-knowledge-client-10'
    //     }
    // ]

    const {data: projects = [], refetch, isLoading } = useQuery({
        queryKey: ['projects'],
        queryFn: async() => {
            const res = await fetch(`https://developer-portfolio-server-1v9wycpxj-spsujoy007.vercel.app/projects`);
            const data = await res.json()
            return data
        }
    })
    refetch()

    if(isLoading){
        <Loader></Loader>
    }

    return (
        <Fade bottom>
            <div className='px-5 py-20' id='projects'>
            <CommonHeading>Projects</CommonHeading>
            <p className='text-center mb-10 text-base-100'>An accomplished individual with a powerful background in <span className='text-sky-500'>React, JavaScript, HTML and CSS, Express JS, Node
JS, Tailwind CSS, and MongoDB,</span> I feel within the power of the web and have an intense want to be told the way
to improve the web' absolute core practicality and to even be concerned in its future development. He conjointly
incorporates a superb understanding of the terribly latest <span>Programming tricks.</span></p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    projects.map(project => <ProjectCard
                        key={project.id}
                        project={project}
                    ></ProjectCard>)
                }
            </div>
                <div>
                    {/* <ProjectDetails project={project}></ProjectDetails> */}
                </div>
        </div>
        </Fade>
    );
};

export default Projects;