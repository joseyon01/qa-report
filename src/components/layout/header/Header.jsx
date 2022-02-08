import React, { Fragment } from 'react';
import './Header.css'
export const Header = () => {
  const handleLogout = () => {
    console.log('Logout');
  }
  return (
    <div>
      <Fragment>
      {/* <header className="navbar navbar-light sticky-top  flex-md-nowrap p-0 shadow" style={{'background-color': '#e3f2fd'}}> */}
        <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
          <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" /* href="#" */>
            Qa - Turbochef
          </a>
          <button
            className="navbar-toggler position-absolute d-md-none collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#sidebarMenu"
            aria-controls="sidebarMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          {/* <input
            className="form-control form-control-dark w-100"
            type="text"
            placeholder="Search"
            aria-label="Search"
          /> */}

          <span className='color-name nav-item nav-link text-info'>
            Hola, usuario
          </span>

          <div className="navbar-nav">
            <div className="nav-item text-nowrap">
              <a className="nav-link px-3" onClick={handleLogout}>
              Sign out
              </a>
            </div>
          </div>
        </header>
      </Fragment>
    </div>
  );
};
