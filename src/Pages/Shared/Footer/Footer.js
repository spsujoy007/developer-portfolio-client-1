import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
// import '../ab'

const Footer = () => {
    return (
        <div className='md:px-20 px-5 py-20 bg-gray-900 grid md:grid-cols-2'>
            <div>
                <h3 className='text-xl text-white'>Copyright © 2022 - All right reserved by <span className="text-sky-500 font-bold">SUJOY PAUL</span></h3>
                <p className='text-base-300 mt-5'>Developing software for the world of intent is something I'm passionate about and I'm dedicated to making the world of intent easy and <span className="text-sky-500">affordable for everyone.</span></p>
            </div>

            <div className='text-xl text-white rightborder mt-5 md:mt-0'>
                <a className='flex hover:text-sky-500 items-center mt-2' target='blank' href='https://www.facebook.com/spsujoy07'><FaFacebook className='mr-5'></FaFacebook> Facebook</a>
                <a className='flex hover:text-sky-500 items-center mt-2' target='blank' href='https://www.linkedin.com/in/spsujoy/'><FaLinkedin className='mr-5'></FaLinkedin> Linkedin</a>
                <a className='flex hover:text-sky-500 items-center mt-2' target='blank' href='https://twitter.com/spsujoy007'><FaTwitter className='mr-5'></FaTwitter> Twitter</a>
            </div>
        </div>
    );
};

export default Footer;