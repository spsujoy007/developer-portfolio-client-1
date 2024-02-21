import React from 'react';
import useTitle from '../../../MyHooks/useTitle';
import AboutSection from '../AboutSection/AboutSection';
import GraphicSkill from '../OtherWorks/GraphicSkill/GraphicSkill';
import ProfileBio from '../ProfileBio/ProfileBio';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';


const Home = () => {
    useTitle('Portfolio')
    return (
        <div id='home' className='relative'>
            <div className='md:max-w-[1240px] mx-auto '>
                <ProfileBio></ProfileBio>
                <AboutSection></AboutSection>
                <Skills></Skills>
                <Projects></Projects>
                <GraphicSkill></GraphicSkill>
            </div>
            
        </div>
    );
};

export default Home;