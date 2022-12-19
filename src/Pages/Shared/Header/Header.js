import { Link } from 'react-router-dom';
import logo from '../../../assets/splogo.jpg'
import './Header.css'

const Header = () => {

    const menuItem =  <>
        <li className='hover:text-sky-500'><Link to='/' className='rounded-xl mr-1'>Home</Link></li>
        <li className='hover:text-sky-500'><Link to='/about' className='rounded-xl mr-1' >About</Link></li>
        <li className='hover:text-sky-500'><Link to='/projects' className='rounded-xl mr-1'>Projects</Link></li>
        <li className='hover:text-sky-500'><Link to='/blog' className='rounded-xl mr-1'>Blog</Link></li>
        <li className='hover:text-sky-500'><Link to='/contact' className='rounded-xl mr-1'>Contact</Link></li>
        {/* <li className='hover:text-sky-500'><Link to='/dashboard' className='rounded-xl mr-1'>Dash</Link></li> */}
    </>
        
    

    return (
        <div style={{
            // backgroundColor: '#8f8f8f38',
            backdropFilter: 'blur(10px)',
            zIndex: '100'
        }} className="navbar fixed z-10 md:px-6 glass max-w-[1240px] md:rounded-b-2xl myheading">
  <div className="navbar-start w-full md:w-[50%]">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="text-white menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#333333ef] rounded-box w-52">
        {menuItem}
      </ul>
    </div>
    <Link to='/' className="text-xl  text-white flex items-center">
      <img src={logo} alt="sujoy paul" className='rounded-full w-12 mr-3'/>SUJOY PAUL
    </Link>
  </div>
  <div className="hidden lg:flex navbar-end">
    <ul className="menu menu-horizontal p-0 text-white">
      {menuItem}
    </ul>
  </div>
  <label  htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden text-white">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
</div>
    );
};

export default Header;