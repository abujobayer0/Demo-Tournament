import React from "react";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-dark bg-dark fixed-top"
      style={{
        padding: 0,
        backgroundColor: "#101820ff",
      }}
    >
      <div className="container-fluid" style={{ padding: 10 }}>
        <a
          className="navbar-brand offcanvas-title"
          id="offcanvasDarkNavbarLabel"
          href="/"
          style={{ color: "#fee715ff", fontWeight: 600 }}
        >
          JFFT2022
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end text-bg-dark"
          tabIndex="-1"
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title">JFFT</h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <form className="d-flex mt-3" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-success"
                style={{
                  backgroundColor: "#fee715ff",
                  color: "#101820ff",
                  fontWeight: 600,
                }}
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
