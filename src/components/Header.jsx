import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.jpg';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

const Header = () => {
  return (
    <nav>
      <div className='container nav_container'>
        <Link to='/' className='nav_logo'>
          <img src={logo} alt='Navbar Logo' />
        </Link>
        <ul className='nav_menu'>
          <li>
            <Link to='/profile/user1'>Corm Grower</Link>
          </li>
          <li>
            <Link to='/create'>Create Citation</Link>
          </li>
          <li>
            <Link to='/users'>Users</Link>
          </li>
          <li>
            <Link to='/logout'>Logout</Link>
          </li>
        </ul>
        <button className='nav_toggle-btn'>
          <AiOutlineClose />
        </button>
      </div>
    </nav>
  );
};

export default Header;
