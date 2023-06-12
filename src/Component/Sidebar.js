import React from "react";
import { Link, useLocation, NavLink } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  return (
    <nav className="slidermain">
      <div className="">
        <div className="sliderLogo">Lodgn</div>
        <div>
          <NavLink
            to="/"
            style={({ isActive }) =>
              isActive ? { color: "#72aa83" } : { color: "#494949" }
            }
          >
            <div className="pages">Current request</div>
          </NavLink>
          <div className="line"></div>
          <NavLink
            to="/OngoingStays"
            style={({ isActive }) =>
              isActive ? { color: "#72aa83" } : { color: "#494949" }
            }
          >
            <div className="pages2">Ongoing stays</div>
          </NavLink>
          <div className="line2"></div>
          <NavLink to="/PreviousStays" style={({ isActive }) =>
              isActive ? { color: "#72aa83" } : { color: "#494949" }
            }>
            <div className="pages3">Previous stays</div>
          </NavLink>
          <div className="line3"></div>
          <NavLink to="/Reports" style={({ isActive }) =>
              isActive ? { color: "#72aa83" } : { color: "#494949" }
            }>
            <div className="pages4">Reports</div>
          </NavLink>
          <div className="line4"></div>
        </div>
      </div>
      <div>
        <div className="logoutBg">
          <div className="logoutButton">Log - Out</div>
        </div>
        <div className="helpDesk">Help-Desk:</div>
        <div className="number">786-874 9988</div>
      </div>
    </nav>
  );
};

export default Sidebar;
