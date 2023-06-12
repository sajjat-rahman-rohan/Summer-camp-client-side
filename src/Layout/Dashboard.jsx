/* eslint-disable no-unused-vars */
import { NavLink, Outlet } from "react-router-dom";
import { FaWallet, FaCalendarAlt, FaHome } from "react-icons/fa";
import useAdmin from "../hooks/useAdmin";

import "./Deshboard.css";

import useInstructor from "../hooks/useInstructor";

const Dashboard = () => {
  const [isAdmin] = useAdmin();

  const [isInstructor] = useInstructor();

  return (
    <div className="drawer drawer-mobile max-w-screen-xl mx-auto">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content bg-stone-100">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side bg-[#30373E]">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 text-[#999999]">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminhome">
                  <FaHome></FaHome> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageclasses">
                  <FaWallet></FaWallet> Manage Classes
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageusers">
                  <FaWallet></FaWallet> Manage Users
                </NavLink>
              </li>
            </>
          ) : isInstructor ? (
            <>
              <li>
                <NavLink to="/dashboard/instructorhome">
                  <FaHome></FaHome> Instructor Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addaclass">
                  <FaCalendarAlt></FaCalendarAlt> Add A New Class
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/instructorclasses">
                  <FaWallet></FaWallet> My Added Classes
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/studenthome">
                  <FaHome></FaHome> Student Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myselectedclasses">
                  <FaCalendarAlt></FaCalendarAlt> My Selected Classes
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myenrolledclasses">
                  <FaWallet></FaWallet> My Enrolled Classes
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/paymenthistory">
                  <FaWallet></FaWallet> Payment History
                </NavLink>
              </li>
            </>
          )}

          <div className="divider m-0 p-0 bg-gray-300 h-1 rounded"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/instructors">
              <FaHome></FaHome> Intructors
            </NavLink>
          </li>
          <li>
            <NavLink to="/classes">
              <FaHome></FaHome> Classes
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
