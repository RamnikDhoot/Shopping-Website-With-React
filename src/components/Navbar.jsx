import React from 'react';

function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-gradient fixed-top">
        <div className="container">
          <a className="navbar-brand fs-4" href="#">Shopping</a>
          <button className="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="sidebar offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header text-white border-bottom">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
              <button type="button" className="btn-close btn-close-white shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>

            <div className="offcanvas-body d-flex flex-column flex-lg-row p-4 p-lg-0">
              <ul className="navbar-nav justify-content-centre align-items-center fs-5 flex-grow-1 pe-3">
                <i className="fa-solid fa-house fa-2xl"></i>
                <li className="nav-item mx-2">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-bell-fill" viewBox="0 0 16 16">
                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
                </svg>
                <li className="nav-item mx-2">
                  <a className="nav-link" href="#notifications">Notifications</a>
                </li>
              </ul>
              <form className="form-inline mx-auto my-2 d-flex flex-column flex-lg-row justify-content-centre align-items-center">
                <input className="form-control mr-sm-1" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
             </form>
              <div className="d-flex flex-column flex-lg-row justify-content-centre align-items-center gap-3">
                <a href="#login" className="text-white">Login</a>
                <a href="#signup" className="text-white text-decoration-none px-3 py-1 bg-primary rounded-2">Sign Up</a>
              </div>
              <button type = "button" className = "btn position-relative">
                <i className = "fa fa-shopping-cart fa-2xl"></i>
                <span className = "position-absolute top-0 start-100 translate-middle badge bg-primary">5</span>
            </button>
            </div>
          </div>
        </div>
      </nav>
    );
}

export default Navbar;