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
    console.log(PN)

    return (
        <div className='mainHomebg'>
            <div className='md:hidden block'>
                <Header></Header>
            </div>
                <Container>
                    <Outlet></Outlet>
                <div className='absolute hidden md:block  top-[33vh] left-2 '>
                    <div className={`flex 
                    ${PN === '/contact' && "bg-[#faeed8]"} 
                    ${PN ==='/blog' && "bg-[#FF644E]"} 
                    ${PN ==='/' && "bg-[#193841]"} 
                    hover:bg-transparent duration-300 rounded-full py-5 flex-col wrapper fixed text-2xl gap-y-3 text-white mt-7 justify-between md:justify-start`}>
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