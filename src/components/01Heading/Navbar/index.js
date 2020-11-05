import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';



const Navbar = (props) => {

    const [search, setSearch] = useState(false);


    const submitSearch = (e) => {
        e.preventDefault();
        alert('Searhed');

    }


    const openSearch = () => {
        setSearch(true);
    }


    const searchClass = search ? 'searchInput active' : 'searchInput';

  return(
    <div className="navbar">
        <ul className="navbarMenu">
            <li><NavLink to="/">Breaking News</NavLink></li>
            <li><NavLink to="/Post">Posts</NavLink></li>
            <li><NavLink to="/about">About Us</NavLink></li>            
            <li><NavLink to="/contact-us">Contact Us</NavLink></li>
        </ul>
        <div className="search">
            <form onSubmit={submitSearch}>
                <input type="text" className={searchClass} placeholder="Search" />
                <img onClick={openSearch} className="searchIcon" src={require('../icons/search.png')} alt="Search" />
            </form>
            
        </div>
    </div>
   )

 }

export default Navbar