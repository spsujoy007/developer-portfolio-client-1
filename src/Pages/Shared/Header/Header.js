import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    const menuItem =  <>
        <li><a href='#home' className='rounded-xl mr-3'>Home</a></li>
        <li><a href='#aboutsection' className='rounded-xl mr-3' >About</a></li>
        <li><a href='#skills' className='rounded-xl mr-3'>Skills</a></li>
        <li><a href='#projects' className='rounded-xl mr-3'>Projects</a></li>
    </>
        
    

    return (
        <div style={{
            // backgroundColor: '#8f8f8f38',
            backdropFilter: 'blur(8px)'
        }} className="navbar fixed z-10 md:px-20 mx-auto md:bg-[#8f8f8f38]">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="text-white menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#8f8f8f38] rounded-box w-52">
        {menuItem}
      </ul>
    </div>
    {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
  </div>
  <div className="hidden lg:flex navbar-end">
    <ul className="menu menu-horizontal p-0 text-white">
      {menuItem}
    </ul>
  </div>
</div>
    );
};

export default Header;