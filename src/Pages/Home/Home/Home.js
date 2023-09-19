import React from 'react';
import useTitle from '../../../MyHooks/useTitle';
import AboutSection from '../AboutSection/AboutSection';
import GraphicSkill from '../OtherWorks/GraphicSkill/GraphicSkill';
import ProfileBio from '../ProfileBio/ProfileBio';
import Projects from '../Projects/Projects';
import ReviewSection from '../ReviewSection/ReviewSection';
import Skills from '../Skills/Skills';
import { FaFacebook, FaGithub, FaLinkedin, FaPhoneAlt, FaTwitter } from 'react-icons/fa';
import { AiTwotoneMail } from 'react-icons/ai';

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
                        <a className='commonbtn p-2 mx-1 rounded-full hover:text-sky-500' target='blank' href='https://github.com/spsujoy007'><FaGithub></FaGithub></a>
                        <a className='commonbtn p-2 mx-1 rounded-full hover:text-sky-500' target='blank' href='https://www.facebook.com/spsujoy07'><FaFacebook></FaFacebook></a>
                        <a className='commonbtn p-2 mx-1 rounded-full hover:text-sky-500' target='blank' href='https://www.linkedin.com/in/spsujoy/'><FaLinkedin></FaLinkedin></a>
                        <a className='commonbtn p-2 mx-1 rounded-full hover:text-sky-500' target='blank' href="tel:+8801859342364"><FaPhoneAlt></FaPhoneAlt></a>
                        <a className='commonbtn p-2 mx-1 rounded-full hover:text-sky-500' target='blank' href='https://twitter.com/spsujoy007'><FaTwitter></FaTwitter></a>
                        <a className='commonbtn p-2 mx-1 rounded-full hover:text-sky-500' target='blank' href='mailto: sujoypaul728@gmail.com'><AiTwotoneMail></AiTwotoneMail></a>
                    </div>
                </div>
        </div>
    );
};

export default Home;