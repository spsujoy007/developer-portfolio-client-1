import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../Pages/Shared/Header/Header';

const DashboardLayout = () => {
    return (
        <div>
            <Header></Header>
        <div className='pt-20'>
        <div className="drawer drawer-mobile rounded-t-xl">
  <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col ">
    <Outlet></Outlet>
  </div> 
  <div className="drawer-side ">
    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-64 bg-sky-100 text-base-content uppercase">
      <li className='bg-sky-500 text-white rounded-xl mb-2 text-center'><Link to='/dashboard-6a4588sgww52/addskill'>Add Skill</Link></li>
      <li className='bg-sky-500 text-white rounded-xl mb-2 text-center'><Link to='/dashboard-6a4588sgww52/addblog'>Add Blog</Link></li>
      <li className='bg-sky-500 text-white rounded-xl mb-2 text-center'><Link to='/dashboard-6a4588sgww52/myblogs'>MY Blogs</Link></li>
    </ul>
  
  </div>
</div>
        </div>

        </div>
    );
};

export default DashboardLayout;