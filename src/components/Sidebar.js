import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../asset/logo.svg";
import { RiMicrosoftFill } from "react-icons/ri"
import { MdLocalMovies } from "react-icons/md"
import { BsFillBookmarkFill } from "react-icons/bs"


// import home from "../asset/icon-nav-home.svg";
// import movies from "../asset/icon-nav-movies.svg";
import tv from "../asset/icon-nav-tv-series.svg";
import bookmark from "../asset/icon-nav-bookmark.svg";
import avatar from "../asset/image-avatar.png";
const Sidebar = () => {
  return (
    <aside className="flex flex-row sm:flex-col justify-between sm:h-full h-10 items-center sm:items-justify px-2">
      <div className="h-auto sm:h-20 sm:pt-8 pt-0">
        <NavLink to="/" >
          <img className="h-6" src={logo} alt="logo"></img>
        </NavLink>
      </div>

      <div className="flex flex-row sm:flex-col h-auto sm:h-40 justify-around basis-1/3">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'text-white text-2xl' : 'colo text-2xl')}>
            <RiMicrosoftFill/>
        </NavLink>

        <NavLink to="/movies"  className={({ isActive }) => (isActive ? 'text-white text-2xl' : 'colo text-2xl')}>
            <MdLocalMovies/>
        </NavLink>

        <NavLink to="/tv"  className={({ isActive }) => (isActive ? 'text-white text-2xl' : 'colo text-2xl')}>
            <img className="h-4" src={tv} alt="tv"></img>
        </NavLink>
        
        <NavLink to="/bookmark"  className={({ isActive }) => (isActive ? 'text-white text-2xl' : 'colo text-2xl')}>
             <BsFillBookmarkFill/>
        </NavLink>
      </div>

      <div className="sm:grow grow-0 flex sm:items-end justify-end pb-0 sm:pb-5 ">
        <img className="h-6" src={avatar} alt="avatar"></img>
      </div>
    </aside>
  );
};

export default Sidebar;
