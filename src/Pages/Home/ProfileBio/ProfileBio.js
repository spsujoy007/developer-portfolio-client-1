import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";
import { AiTwotoneMail } from "react-icons/ai";
import './ProfileBio.css'
import AutoMessage from '../AutoMessage/AutoMessage';
import { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
// import profileImg from '../../../assets/profiledp.jpg'
import profileImg from '../../../assets/profileimg.png'

const ProfileBio = () => {
    // console.log(dot)
    // const {adminName } = useContext(ContentContext)
    // const [onMouse, setOnMouse] = useState(false)
    const [hoverOut, setHoverOut] = useState(true);

    return (
        <div >
            {/* <h1 className='bg-[#10301f] text-[#35e37d] text-center py-1'>Website update is in progress...</h1> */}
            <div className='flex min-h-screen pt-24 md:flex-row flex-col items-center md:py-[150px]'  style={{ backgroundImage: `url("../../../../public/Bgofport.png")` }}>
            {/* for left image */}
            

        {/* <div data-aos="fade-left" data-aos-duration="1500" className='flex'> */}
        <div>
            <div className='flex justify-end mb-5'>
                 <AutoMessage></AutoMessage>
            </div>
            <div className='flex md:flex-row flex-col-reverse justify-center items-center'>
                <div className='flex-1 mx-6 md:mx-0 mt-10 md:mt-0 px-2 relative'>
                    
                    <h1 className='text-xl   text-white md:mt-3'>Hi, my name is<br />
                    <span className='text-info font-[800] md:text-6xl uppercase text-5xl'>
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
                    
                    <p className='text-gray-300 mt-3 text-lg md:max-w-[90%] select-none'>
                    I am a passionate full stack Web Developer. I have already created many Project with 3+ years of experience with modern technologies like React, Tailwind CSS, Node js, Mongo DB, Express JS, Bootstrap etc..
                    </p>
                    
                    {/* <a href={resume} download={resume}> */}
                    <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1O0JGPhQGrxZdiPCTloMSFVAGadN6-3HS/view?usp=share_link" className='md:inline-block'>
                        <button 
                            onMouseEnter={()=> setHoverOut(false)} 
                            onMouseLeave={()=> setHoverOut(true)} 
                        className={`flex items-center py-2 text-white px-3 gap-x-1 btn-info ${hoverOut ? `btnanim` : ''}  mt-5 rounded-full hover:bg-sky-800 text-center justify-center duration-200 text-sm w-full md:w-44 uppercase`}><HiDocumentText className="mr-2 text-xl"></HiDocumentText> view Resume</button>
                    </a>

                    <div className='flex bg-[#153038] md:bg-transparent md:p-0 p-1 rounded-full  text-2xl text-white mt-7 justify-between md:justify-start mb-5'>
                        {/* <a className='commonbtn p-2 mx-1 rounded-full hover:text-sky-500' target='blank' href='https://github.com/spsujoy007'><FaGithub></FaGithub></a> */}
                        <a className='commonbtn p-2 mx-1 rounded-full hover:text-sky-500' target='blank' href='https://www.facebook.com/spsujoy07'><FaFacebook></FaFacebook></a>
                        <a className='commonbtn p-2 mx-1 rounded-full hover:text-sky-500' target='blank' href='https://www.linkedin.com/in/spsujoy/'><FaLinkedin></FaLinkedin></a>
                        <a className='commonbtn p-2 mx-1 rounded-full hover:text-sky-500' target='blank' href="tel:+8801859342364"><FaPhoneAlt></FaPhoneAlt></a>
                        <a className='commonbtn p-2 mx-1 rounded-full hover:text-sky-500' target='blank' href='https://twitter.com/spsujoy007'><FaTwitter></FaTwitter></a>
                        <a className='commonbtn p-2 mx-1 rounded-full hover:text-sky-500' target='blank' href='mailto: sujoypaul728@gmail.com'><AiTwotoneMail></AiTwotoneMail></a>
                    </div>
                    <div className='animation-line'></div>

                </div>
                <div className='flex justify-center'>
                    {/* <img className='w-[65%] profilePic' src={profileImg} alt=''/> */}
                </div>
            </div>
        </div>

        

        </div>
        </div>
    );
};

export default ProfileBio;