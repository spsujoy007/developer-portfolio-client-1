import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";
import { AiTwotoneMail } from "react-icons/ai";
import './ProfileBio.css'
import AutoMessage from '../AutoMessage/AutoMessage';
import { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import profileImg from '../../../assets/profiledp.jpg'

const ProfileBio = () => {
    // console.log(dot)
    // const {adminName } = useContext(ContentContext)
    // const [onMouse, setOnMouse] = useState(false)
    const [hoverOut, setHoverOut] = useState(true);

    return (
        <div >
            <h1 className='bg-[#10301f] text-[#35e37d] text-center py-1'>Website update is in progress...</h1>
            <div className='flex min-h-screen pt-24 md:flex-row flex-col items-center md:py-[150px]'  style={{ backgroundImage: `url("../../../../public/Bgofport.png")` }}>
            {/* for left image */}
            <div data-aos="fade-right" data-aos-duration="1500">
                <div className='flex justify-center items-center md:px-20 px-5'>
            <div className="avatar dbimageMain">
                <div 
                className={`w-80 md:mt-8 dbimage duration-500 rounded-full`}>
                    {/* <img src="https://i.ibb.co/zm5y2Z1/275702359-154109040392904-2771545278164783547-n.jpg" alt='' /> */}
                    <img src={profileImg} alt='' />
                </div>
            </div>
            </div>
            </div>

        <div data-aos="fade-left" data-aos-duration="1500">
        <div className='flex-1 mx-6 md:mx-0 mt-10 md:mt-0 px-2'>
            <div className='flex justify-end'>
                <AutoMessage></AutoMessage>
            </div>
            <h1 className='text-4xl font-semibold  text-white'>Hi! I am<br />
            <span className='text-info md:text-6xl uppercase text-5xl'>
                <span className='nameAnim_1s'>s</span>
                <span className='nameAnim_2s'>u</span>
                <span className='nameAnim_3s'>j</span>
                <span className='nameAnim_4s'>o</span>
                <span className='nameAnim_5s'>y</span>

                <span className=''> paul</span> 
                </span><br />
                {/* <p className='text-2xl'>A WEB DEVELOPER</p> */}
                <code>
                <TypeAnimation
                    sequence={[
                    // Same substring at the start will only be typed out once, initially
                    'A web developer',
                    1000, 
                    'A Graphic designer',
                    1000, 
                    'create frontend websites',
                    1000,
                    'something is updating soon...',
                    3000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '1.563rem', fontWeight: 'normal', display: 'inline-block' }}
                repeat={Infinity}
                />
                </code>
            </h1>
            
            <p className='text-gray-300 mt-3 text-lg md:max-w-[80%]'>
               I am a passionate full stack Web Developer. I have already created many Project with 1+ years of experience with modern technologies like React, Tailwind CSS, Node js, Mongo DB, Express JS, Bootstrap etc..
            </p>
            
            {/* <a href={resume} download={resume}> */}
            <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1O0JGPhQGrxZdiPCTloMSFVAGadN6-3HS/view?usp=share_link" className='md:inline-block'>
                <button 
                    onMouseEnter={()=> setHoverOut(false)} 
                    onMouseLeave={()=> setHoverOut(true)} 
                className={`flex items-center py-2 text-white px-3 gap-x-1 btn-info ${hoverOut ? `btnanim` : ''} hover:btn-outline mt-5 rounded-full text-center justify-center duration-200 text-sm font-bold w-full md:w-44 uppercase`}><HiDocumentText className="mr-2 text-xl"></HiDocumentText> view Resume</button>
            </a>

            <div className='flex bg-[#153038] md:bg-transparent md:p-0 p-1 rounded-full  text-2xl text-white mt-7 justify-between md:justify-start '>
                <a className='commonbtn p-2 mx-1 rounded-full hover:text-sky-500' target='blank' href='https://github.com/spsujoy007'><FaGithub></FaGithub></a>
                <a className='commonbtn p-2 mx-1 rounded-full hover:text-sky-500' target='blank' href='https://www.facebook.com/spsujoy07'><FaFacebook></FaFacebook></a>
                <a className='commonbtn p-2 mx-1 rounded-full hover:text-sky-500' target='blank' href='https://www.linkedin.com/in/spsujoy/'><FaLinkedin></FaLinkedin></a>
                <a className='commonbtn p-2 mx-1 rounded-full hover:text-sky-500' target='blank' href="tel:+8801859342364"><FaPhoneAlt></FaPhoneAlt></a>
                <a className='commonbtn p-2 mx-1 rounded-full hover:text-sky-500' target='blank' href='https://twitter.com/spsujoy007'><FaTwitter></FaTwitter></a>
                <a className='commonbtn p-2 mx-1 rounded-full hover:text-sky-500' target='blank' href='mailto: sujoypaul728@gmail.com'><AiTwotoneMail></AiTwotoneMail></a>
            </div>

        </div>
        </div>

        

        </div>
        </div>
    );
};

export default ProfileBio;