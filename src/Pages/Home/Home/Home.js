import React from 'react';
import useTitle from '../../../MyHooks/useTitle';
import AboutSection from '../AboutSection/AboutSection';
import ContactForm from '../ContactForm/ContactForm';
import ProfileBio from '../ProfileBio/ProfileBio';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';

const Home = () => {
    useTitle('Home')
    return (
        <div id='home'>
                <ProfileBio></ProfileBio>
                <AboutSection></AboutSection>
                <Skills></Skills>
                <Projects></Projects>
        </div>
    );
};

export default Home;