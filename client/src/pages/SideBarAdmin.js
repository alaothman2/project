import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { BiTable } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { GrNewWindow } from "react-icons/gr";
import { MdOutlineDashboard } from "react-icons/md";

import "../css/SideBarAdmin.css";
function SideBarAdmin() {
  return (
    <div className="bg-white sidebar-admin mt-1 mb-1 p-2">
      <div className="m-2 d-flex topofpage ">
        <p className="fs-4 me-3"><MdOutlineDashboard /></p>
        <span className="barand-name fs-4"> Dashboard </span>
        
      </div>
      <hr className="text-dark " />
      <div className="list-group list-group-flush sideBar-bt">
        <Link to="AdminHome" className="gg">
          <span className="list-group-item py-2  d-flex gap-2  my-1">
            <p className="fs-5 me-3 iconAdmin">
              <AiOutlineHome  />
            </p>
            <p className="fs-5 name">Home</p>
          </span>
        </Link>
        <Link to="ManagingProducts" className="gg">
          <span className="list-group-item py-2 d-flex gap-2 my-1">
            <p className="fs-5 me-3">
              <BiTable />
            </p>
            <p className="fs-5 name">Products</p>
          </span>
        </Link>

        <Link  to="users" className="gg">
          <span className="list-group-item py-2 d-flex gap-2 my-1">
            <p className="fs-5 me-3">
              <FaUsers />
            </p>
            <p className="fs-5 name">Customers</p>
          </span>
        </Link>
        <Link  to="createProdcuct" className="gg">
          <span className="list-group-item py-2 d-flex gap-2 my-1">
            <p className="fs-5 me-3">
              <GrNewWindow />
            </p>
            <p className="fs-5 name">add new product</p>
          </span>
        </Link>
      </div>
    </div>
  );
}

export default SideBarAdmin;
