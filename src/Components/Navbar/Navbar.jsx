import React from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../Assets/logo.svg'
import './navbar.css'

// BEM -> Block Element Modifier

const Navbar = () => {
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} alto='logo' />
        </div>
        <div className='.gpt3__navbar-links-container'>
          <p><a href='#home'>HOME</a></p>
          <p><a href='#wgpt3'>What is GPT3</a></p>
          <p><a href='#possibility'>Open AI</a></p>
          <p><a href='#features'>Case Studies</a></p>
          <p><a href='#blog'>Library</a></p>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
