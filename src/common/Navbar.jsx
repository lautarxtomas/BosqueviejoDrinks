import React from 'react'
import CartWidget from '../components/CartWidget'
import logo from '../img/logo.png'

const Navbar = () => {
  
  return (
    <>
        <nav class="navbar navbar-expand-lg navbar-light">

          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <img src={logo} alt="" />
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">INICIO</a>
                </li>
                
                <li class="nav-item">
                  <a class="nav-link" href="#">CATÁLOGO</a>
                </li>
                
                <li class="nav-item">
                  <a class="nav-link" href="#">NOSOTROS</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link">CONTACTO</a>
                </li>
              </ul>
              <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>

          <CartWidget />

      </nav>
  </>
  )
}

export default Navbar