import React, { useState, useEffect,useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from '../assets/interior2.jpg';
import "../css/dashboardNavbar.css";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthProvider";


const AdminNavbar = (props) => {
    const [userDetails, setuserDetails] = useState(null);
    // const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    // const [isDropdownClicked, setIsDropdownClicked] = useState(false);
    const {auth_userdetails,setAuth} =useContext(AuthContext);
    console.log("Hi admin")
    console.log('by props in adminNavbar', props.user_details)

    useEffect(() => {
        // setuserDetails(location.state?.userDetails);
        setuserDetails(auth_userdetails);
    }, []);
    //   cons

    const navigate = useNavigate();
    const handleTodo = () => {
        navigate("/todo_list", { state: { userDetails: userDetails } });
    }

    const handleProfile = () => {
        navigate("/profile", { state: { userDetails: userDetails } });
    }

    const handleLogout = () => {
        setAuth(null);
        localStorage.removeItem('auth_userdetails');
        // navigate("/");
    }


    return (
        <div className="dashboard-admin">

            <nav>
                <div className='heading'>
                    <h2><span>COLLEGE</span> MANAGEMENT</h2>
                </div>
                <div className='navlinks'>
                    <NavLink className={(e) => { return e.isActive ? "blue" : "" }} to="/">
                        <li>Home</li>
                    </NavLink>
                    <NavLink className={(e) => { return e.isActive ? "blue" : "" }} to="/search"><li>Search</li></NavLink>


                    {/* <NavLink className="navlink-img rounded" to="/profile"><img src={logo} alt="Logo" /></NavLink> */}
                    <div className="dropdown1"  >
                        <img className="navlink-img rounded dropbtn" id src={logo} alt="Logo" />
                        {userDetails && ( // Check if dropdown is clicked
                            <div className="dropdown-menu1">
                                <img className="navlink-img rounded dropbtn" id src={logo} alt="Logo" />

                                {userDetails.type_of_user === 'admin' && (
                                    <p>Hi, {userDetails.staff_name}</p>
                                )}
                                <div className="dropdown-item1" onClick={handleProfile}>
                                    Profile
                                </div>
                                <NavLink className="dropdown-item1" onClick={handleLogout} to="/">SignOut</NavLink>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
            <div className="todo-button" onClick={handleTodo}>
                📝
            </div>
        </div>
    )
}
export default AdminNavbar
