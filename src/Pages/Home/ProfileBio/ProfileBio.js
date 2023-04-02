import React, { useContext } from 'react';
import profiledp from '../../../assets/profiledp.jpg'
import { FaEye, FaFacebook, FaFileDownload, FaGithub, FaLinkedin, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
import './ProfileBio.css'
import resume from '../../../assets/Sujoy paul.pdf'
import { Fade } from 'react-reveal';
import AutoMessage from '../AutoMessage/AutoMessage';
import ClockTime from '../../../Components/ClockTime/ClockTime';
import { ContentContext } from '../../../context/ContentProvider';

const ProfileBio = () => {
    const {adminName } = useContext(ContentContext)
    console.log(adminName)
    const texts1 = 'sujoy'
    const texts2 = 'paul'
    const name = texts1.split('')

    return (
        <div >
            <div className='flex min-h-screen md:flex-row flex-col items-center md:py-[150px] py-20'  style={{ backgroundImage: `url("../../../../public/Bgofport.png")` }}>
            {/* for left image */}
            <div data-aos="fade-right" data-aos-duration="1500">
                <div className='flex justify-center items-center md:px-20 px-5'>
            <div className="avatar dbimageMain">
                <div className="w-80 rounded-full ring-offset-2 dbimage ">
                    {/* <img src={profiledp} alt='' /> */}
                    <img src="https://i.ibb.co/zm5y2Z1/275702359-154109040392904-2771545278164783547-n.jpg" alt='' />
                </div>
            </div>
            </div>
            </div>

        <div data-aos="fade-left" data-aos-duration="1500">
        <div className='flex-1 mx-6 md:mx-0 mt-10 md:mt-0 px-2'>
            <div className='flex justify-end'>
                <AutoMessage></AutoMessage>
            </div>
            <h1 className='text-4xl font-semibold uppercase text-white'>Hi! I am<br />
            <span className='text-info md:text-6xl text-5xl'>
                <span className='nameAnim_1'>s</span>
                <span className='nameAnim_2'>u</span>
                <span className='nameAnim_3'>j</span>
                <span className='nameAnim_4'>o</span>
                <span className='nameAnim_5'>y</span>

                <span className=''> kumar paul</span>
                </span>
                <p className='text-2xl'>A WEB DEVELOPER</p>
            </h1>
            
            <p className='text-gray-300 mt-3 text-lg md:max-w-[80%]'>
               I am a passionate full stack Web Developer. I have already created many Project with 1+ years of experience with modern technologies like React, Tailwind CSS, Node js, Mongo DB, Express JS, Bootstrap etc..
            </p>
            
            {/* <a href={resume} download={resume}> */}
            <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1O0JGPhQGrxZdiPCTloMSFVAGadN6-3HS/view?usp=share_link">
                <button className='btn gap-x-2 btn-info btnanim hover:btn-outline mt-3 rounded-full w-full md:w-56 uppercase'><FaEye className="mr-2 text-xl"></FaEye> view Resume</button>
            </a>

            <div className='flex text-2xl text-white mt-7 justify-between md:justify-start'>
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