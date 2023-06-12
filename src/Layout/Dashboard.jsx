/* eslint-disable no-unused-vars */
import { NavLink, Outlet } from "react-router-dom";
import {
  FaWallet,
  FaCalendarAlt,
  FaHome,
  FaHistory,
  FaFileAlt,
  FaUsers,
} from "react-icons/fa";
import {
  MdBookmarkAdded,
  MdIncompleteCircle,
  MdManageAccounts,
  MdManageHistory,
} from "react-icons/md";
import useAdmin from "../hooks/useAdmin";
import { VscDiffAdded } from "react-icons/vsc";

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
                  <MdManageHistory></MdManageHistory> Manage Classes
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageusers">
                  <MdManageAccounts></MdManageAccounts> Manage Users
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
                  <VscDiffAdded></VscDiffAdded> Add A New Class
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/instructorclasses">
                  <MdIncompleteCircle></MdIncompleteCircle> My Added Classes
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
                  <MdBookmarkAdded></MdBookmarkAdded> My Selected Classes
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myenrolledclasses">
                  <MdIncompleteCircle></MdIncompleteCircle> My Enrolled Classes
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/paymenthistory">
                  <FaHistory></FaHistory> Payment History
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
              <FaUsers></FaUsers> Intructors
            </NavLink>
          </li>
          <li>
            <NavLink to="/classes">
              <FaFileAlt></FaFileAlt> Classes
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
