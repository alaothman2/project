import React from "react";
import SideBarAdmin from "./SideBarAdmin";
import "../css/Dashaboard.css";
import { Outlet } from "react-router-dom";
function AdminDashboard() {
  return (
    <div className="container-fluid mt-5 bg-secondary  min-vh-100">
      <div className="row admin">
        <div className="col-2 bg-light ">
          <SideBarAdmin />
        </div>
        <div className="col-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
