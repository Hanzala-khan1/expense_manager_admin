import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import "./navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }
    return (
        <>
            <nav className="side-nav">
                <FontAwesomeIcon icon={faBars} className='navicon' onClick={toggleMenu} />
                <h1 className='headnav'>Admin Dashboard</h1>
                <ul className={`menu ${menuOpen ? 'menu--open' : ''}`}>
                    <li><Link className='linkk' to="/user">Users</Link></li>
                    <li><Link className='linkk' to="/budget">Budget</Link></li>
                    <li><Link className='linkk' to="/interest">Cetegories</Link></li>
                    <li><Link className='linkk' to="/currency">Currency Type</Link></li>
                    {/* <li><Link className='linkk' to="/report">Reports</Link></li>
                    <li><Link className='linkk' to="/review">Reviews</Link></li> */}
                </ul>
            </nav>
        </>
    )
}

export default Navbar
