import React from "react";
import Navigation from "../Menu/Navigation";
import { Outlet } from "react-router-dom";
import SideMenu from "../Menu/SideMenu";

function AdminLayout(props) {
  return (
    <>
    <Navigation />
    <div className="container-fluid p-0">
      <div className="row g-0">
        <div className="col-2">
          <SideMenu />
        </div>
        <div className="col-md-10">
          <div className="row m-0">
          <Outlet />
          </div>
        </div>
      </div>
   </div>
   </>
  );
}

export default AdminLayout;
