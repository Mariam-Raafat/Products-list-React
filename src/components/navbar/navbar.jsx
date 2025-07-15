import React from 'react';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { useCart } from '../../context/CartContext';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

export const Navbar = () => {
  // const { getCartCount } = useCart();
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/products-list?search=${search}`);
  };
    return (
        <nav className="navbar sticky-top navbar-expand-lg bg-warning px-3 mb-5">
            <div className="d-flex justify-content-between align-items-center container">
          <div className='d-flex gap-5 align-items-center'>
        <div >
            <Link to='/' className='nav-link' >Home</Link>
        </div>
        <form className="d-flex ms-auto" onSubmit={handleSearch}>
        <input
          type="text"
          className="form-control me-2 bg-warning"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btn btn-outline-secondary">Search</button>
      </form>
          </div>
            <div className='d-flex gap-3 align-items-center'> 
            <Link to='login' className='nav-link'>Login</Link>
            <Link to='register' className='nav-link'>Register</Link>

<Link to="/cart" className="position-relative nav-link">
  <i className="fas fa-shopping-cart fs-5"></i>
  <span
    className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success"
    style={{ fontSize: "0.7rem" }}
  >
    {/* {getCartCount()} */}
  </span>
</Link>

          </div>
            </div>
        </nav>
    );
}