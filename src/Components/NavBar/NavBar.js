import React from 'react'
import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {


  return (
    <div className='navbar'>
      <Link to={'/'}>
        <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Logo" />
      </Link>
      <div className="navLink">
        <Link to={'/mylist'}><p>My list</p></Link>
        <p>Browse</p>
      </div>
      <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar" />
    </div>
  )
}

export default NavBar