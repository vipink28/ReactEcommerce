import React from "react";
import { Navlink } from "react-router-dom";

function Navigation(props) {
  return (
    <div>
      <nav
        className="navbar navbar-expand-md navbar-dark bg-dark"
        aria-label="Fourth navbar example"
      >
        <div className="container-fluid">
          <Navlink className="navbar-brand" to="/">
            Expand at md
          </Navlink>
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
                <Navlink className="nav-link active" aria-current="page" to="/">
                  Home
                </Navlink>
              </li>
              <li className="nav-item">
                <Navlink className="nav-link" to="watches">
                  Watches
                </Navlink>
              </li>
              <li className="nav-item">
                <Navlink className="nav-link" to="Mobiles">
                  Mobiles
                </Navlink>
              </li>
              <li className="nav-item">
                <Navlink className="nav-link" to="Appliances">
                  Appliances
                </Navlink>
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
    </div>
  );
}

export default Navigation;
