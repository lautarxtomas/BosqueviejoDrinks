import React from 'react'
import CartWidget from './CartWidget'
import logo from '../img/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light">

          <div className="container-fluid">

            <Link className="navbar-brand" to={'/'}> <img src={logo} alt="" /> </Link>
              
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to={'/'}> HOME </Link>
                </li>
              
                <li className="nav-item">
                  <Link className="nav-link" to={'/catalogo'}> CATALOGO </Link>
                </li>
                
                <li className="nav-item">
                  <Link className="nav-link" to={'/nosotros'}> NOSOTROS </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to={'/contacto'}> CONTACTO </Link>
                </li>
              </ul>
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>

          <CartWidget />

      </nav>
  </>
  )
}

export default Navbar