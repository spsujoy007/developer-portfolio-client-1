import React from 'react';
//project images
import img1 from '../../../assets/projectimg/puranbazar.png'
import img2 from '../../../assets/projectimg/travellian.png'
import img3 from '../../../assets/projectimg/deepcoder.png'

//languages and tools
import Tailwind from '../../../assets/tools/tailwind.png'
import react from '../../../assets/tools/react.png'
import Mongo from '../../../assets/tools/mongodb.png'
import firebase from '../../../assets/tools/firebase.png'
// import Bootstrap from '../../../assets/tools/bootstrap.png'
// import html from '../../../assets/tools/html.png'
// import CSS from '../../../assets/tools/css.png'
// import Express from '../../../assets/tools/express.png'
// import JS from '../../../assets/tools/js.png'
// import metarialui from '../../../assets/tools/metarialui.png'
// import nodejs from '../../../assets/tools/nodejs.webp'
// import git from '../../../assets/tools/git.png'
import vercel from '../../../assets/tools/vercel.png'
import CommonHeading from '../../../Components/CommonHeading/CommonHeading';
import ProjectCard from '../ProjectCard/ProjectCard';

const Projects = () => {

    const projects = [
        {
            id: 1,
            title: 'Puran bazar',
            image: img1,
            tools: [
                {img: react, title: 'React JS'},
                {img: Mongo, title: 'MongoDb'},
                {img: firebase, title: 'Firebase'},
                {img: Tailwind, title: 'Tailwind'},
            ]
        },
        {
            id: 2,
            title: 'Travellian',
            image: img2,
            tools: [
                {img: react, title: 'React JS'},
                {img: Mongo, title: 'MongoDb'},
                {img: firebase, title: 'Firebase'},
                {img: Tailwind, title: 'Tailwind'},
            ]
        },
        {
            id: 3,
            title: 'Deep Coder',
            image: img3,
            tools: [
                {img: react, title: 'React JS'},
                {img: firebase, title: 'Firebase'},
                {img: Tailwind, title: 'Tailwind'},
                {img: vercel, title: 'Vercel'},
            ]
        }
    ]

    return (
        <div className='px-20 py-20'>
            <CommonHeading>Projects</CommonHeading>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {
                    projects.map(project => <ProjectCard
                        key={project.id}
                        project={project}
                    ></ProjectCard>)
                }
            </div>
        </div>
    );
};

export default Projects;