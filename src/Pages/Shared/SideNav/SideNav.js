import React from 'react';
import { FaHome, FaInfo } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './SideNav.css'

const SideNav = () => {
    return (
        <div>
            <div className='btnCustom'>
                <FaHome></FaHome>
                <h1>Home</h1>
            </div>
        </div>
    );
};

export default SideNav;