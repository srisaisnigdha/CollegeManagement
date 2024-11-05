import React, { useState, useEffect,useContext } from "react";
import { NavLink, useLocation,useNavigate } from "react-router-dom";
import logo from '../assets/interior2.jpg';
import "../css/dashboardNavbar.css";

import AuthContext from "../context/AuthProvider";


const DashboardNavbar = () => {
    const [userDetails, setuserDetails] = useState(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const {auth_userdetails,setAuth} = useContext(AuthContext);

    const navigate = useNavigate();

    const location = useLocation();
    useEffect(() => {
        // setuserDetails(location.state?.userDetails);
        setuserDetails(auth_userdetails);
    }, []);
    //   const userDetails=location.state?.userDetails

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleTodo= () => {
        // console.log('inside dashboard navbar',userDetails)
        navigate("/todo_list", { state: { userDetails: userDetails} });
      
    }

    const handleProfile = () => {
        navigate("/profile", { state: { userDetails: userDetails } });
    }

    // mahitha
    const handleStudentFeeReceipt = () => {
        navigate("/feereceiptstudent", { state: { userDetails: userDetails } })
    }
    const handleStudentBonafideCertificate = () => {
        navigate("/bonafidestudent", { state: { userDetails: userDetails } })
    }

    const handleLogout = () => {
        setAuth(null);
        localStorage.removeItem('auth_userdetails');
        // navigate("/");
    }
    

    return (
        <>
        {
            userDetails && (
                <div>

                <nav>
                    <div className='heading'>
                        <h2><span>COLLEGE</span> MANAGEMENT</h2>
                    </div>
                    <div className='navlinks'>
                        <NavLink className={(e) => { return e.isActive ? "blue" : "" }} to="/">
                            <li>Home</li>
                        </NavLink>
                        <NavLink className={(e) => { return e.isActive ? "blue" : "" }} to="/search"><li>Search</li></NavLink>
                        <NavLink className={(e) => { return e.isActive ? "blue" : "" }} to="/timetable"><li>Timetable</li></NavLink>
    
                     
                        {(userDetails.type_of_user==="student" || userDetails.type_of_user==="student_cr") && (
                            <div className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown} onClick={toggleDropdown}>
                            <NavLink className="dropbtn" id="others-dropdown">Others <span>▼</span></NavLink>
                            {isDropdownOpen && (
                                <div className="dropdown-menu">
                                    {/* <NavLink className="dropdown-item" to="/feereceiptstudent">Fee Receipt</NavLink> */}
                                    <div className="dropdown-item" onClick={handleStudentFeeReceipt}>
                                        Fee Receipt
                                    </div>
                                    <div className="dropdown-item" onClick={handleStudentBonafideCertificate}>
                                        Bonafide
                                    </div>
                                    {/* <NavLink className="dropdown-item" to="/bonafidestudent">Bonafide</NavLink> */}
                                </div>
                            )}
                        </div>
                        )}
    
                        {/* <NavLink className="navlink-img rounded" to="/profile"><img src={logo} alt="Logo" /></NavLink> */}
                        <div className="dropdown1"  >
                            <img className="navlink-img rounded dropbtn" id src={logo} alt="Logo" />
                            {userDetails && ( // Check if dropdown is clicked
                                <div className="dropdown-menu1">
                                    <img className="navlink-img rounded dropbtn" id src={logo} alt="Logo" />
                                    {userDetails.type_of_user === 'student' || userDetails.type_of_user==='student_cr'&& (
    
                                        <p>Hi, {userDetails.student_name}</p>
                                    )}
                                    {userDetails.type_of_user === 'faculty' && (
    
                                        <p>Hi, {userDetails.faculty_name}</p>
                                    )}
                                    {userDetails.type_of_user === 'admin' && (
                                        <p>Hi, {userDetails.staff_name}</p>
                                    )}
                                    {/* <NavLink className="dropdown-item1" to="/profile">Profile</NavLink> */}
                                    {/* <NavLink className="dropdown-item1" to={{ pathname: "/profile", state: { email: user_details.email } }}>Profile</NavLink> */}
    
                                    {/* <NavLink className="dropdown-item1" to={/profile/${user_details.email}}>Profile</NavLink> */}
                                    <div className="dropdown-item1" onClick={handleProfile}>
                                        Profile
                                    </div>
                                    <NavLink className="dropdown-item1" onClick={handleLogout} to="/">SignOut</NavLink>
                                </div>
                            )}
                        </div>
                    </div>
                </nav>
                {/* <NavLink className="todo-button" to="/todo_list">📝</NavLink> */}
                <div className="todo-button" onClick={handleTodo}>📝</div>
            </div>
            )
        }
        </>
    )
}
export default DashboardNavbar
