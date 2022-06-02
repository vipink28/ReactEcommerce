import React from 'react';
import { NavLink } from "react-router-dom";

function SideMenu(props) {
    return (
        <div
            className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
            style={{ height: "calc(100vh - 56px)" }}
          >
            <div
              className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
            >
              {/* <svg className="bi me-2" width="40" height="32"><use xNavLink:href="#bootstrap"></use></svg> */}
              <span className="fs-4">Sidebar</span>
            </div>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
              <li>
                <NavLink
                  to="/admin/dashboard"
                  className={({ isActive }) => "nav-link text-white" + (isActive ? " active" : "")}
                >
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/admin/orders"
                  className={({ isActive }) => "nav-link text-white" + (isActive ? " active" : "")}                  
                >
                  Orders
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/admin/categories"
                  className={({ isActive }) => "nav-link text-white" + (isActive ? " active" : "")}                  
                >
                  Categories
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/admin/products"
                  className={({ isActive }) => "nav-link text-white" + (isActive ? " active" : "")}                  
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/admin/user"
                  className={({ isActive }) => "nav-link text-white" + (isActive ? " active" : "")}                  
                >
                  Customers
                </NavLink>
              </li>
            </ul>
            <hr />
            <div className="dropdown">
              <NavLink
                to="/"
                className={({ isActive }) => "d-flex align-items-center text-white text-decoration-none dropdown-toggle" + (isActive ? " active" : "")}
                id="dropdownUser1"
                data-bs-toggle="dropdown"
                aria-expanded="false"                
              >
                <img
                  src="https://github.com/mdo.png"
                  alt=""
                  width="32"
                  height="32"
                  className="rounded-circle me-2"
                />
                <strong>mdo</strong>
              </NavLink>
              <ul
                className="dropdown-menu dropdown-menu-dark text-small shadow"
                aria-labelledby="dropdownUser1"
              >
                <li>
                  <NavLink
                    className={({ isActive }) => "dropdown-item" + (isActive ? " active" : "")}
                    to="/"
                    
                  >
                    New project...
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) => "dropdown-item" + (isActive ? " active" : "")}
                    to="/"
                    
                  >
                    Settings
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) => "dropdown-item" + (isActive ? " active" : "")}
                    to="/"
                    
                  >
                    Profile
                  </NavLink>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) => "dropdown-item" + (isActive ? " active" : "")}
                    to="/"
                    
                  >
                    Sign out
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
    );
}

export default SideMenu;