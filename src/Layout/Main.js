import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Container from '../Components/Container/Container';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';
import { RiHomeFill, RiMessage3Fill } from 'react-icons/ri';
import { AiFillInfoCircle } from 'react-icons/ai';
import { MdWebStories } from 'react-icons/md';
import { SiApostrophe } from 'react-icons/si';
import './Main.css'

const Main = () => {
    return (
        <div>
            <div className='md:hidden block'>
                <Header></Header>
            </div>
                <Container>
                    <Outlet></Outlet>
                <div className='absolute hidden md:block top-[35vh] left-2 '>
                    <div className='flex flex-col wrapper fixed text-2xl gap-y-3 text-white mt-7 justify-between md:justify-start'>
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