import React from 'react';
import html from '../../../assets/tools/html.png'
import CSS from '../../../assets/tools/css.png'
import Bootstrap from '../../../assets/tools/bootstrap.png'
import Tailwind from '../../../assets/tools/tailwind.png'
import JS from '../../../assets/tools/js.png'
import react from '../../../assets/tools/react.png'
import Express from '../../../assets/tools/express.png'
import Mongo from '../../../assets/tools/mongodb.png'
import metarialui from '../../../assets/tools/metarialui.png'
import nodejs from '../../../assets/tools/nodejs.webp'
import git from '../../../assets/tools/git.png'
import firebase from '../../../assets/tools/firebase.png'
import vercel from '../../../assets/tools/vercel.png'
import CommonHeading from '../../../Components/CommonHeading/CommonHeading';
import SkillCard from '../SkillCard/SkillCard';


const Skills = () => {

    const myskills = [
        {id: '1', img: html, title: "Html"},
        {id: '2', img: CSS, title: "CSS"},
        {id: '3', img: JS, title: "Javascript"},
        {id: '4', img: react, title: "React JS"},
        {id: '5', img: Mongo, title: "MongoDb"},
        {id: '6', img: firebase, title: "Firebase"},
        {id: '7', img: Bootstrap, title: "Bootstrap"},
        {id: '8', img: Tailwind, title: "Tailwind"},
        {id: '9', img: metarialui, title: "Metarial UI"},
        {id: '10', img: nodejs, title: "Node JS"},
        {id: '11', img: Express, title: "Express JS"},
        {id: '12', img: git, title: "Git"},
        {id: '13', img: vercel, title: "Vercel"}
    ]

    return (
        <div className='md:px-20 px-5 pb-10' id='skills'>
            <CommonHeading>My Skills</CommonHeading>
            <p className='text-xl text-white py-5'>Languages, framework and tools:</p>
            
            <div className='grid grid-cols-1 md:grid-cols-4 gap-5'>
            {
                myskills.map(skill => <SkillCard 
                    key={skill.id}
                    skill={skill}
                ></SkillCard>)
            }
            </div>
        </div>
    );
};

export default Skills;