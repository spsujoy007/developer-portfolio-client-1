import React from 'react';
import profiledp from '../../../assets/profiledp.jpg'

const ProfileBio = () => {
    return (
        <div className='flex md:flex-row flex-col'>
            {/* for left image */}
            <div className='flex justify-center items-center px-20'>
            <div className="avatar">
                <div className="w-full rounded-full ring ring-success ring-offset-base-100 ring-offset-2">
                    <img src={profiledp} alt='' />
                </div>
            </div>
            </div>

        <div className='flex-1'>
            <h1 className='text-4xl font-semibold uppercase text-white'>Hi! <br />
                <span cls>I am <span className='text-info'>sujoy paul</span></span>
                <br />
                <span cls>WEB-DEVELOPER</span>
            </h1>
            <p>
               Hi! I am Sujoy paul. I am a passionate full stack Web Developer. I have already created many Project with 1+ years of experience with modern technologies like React, Tailwind CSS, Node js, Mongo DB, Express JS, Bootstrap etc..
            </p>
        </div>

        </div>
    );
};

export default ProfileBio;