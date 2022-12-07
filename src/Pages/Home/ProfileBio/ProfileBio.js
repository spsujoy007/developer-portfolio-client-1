import React from 'react';
import profiledp from '../../../assets/profiledp.jpg'
import { FaFacebook, FaGithub, FaInfoCircle, FaLinkedin, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
import SideNav from '../../Shared/SideNav/SideNav';

const ProfileBio = () => {
    return (
        <div className=''>
            <div className='flex md:flex-row flex-col items-center md:py-[160px] py-20'>
            {/* for left image */}
            <div className='flex justify-center items-center px-20 '>
            <div className="avatar">
                <div className="w-80 rounded-full ring ring-success ring-offset-base-100 ring-offset-2">
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
            <p className='text-gray-300 mt-3 text-lg max-w-[80%]'>
               Hi! I am Sujoy paul. I am a passionate full stack Web Developer. I have already created many Project with 1+ years of experience with modern technologies like React, Tailwind CSS, Node js, Mongo DB, Express JS, Bootstrap etc..
            </p>
            <button className='btn btn-info btn-outline mt-3 rounded-full'><FaInfoCircle className='mr-2'></FaInfoCircle>  More about me</button>

            <div className='flex text-2xl text-white mt-7'>
                <a target='blank' href='https://github.com/spsujoy007'><FaGithub className='mr-5'></FaGithub></a>
                <a target='blank' href='https://www.facebook.com/spsujoy07'><FaFacebook className='mr-5'></FaFacebook></a>
                <a target='blank' href='https://www.linkedin.com/in/spsujoy/'><FaLinkedin className='mr-5'></FaLinkedin></a>
                <a target='blank' href="tel:+8801859342364"><FaPhoneAlt className='mr-5'></FaPhoneAlt></a>
                <a target='blank' href='https://twitter.com/spsujoy007'><FaTwitter className='mr-5'></FaTwitter></a>
                <a target='blank' href='mailto: sujoypaul728@gmail.com'><AiTwotoneMail className='mr-5'></AiTwotoneMail></a>
            </div>

        </div>

        

        </div>
        </div>
    );
};

export default ProfileBio;