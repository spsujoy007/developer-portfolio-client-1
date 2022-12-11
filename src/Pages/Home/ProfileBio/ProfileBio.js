import React from 'react';
import profiledp from '../../../assets/profiledp.jpg'
import { FaFacebook, FaFileDownload, FaGithub, FaLinkedin, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
import './ProfileBio.css'
import resume from '../../../assets/Sujoy paul.pdf'


const ProfileBio = () => {
    return (
        <div className=''>
            <div className='flex md:flex-row flex-col items-center md:py-[160px] py-20'>
            {/* for left image */}
            <div className='flex justify-center items-center md:px-20'>
            <div className="avatar">
                <div className="w-80 rounded-full ring-offset-2 dbimage">
                    <img src={profiledp} alt='' />
                </div>
            </div>
            </div>

        <div className='flex-1 mx-6 md:mx-0 mt-10 md:mt-0'>
            <h1 className='text-4xl font-semibold uppercase text-white'>Hi! <br />
                <span cls>I am <span className='text-info'>sujoy paul</span></span>
                <br />
                <span cls>A WEB-DEVELOPER</span>
            </h1>
            <p className='text-gray-300 mt-3 text-lg max-w-[80%]'>
               I am a passionate full stack Web Developer. I have already created many Project with 1+ years of experience with modern technologies like React, Tailwind CSS, Node js, Mongo DB, Express JS, Bootstrap etc..
            </p>
            
            <a href={resume} download={resume}>
                <button className='btn btn-info commonbtn btn-outline mt-3 rounded-full w-full md:w-56 uppercase'><FaFileDownload className="mr-2 text-xl"></FaFileDownload> Download Resume</button>
                </a>

            <div className='flex text-2xl text-white mt-7 justify-between md:justify-start'>
                <a className='commonbtn p-2 mr-5 rounded-full hover:text-sky-500' target='blank' href='https://github.com/spsujoy007'><FaGithub></FaGithub></a>
                <a className='commonbtn p-2 mr-5 rounded-full hover:text-sky-500' target='blank' href='https://www.facebook.com/spsujoy07'><FaFacebook></FaFacebook></a>
                <a className='commonbtn p-2 mr-5 rounded-full hover:text-sky-500' target='blank' href='https://www.linkedin.com/in/spsujoy/'><FaLinkedin></FaLinkedin></a>
                <a className='commonbtn p-2 mr-5 rounded-full hover:text-sky-500' target='blank' href="tel:+8801859342364"><FaPhoneAlt></FaPhoneAlt></a>
                <a className='commonbtn p-2 mr-5 rounded-full hover:text-sky-500' target='blank' href='https://twitter.com/spsujoy007'><FaTwitter></FaTwitter></a>
                <a className='commonbtn p-2 mr-5 rounded-full hover:text-sky-500' target='blank' href='mailto: sujoypaul728@gmail.com'><AiTwotoneMail></AiTwotoneMail></a>
            </div>

        </div>

        

        </div>
        </div>
    );
};

export default ProfileBio;