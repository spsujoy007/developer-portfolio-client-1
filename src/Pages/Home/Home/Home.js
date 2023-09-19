import React from 'react';
import useTitle from '../../../MyHooks/useTitle';
import AboutSection from '../AboutSection/AboutSection';
import GraphicSkill from '../OtherWorks/GraphicSkill/GraphicSkill';
import ProfileBio from '../ProfileBio/ProfileBio';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import { BiHomeAlt } from "react-icons/bi";
import { GrProjects } from "react-icons/gr";
import { AiFillInfoCircle } from 'react-icons/ai';
import { SiApostrophe } from "react-icons/si";
import { RiHomeFill, RiMessage3Fill } from "react-icons/ri";
const Home = () => {
    useTitle('Portfolio')
    return (
        <div id='home' className='relative'>
            <div className='md:max-w-[1240px] mx-auto'>
                <ProfileBio></ProfileBio>
                <AboutSection></AboutSection>
                <Skills></Skills>
                <Projects></Projects>
                <GraphicSkill></GraphicSkill>
            </div>
                <div className='absolute hidden md:block top-[55vh] left-2 '>
                    <div className='flex flex-col fixed text-2xl gap-y-5 text-white mt-7 justify-between md:justify-start'>
                        <div className='button'>
                            <div className='icon'><RiHomeFill></RiHomeFill></div>
                            <span>Home</span>
                        </div>
                        <div className='button'>
                            <div className='icon'><AiFillInfoCircle></AiFillInfoCircle></div>
                            <span>About</span>
                        </div>
                        <div className='button'>
                            <div className='icon'><GrProjects></GrProjects></div>
                            <span>Projects</span>
                        </div>
                        <div className='button'>
                            <div className='icon'><SiApostrophe></SiApostrophe></div>
                            <span>Blog</span>
                        </div>
                        <div className='button'>
                            <div className='icon'><RiMessage3Fill></RiMessage3Fill></div>
                            <span>Contact</span>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Home;