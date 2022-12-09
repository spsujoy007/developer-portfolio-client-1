import React from 'react';
import AboutSection from '../AboutSection/AboutSection';
import ProfileBio from '../ProfileBio/ProfileBio';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div id='home'>
                <ProfileBio></ProfileBio>
                <AboutSection></AboutSection>
                <Skills></Skills>
        </div>
    );
};

export default Home;