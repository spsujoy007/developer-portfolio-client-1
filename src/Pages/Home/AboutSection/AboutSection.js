import React from 'react';
import { FaGithub } from 'react-icons/fa';
import ContainItem from '../../../Components/Container/ContainItem';
import CommonHeading from '../../../Components/CommonHeading/CommonHeading';
import './AboutSection.css'
import useTitle from '../../../MyHooks/useTitle';
import { useLocation } from 'react-router-dom';
import profileImg from '../../../assets/profiledp.jpg'

// import devCover from '../../../assets/developer_cover.png'

const AboutSection = () => {
    useTitle('ABOUT')
    const getPath = useLocation().pathname;

    return ( 
        <div data-aos="fade-up"
        data-aos-easing="linear"
        className='bglineleftbox '
        data-aos-duration="1500">
        <ContainItem> 
        
        <div id='aboutsection' className={`px-5 mb-[100px] pt-10 md:pt-0 mx-auto md:max-w-[1240px] ${getPath === '/about' && 'min-h-screen py-10 flex items-center'} aboutHome`}>
                    <div className='pt-12 relative'>
                    <CommonHeading>About</CommonHeading>
                    <div className='w-full absolute  top-0 left-0'>
                        <h1 className='text-[130px] uppercase   text-[#10252a]'>About</h1>
                    </div>

        <div className='md:flex gap-10 text-lg z-[100px] mt-10'>
            <div className='flex-1'>
                <p className='text-gray-400 flex text-justify'>
                    Developing software for the world of intent is something I'm passionate about and I'm dedicated to making the world of intent easy and affordable for everyone. Developing software for the world of intent is something I'm passionate about and I'm dedicated to making the world of intent easy and affordable for everyone.
                </p>
            </div>


            {/* image of profile  */}
            
        </div>

        {/* Personal information section  */}
        {/* left side info  */}
        <h1 className='capitalize text-3xl text-white mt-5'>Personal information</h1>
        <div className='grid md:grid-cols-2 grid-cols-1 gap-10 mt-10 md:mt-0'> 
            <div>
            <div className='capitalize text-white md:flex gap-10 mt-2'>
                <div>
                    <span className="text-gray-300">Name:</span> sujoy paul <br />
                    <span className="text-gray-300">address:</span> panchagarh, bangladesh <br />
                    <span className="text-gray-300">email:</span> <span className='lowercase'>sujoypaul728@gmail.com</span>
                </div>
                <div>
                    <span className="text-gray-300" >phone:</span> <a href='tel:+8801859342364' tel="">(+88) 01859-342364</a>  <br />
                    <span className="text-gray-300">Github:</span> <a className='text-sky-500 lowercase underline' href="https://github.com/spsujoy007">spsujoy007</a> <br />
                    <span className="text-gray-300">language:</span> bangla, english
                </div>
                
            </div>
            
            </div>
        
        <div className='mt-6 grid md:grid-cols-2 grid-cols-1'>

        {/* right side items  */}
            <div className="card text-white flex ">
                <div className="card-body">
                    <h2 className="card-title"><span className='text-5xl'>3+</span> </h2><h2 className='text-2xl'> years of experience</h2>
                </div>
            </div>
            <div className="card text-white  ">
                <div className="card-body">
                    <h2 className="card-title"><span className='text-5xl'>15+</span> 
                    </h2><h2 className='text-2xl'>completed Projects</h2>
                </div>
            </div>
        </div>
        </div>

        {/* <div className={`mt-20 h-[280px] rounded-xl font-bold uppercase overflow-hidden devImgShadow bg-white ${getPath !== '/about' && 'hidden'}`}>
        <h5 className='px-2 py-1 text-black'>I perform my tasks diligently, aiming for excellence.</h5>
        <img className='rounded-b-xl' src={devCover} alt="developer_cover" />
        </div> */}
            </div>

        </div>
        </ContainItem>
        </div>
    );
};

export default AboutSection;