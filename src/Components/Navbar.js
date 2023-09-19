import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
  
      <nav className="navbar navbar-expand-md bg-dark navbar-dark">
      <Link className="navbar-brand" to="/">
      <img src="https://tse3.mm.bing.net/th?id=OIP.kXCVab42euiDk2mReUSSoQHaHa&pid=Api&P=0&h=180"alt="Loading"height="50px" />{""}
      My Website</Link>
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <Link className="nav-link"to="/">Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link"to="/about">About</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link"to="/contact">Contact</Link>
        </li>
      </ul>
      <Link to="/login"className="btn btn-info mx-1">
        Login
        </Link>
      <Link to="/signup"className="btn btn-info mx-1">
        Signup
        </Link>

      </nav>
    
    </>
  );
}

export default Navbar