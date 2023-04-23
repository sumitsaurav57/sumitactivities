import React from 'react';
import homeIcon from '../assets/house.svg';
import twitterIcon from '../assets/twitter.svg';
import mailIcon from '../assets/mail.svg';
import workIcon from '../assets/work.svg';
import { NavLink } from 'react-router-dom';
const Nav = () => {
  return (
      <div className=' w-full fixed z-10 bottom-[20px] md:bottom-0 flex justify-center items-center'>
          <div className=" m-2 gap-2 flex justify-around align-center px-1 backdrop-blur-md shadow-lg rounded-[999px] border-2 border-solid border-slate-600 "  style={{background:`rgba(51,51,51,0.8)`}}>
        <NavLink to='/'><SideBarIcon icon={homeIcon} text={'Home' } /></NavLink>
        <NavLink to='/project'><SideBarIcon icon={workIcon} text={'Work'} /></NavLink>
        <a href='https://twitter.com/sumitactivities' target='_blank'><SideBarIcon icon={twitterIcon} text={'Twitter'} /></a>
        <NavLink to='/contact'><SideBarIcon icon={mailIcon} text={'Mail'} /></NavLink>
    </div>
    </div>
  )
}
const SideBarIcon = ({ icon, text }) => {
    return(
    <div className="sidebar-icon flex flex-col group">
       <img src={icon} alt="" />
        <span className="sidebar-tooltip group-hover:scale-100">
            {text}
        </span>
        </div>
    )
};

const Divider = () => <hr className="sidebar-hr" />;

export default Nav