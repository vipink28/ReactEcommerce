import React from "react";
import Navigation from "../Menu/Navigation";
import { NavLink } from "react-router-dom";

function AdminLayout(props) {
  return (
    <>
    <Navigation />
    <div className="container-fluid p-0">
      <div className="row g-0">
        <div className="col-2">
          <div
            className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
            style={{ height: "calc(100vh - 56px)" }}
          >
            <NavLink
              to="/"
              className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
            >
              {/* <svg className="bi me-2" width="40" height="32"><use xNavLink:href="#bootstrap"></use></svg> */}
              <span className="fs-4">Sidebar</span>
            </NavLink>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
              <li>
                <NavLink
                  to="/admin/dashboard"
                  className="nav-link text-white"
                  activeClassName="active"
                >
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/admin/orders"
                  className="nav-link text-white"
                  activeClassName="active"
                >
                  Orders
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/admin/addcategory"
                  className="nav-link text-white"
                  activeClassName="active"
                >
                  Add Category
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/admin/products"
                  className="nav-link text-white"
                  activeClassName="active"
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/admin/user"
                  className="nav-link text-white"
                  activeClassName="active"
                >
                  Customers
                </NavLink>
              </li>
            </ul>
            <hr />
            <div className="dropdown">
              <NavLink
                to="/"
                className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
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
                    className="dropdown-item"
                    to="/"
                    activeClassName="active"
                  >
                    New project...
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/"
                    activeClassName="active"
                  >
                    Settings
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/"
                    activeClassName="active"
                  >
                    Profile
                  </NavLink>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/"
                    activeClassName="active"
                  >
                    Sign out
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-10">
          <Outlet />
        </div>
      </div>
   </div>
   </>
  );
}

export default AdminLayout;
