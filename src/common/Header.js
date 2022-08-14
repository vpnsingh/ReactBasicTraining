import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/basic" className="nav-link active" aria-current="page">Basic</Link>
                </li>
                <li className="nav-item">
                    <Link to="/forms" className="nav-link">Forms</Link>
                </li>
            </ul>
            </div>
        </div>
    </nav>
  )
}

export default Header;