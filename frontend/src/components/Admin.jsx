import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import AdminNavbar from './AdminNavbar'
import "../css/admin.css";

const Admin = () => {
  const [userDetails, setuserDetails] = useState(null);

  const location = useLocation();
  useEffect(() => {
    setuserDetails(location.state?.userDetails);
  }, []);
  console.log("I am here")
  console.log("userdetails in admin", userDetails);


  const navigate = useNavigate();
  const handleClassesStudents = () => {
    console.log(userDetails)
    navigate(`/admissions`, { state: { userDetails: userDetails } })
  }


  const handleClassesDefaulters = () => {
    console.log(userDetails)
    navigate(`/classes`, { state: { userDetails: userDetails } })
  }

  const handleFeeReceipts = () => {
    console.log(userDetails)
    navigate(`/feereceipts`, { state: { userDetails: userDetails } })
  }

  const handleBonafideCertificates = () => {
    console.log(userDetails)
    navigate(`/bonafidecertificate`, { state: { userDetails: userDetails } })
  }

  const handleNewStudent=()=>{
    console.log(userDetails)
    navigate("/addnewstudent", { state: { userDetails: userDetails } })
  }

  const handleTimetable = () => {
    console.log(userDetails)
    navigate("/addtimetable", { state: { userDetails: userDetails } })
  }

  return (
    <>
        <AdminNavbar user_details={userDetails} />
      {userDetails && (
        <div className="admin">

          <div>
            <button onClick={handleClassesStudents}>Students List</button>
          </div>

          <div>
            <button onClick={handleClassesDefaulters}>Fee defaulters</button>
            {/* <NavLink className={(e) => { return e.isActive ? "blue" : "" }} to={{pathname : `/classes`,state:{userDetails:userDetails}}}><li>Fee defaulters</li></NavLink>                 */}
          </div>

          <div>
            <button onClick={handleFeeReceipts}>Fee Receipt Messages</button>
          </div>

          <div>
            <button onClick={handleBonafideCertificates}>Bonafide Certificate Messages</button>
          </div>

          <div>
            <button onClick={handleNewStudent}>Add New Student</button>
          </div>

          <div>
            <button onClick={handleTimetable}>Add Timetable</button>
          </div>

        </div>
      )}
    </>

  )
}

export default Admin;