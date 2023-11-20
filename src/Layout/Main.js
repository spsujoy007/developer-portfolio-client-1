import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import Container from '../Components/Container/Container';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';
import { RiHomeFill, RiMessage3Fill } from 'react-icons/ri';
import { AiFillInfoCircle } from 'react-icons/ai';
import { MdWebStories } from 'react-icons/md';
import { SiApostrophe } from 'react-icons/si';
import './Main.css'
import { FaGithub } from 'react-icons/fa';

const Main = () => {

    const PN = useLocation().pathname;

    return (
        <div className='mainHomebg'>
            <div className='md:hidden block'>
                <Header></Header>
            </div>
                <Container>
                    <Outlet></Outlet>
                <div className='absolute hidden md:block  top-[30vh] left-2 '>
                    <div className={`flex 
                    z-[100]
                    ${PN === '/contact' && "bg-[#FAEED8]"} 
                    ${PN ==='/blog' && "bg-[#FF644E]"} 
                    ${PN ==='/about' && "bg-[#35C3E3]"} 
                    ${PN ==='/projects' && "bg-[#0284C7]"} 
                    ${PN.split('/')[1] === 'blog' && PN.split('/').length > 2 && "bg-[#C4FCD5]"} 
                    ${PN ==='/' && "bg-[#19384100]"} 
                    hover:bg-transparent duration-300 rounded-full py-3 flex-col wrapper fixed text-2xl gap-y-3 text-white mt-7 justify-between md:justify-start`}>
                        <Link to={'/'} className='button'>
                            <div className='icon'><RiHomeFill></RiHomeFill></div>
                            <span>Home</span>
                        </Link>
                        {/* <Link to={'/about'} className='button'>
                            <div className='icon'><AiFillInfoCircle></AiFillInfoCircle></div>
                            <span>About</span>
                        </Link> */}
                        <Link to={'/projects'} className='button'>
                            <div className='icon'><MdWebStories></MdWebStories></div>
                            <span>Projects</span>
                        </Link>
                        <Link to={'/blog'} className='button'>
                            <div className='icon'><SiApostrophe></SiApostrophe></div>
                            <span>Blog</span>
                        </Link>
                        <Link to={'/contact'} className='button'>
                            <div className='icon'><RiMessage3Fill></RiMessage3Fill></div>
                            <span>Contact</span>
                        </Link>
                    </div>

                <div className='absolute top-[48vh]  left-3 z-[80] '>
                    <div className='fixed'>
                    <div className='flex flex-col justify-center items-center gap-3'>
                    <div>
                    <a className=' rounded-full hover:text-sky-500 text-3xl shadow-xl shadow-sky-500 text-white' target='blank' href='https://github.com/spsujoy007'><FaGithub></FaGithub></a>
                    </div>
                    <div className='w-[1px] h-[180px] bg-white '></div>
                    </div>
                    </div>
                </div>
                </div>

                </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;