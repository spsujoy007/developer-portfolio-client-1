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
  <div className="drawer-content flex flex-col items-center justify-center">
    <Outlet></Outlet>
  </div> 
  <div className="drawer-side">
    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-64 bg-sky-200 text-base-content">
      <li className='bg-sky-500 text-white rounded-xl'><Link to='/dashboard/addskill'>Add New Skill</Link></li>
    </ul>
  
  </div>
</div>
        </div>

        </div>
    );
};

export default DashboardLayout;