import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import splogo from '../../../assets/splogo.jpg'

const Footer = () => {
    return (
        <div className='px-5 py-16 bg-gray-900 grid md:grid-cols-2 rounded-t-2xl'>
            <div>
                <div className="avatar">
                    <div className="w-16 rounded-full ring ring-sky-500 ring-offset-base-100 ring-offset-2">
                        <img src={splogo} alt='sujoy paul' />
                    </div>
                </div>
                <div>
                <h3 className='text-xl text-white mt-2'>Copyright © 2022 - All right reserved by <span className="text-sky-500 font-bold">SUJOY PAUL</span></h3>
                <p className='text-base-300 mt-3'>Developing software for the world of intent is something I'm passionate about and I'm dedicated to making the world of intent easy and affordable for everyone. Visit my <span className="text-sky-500"><a target='blank' href="https://github.com/spsujoy007">github profile</a></span></p>
                </div>
            </div>

            <div className='text-xl text-white rightborder mt-5 md:mt-0 flex items-center'>
               <div>
                <a className='flex hover:text-sky-500 items-center mt-3' target='blank' href='https://www.facebook.com/spsujoy07'><FaFacebook className='mr-5'></FaFacebook> Facebook</a>
                <a className='flex hover:text-sky-500 items-center mt-3' target='blank' href='https://www.linkedin.com/in/spsujoy/'><FaLinkedin className='mr-5'></FaLinkedin> Linkedin</a>
                <a className='flex hover:text-sky-500 items-center mt-3' target='blank' href='https://twitter.com/spsujoy007'><FaTwitter className='mr-5'></FaTwitter> Twitter</a>
               </div>
            </div>
        </div>
    );
};

export default Footer;