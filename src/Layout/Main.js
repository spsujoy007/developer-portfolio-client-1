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

const Main = () => {

    const PN = useLocation().pathname;
    console.log(PN.split('/')[1])

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
                    ${PN ==='/' && "bg-[#193841]"} 
                    hover:bg-transparent duration-300 rounded-full py-6 flex-col wrapper fixed text-2xl gap-y-5 text-white mt-7 justify-between md:justify-start`}>
                        <Link to={'/'} className='button'>
                            <div className='icon'><RiHomeFill></RiHomeFill></div>
                            <span>Home</span>
                        </Link>
                        <Link to={'/about'} className='button'>
                            <div className='icon'><AiFillInfoCircle></AiFillInfoCircle></div>
                            <span>About</span>
                        </Link>
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
                </div>
                </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;