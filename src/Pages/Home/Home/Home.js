import React from 'react';
import AboutSection from '../AboutSection/AboutSection';
import ContactForm from '../ContactForm/ContactForm';
import ProfileBio from '../ProfileBio/ProfileBio';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import { Fade } from 'react-reveal';

const Home = () => {
    return (
        <div id='home'>
                <ProfileBio></ProfileBio>
                <AboutSection></AboutSection>
                <Skills></Skills>
                <Projects></Projects>
                <ContactForm></ContactForm>
        </div>
    );
};

export default Home;