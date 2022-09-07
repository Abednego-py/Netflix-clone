import '../styles/App.css';
import logo from '../images/logo.png'
import React from 'react';
import { Link } from 'react-router-dom';


export default function Navbar() {
  return (
    <div className='navbar'>

      <Link to={'/'}>
      <img src={logo} alt="logo" className='logo'/>
      </Link>
  

      <Link to={'/login'}>
      <button type='submit'> Sign In</button>
      </Link>
      
    </div>
  );
}
