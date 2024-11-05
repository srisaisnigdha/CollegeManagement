import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../css/dashboard.css";
import { Link } from "react-router-dom";
// import AuthContext from '../context/AuthProvider'
// import dashboardImg from './1_dashboard.png';

import Courses from "./courses";

import Card from "./card";
// import logo from '../assets/logo.png';
import logo from '../assets/interior2.jpg';
import DashboardNavbar from "./DashboardNavbar";

const Dashboard = () => {
  const [userDetails, setuserDetails] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const location = useLocation();
  useEffect(() => {
    setuserDetails(location.state?.userDetails);
  }, []);
  //   const userDetails=location.state?.userDetails

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };


  return (
    <>
      {userDetails && (

        <div>
          <div>
          <DashboardNavbar/>
          </div>

          <div className="dashboard">
            <Courses user_details={userDetails} />
            {/* <Card/> */}
          </div>
          {/* <NavLink className="todo-button" to="/todo_list">📝</NavLink> */}
        </div>
      )}
    </>
  );
};

export default Dashboard;





// <nav>
//               <div className='heading'>
//                 <h2><span>COLLEGE</span> MANAGEMENT</h2>
//               </div>
//               <div className='navlinks'>
//                 <NavLink className={(e) => { return e.isActive ? "blue" : "" }} to="/">
//                   <li>Home</li>
//                 </NavLink>
//                 <NavLink className={(e) => { return e.isActive ? "blue" : "" }} to="/about"><li>Timetable</li></NavLink>

//                 <div className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown} onClick={toggleDropdown}>
//                   <NavLink className="dropbtn" id="others-dropdown">Others <span>▼</span></NavLink>
//                   {isDropdownOpen && (
//                     <div className="dropdown-menu">
//                       <NavLink className="dropdown-item" to="/feereceipt">Fee Receipt</NavLink>
//                       <NavLink className="dropdown-item" to="/bonafide">Bonafide</NavLink>
//                     </div>
//                   )}
//                 </div>

//                 <NavLink className="navlink-img rounded" to="/profile"><img src={logo} alt="Logo"/></NavLink>

//               </div>
//             </nav>