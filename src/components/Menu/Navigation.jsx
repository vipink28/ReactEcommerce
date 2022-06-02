import React from "react";
import { NavLink } from "react-router-dom";

function Navigation(props) {
  return (
      <nav
        className="navbar navbar-expand-md navbar-dark bg-dark"
        aria-label="Fourth navbar example"
      >
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            Expand at md
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample04"
            aria-controls="navbarsExample04"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample04">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="watches">
                  Watches
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="Mobiles">
                  Mobiles
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="Appliances">
                  Appliances
                </NavLink>
              </li>
            </ul>
            <form>
              <input
                className="form-control"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>
        </div>
      </nav>
  );
}

export default Navigation;
