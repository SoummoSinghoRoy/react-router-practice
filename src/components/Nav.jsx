import React from 'react';
import { NavLink } from 'react-router-dom';

const activestyle ={
  color: 'black',
  fontWeight: 'bold',
  fontSize: '14px',
  
}

const Nav = () => {
  return (
    <nav className='navbar col-4 ml-auto'>
      <NavLink activeStyle={activestyle} style={{textDecoration: 'none'}} exact to='/'>Home</NavLink>
      <NavLink activeStyle={activestyle} style={{textDecoration: 'none'}} to='/about-us'>About Us</NavLink>
      <NavLink activeStyle={activestyle} style={{textDecoration: 'none'}} to='/contact'>Contact Us</NavLink>
      <NavLink activeStyle={activestyle} style={{textDecoration: 'none'}} to='/posts'>Posts</NavLink>
    </nav>
  )
}

export default Nav;