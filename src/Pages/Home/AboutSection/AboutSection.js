import React from 'react';
import CommonHeading from '../../../Components/CommonHeading/CommonHeading';
import './AboutSection.css'

const AboutSection = () => {
    return (
        <div id='aboutsection my-20 '>
            <CommonHeading>About</CommonHeading>

            <div className='flex mx-20 gap-10 text-lg'>
                <div className='flex-1'>
                    <p className='text-white flex text-justify'>
                    Developing software for the world of intent is something I'm passionate about and I'm dedicated to making the world of intent easy and affordable for everyone. Developing software for the world of intent is something I'm passionate about and I'm dedicated to making the world of intent easy and affordable for everyone.
                    </p>
                </div>

                <div className='text-info rightborder'>
                    I am a Web developer who cares about <br /> the code and the people.
                </div>
            </div>
        </div>
    );
};

export default AboutSection;