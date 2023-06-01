import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/slices/authSlice";

function NavBar() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
// 
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <span className="navbar-brand">App </span>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " to="/">
                  Home
                </Link>
              </li>

              {auth.user && auth.isLogin === true ? (
                <li className="nav-item">
                  <Link className="nav-link " to="/profil ">
                    Profile
                  </Link>
                </li>
              ) : null}

              <li className="nav-item">
                {auth.user && auth.user.role === "admin" ? (
                  <Link className="nav-link " to="/users ">
                    Users
                  </Link>
                ) : (
                  ""
                )}
              </li>
            </ul>
            <div className="nav-item ">
              {!auth.isLogin ? (
                <div classNamee=" d-flex gap-2">
                  <Link className=" btn btn-primary" to="/register ">
                    Sign Up{" "}
                  </Link>

                  <Link className=" btn btn-primary" to="/login">
                    Login
                  </Link>
                </div>
              ) : (
                <button
                  className="btn btn-danger"
                  onClick={() => dispatch(logout())}
                >
                  {" "}
                  logout
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
