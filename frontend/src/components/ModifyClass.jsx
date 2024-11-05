import React from 'react';
import { NavLink, useLocation,useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import DashboardNavbar from './DashboardNavbar';
import '../css/modifyclass.css'

function ModifyClass() {
  const navigate = useNavigate();
  const location = useLocation();
  const user_details = location.state?.user_details;
    const handleRescheduleClass = () => {
        console.log("inside handle reschedule Class");
        console.log(user_details);
        navigate("/rescheduleclass", { state: { user_details: user_details } });
        console.log("here")
      };
      const handleAddClass = () => {
        console.log("inside handle Add Class");
        console.log(user_details);
        navigate("/addorchangeclass", { state: { user_details: user_details } });
      };
      const handleCancelClass = () => {
        console.log("inside handle Cancel Class");
        console.log(user_details);
        navigate("/cancelclass", { state: { user_details: user_details } });
      };
      console.log("inside modify class");
      console.log("type is: ",user_details.type_of_user);
    return (
        <>
          <DashboardNavbar/>
          
              {/* <Link to="/home">Go to Home</Link> */}
              {/* <h1>Modify Class</h1> */}
              {user_details.type_of_user === "student_cr" && (
              <div className='modifyclass'>
                <p className="heading">Modify Time Table</p>
                <p>CSE Department, 6th Semester</p>
                <div>
                  <div>
                    <p>reschedule existing class</p>
                    <p>:</p>
                    <button onClick={handleRescheduleClass}>Reschedule class</button>
                  </div>
                  <div>
                    <p>add/change in a slot</p>
                    <p>:</p>
                    <button onClick={handleAddClass}>Add/change class</button>

                  </div>
                  <div>
                    <p>cancel a class</p>
                    <p>:</p>
                    <button onClick={handleCancelClass}>Cancel class</button>
                  </div>
                </div>
              </div>
            )}
              {/* <RescheduleClass /> */}
          
        </>
    );
}

export default ModifyClass;