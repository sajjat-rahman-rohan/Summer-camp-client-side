/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import logo from "../../../assets/logo1.png";
import { Button, Nav } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import useAdmin from "../../../hooks/useAdmin";
import "./Header.css";
import ReactSwitch from "react-switch";
import useInstructor from "../../../hooks/useInstructor";

const Header = ({ onChange, checked, theme }) => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin();

  const [isInstructor] = useInstructor();

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };

  return (
    <div className="header text-center">
      <nav className="md:flex justify-between items-center max-w-screen-xl mx-auto">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          <img src={logo} className="h-16 inline" alt="" />
        </NavLink>

        <ul className="gap-4 md:flex justify-between items-center">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/instructors"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Instructors
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/classes"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Classes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Blog
            </NavLink>
          </li>
          {user?.email ? (
            <>
              {isAdmin ? (
                <li>
                  <NavLink
                    to="/dashboard/adminhome"
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }
                  >
                    Dashboard
                  </NavLink>
                </li>
              ) : isInstructor ? (
                <li>
                  <NavLink
                    to="/dashboard/instructorhome"
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }
                  >
                    Dashboard
                  </NavLink>
                </li>
              ) : (
                <li>
                  <NavLink
                    to="/dashboard/studenthome"
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }
                  >
                    Dashboard
                  </NavLink>
                </li>
              )}
            </>
          ) : (
            <></>
          )}

          <div className="switch flex justify-center gap-2">
            <ReactSwitch onChange={onChange} checked={checked} />
            <label className="m-0">{theme}</label>
          </div>
        </ul>

        <div>
          <Nav className="md:flex justify-between gap-3 items-center">
            {user && (
              <div className="mt-2">
                <OverlayTrigger
                  placement="bottom"
                  overlay={
                    <Tooltip id="tooltip">
                      <strong>{user.displayName}</strong>
                    </Tooltip>
                  }
                  className="ml-5"
                >
                  <div className=" avatar online">
                    {user.photoURL ? (
                      <img
                        className="ring ring-primary ring-offset-base-100 ring-offset-2"
                        src={user.photoURL}
                        style={{
                          height: "40px",
                          width: "40px",
                          borderRadius: "50%",
                        }}
                      />
                    ) : (
                      <FaUserCircle
                        style={{
                          fontSize: "2.5rem",
                          color: "white",
                        }}
                      ></FaUserCircle>
                    )}
                  </div>
                </OverlayTrigger>
              </div>
            )}
            {user ? (
              <Button
                onClick={handleLogOut}
                variant="secondary"
                className="px-4 py-2 m-0"
              >
                Logout
              </Button>
            ) : (
              <Link to="/login">
                <Button variant="secondary m-0">Login</Button>
              </Link>
            )}
          </Nav>
        </div>
      </nav>
    </div>
  );
};

export default Header;
