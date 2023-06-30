import React, { useState } from "react";
import "../css/navBar.css";
import logo from "../logo/logo.jpg";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/slices/authSlice";
import { GiStairsCake } from "react-icons/gi";
import { FaShoppingBag } from "react-icons/fa";
import BagShopping from "./BagShopping";

import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
function NavBar1() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <nav className="navbar navbar-expand-md pb-1">
        <div className="container">
          <span className="navbar-brand">
            <img src={logo} alt="logo" className="img-fluid logo" />
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <Link className="nav-link " to="/">
                  <p className="nav-link item">Home</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/shop">
                  <p className="nav-link item">services</p>
                </Link>
              </li>

              <li className="nav-item">
                {auth.user && auth.user?.role === "admin" ? (
                  <Link className="nav-link " to="/admin ">
                    <p className="nav-link item">Admin Dashboard</p>
                  </Link>
                ) : (
                  ""
                )}
              </li>
              
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                <p className="nav-link item">about us</p>
                  </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#footer">
                  <p className="nav-link item">Contact</p>
                </a>
              </li>
            </ul>
          </div>
          <div className="nav-item togel-log">
            {!auth.isLogin ? (
              <div className=" d-flex ">
                <div class="dropdown">
                  <button
                    class="styleIcon"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <h1>
                      <GiStairsCake />
                    </h1>
                  </button>
                  <ul class="dropdown-menu">
                    <Link to="/login" className="text-decoration-none">
                      <p className="btnlogin text-center">Login</p>
                    </Link>
                    <hr className="linedrop" />
                    <p className="textDROP fs-7">
                      You don't have an account yet ?
                    </p>
                    <Link to="/register " className="text-decoration-none">
                      <p className="btnlogup text-center"> Sign Up</p>
                    </Link>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="d-flex gap-3">
                <div className="">
                  
                    <span onClick={handleShow}><FaShoppingBag /></span>
                  

                  <Offcanvas show={show} onHide={handleClose} placement="end">
                    <Offcanvas.Header closeButton></Offcanvas.Header>
                    <Offcanvas.Body>
                      <BagShopping />
                    </Offcanvas.Body>
                  </Offcanvas>
                </div>
                <div class="dropdown ">
                  <div
                    class="dropdown-toggle item  m-auto mb-2 mb-lg-0"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {auth.user?.username}
                  </div>

                  <ul class="dropdown-menu ">
                    <li className="ps-3 py-2 itemDrop">{auth.user?.email}</li>
                    <li className="ps-3 py-2 itemDrop">+216 {auth.user?.Phone} </li>
                    {auth.user && auth.isLogin === true ? (
                      <li className="ps-3 py-2">
                        <Link className="nav-link " to="/profil ">
                          <p className="itemDrop">Profile</p>
                        </Link>
                      </li>
                    ) : null}
                    <li className="ps-3 py-2 ">
                      <button
                        className="dropdown-item nav-link itemDrop"
                        onClick={() => dispatch(logout())}
                      >
                        {" "}
                        log out
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar1;
