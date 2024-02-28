import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg  bg-${props.mode}`}>
        <div className="container-fluid">
          <a className={`navbar-brand text-${props.mode==='light'?'dark':'light'}`} href="#">
            {props.title}
          </a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* <li className="nav-item">
                <a
                  className={`nav-link active text-${props.mode==='light'?'dark':'light'}`}
                  aria-current="page"
                  href="/about"
                >
                  {props.about}
                </a>
              </li> */}
              {/* <li className="nav-item">
                <a
                  className={`nav-link active text-${props.mode==='light'?'dark':'light'}`}
                  aria-current="page"
                  href="/textform"
                >
                  {props.text}
                </a>
              </li> */}
            </ul>
            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.togleMode}
              />
              <label  className="form-check-label" htmlFor="flexSwitchCheckDefault">
               Enabale Dark Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  home: PropTypes.string,
};

Navbar.defaultProps = {
  title: "MAF",
  home: "About",
};
