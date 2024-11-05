import React, { useState, useEffect,useContext } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";
import AuthContext from "../context/AuthProvider";
import DashboardNavbar from "./DashboardNavbar";
// import './App.css';
import Timetable from "./Timetable";
import ModifyClass from "./ModifyClass";
import AddTimetable from "./AddTimetable";
import Calendar from "./Calendar";
import Home from "./Home";
import RescheduleClass from "./RescheduleClass";
import AddOrChangeClass from "./AddOrChangeClass";
import CancelClass from "./CancelClass";
// import Navbar from './Navbar';
// import HomePage from './HomePage';
// import Login from './Login';
import Dashboard from "./Dashboard";
import '../css/timetablerouter.css'

function TimetableRouter() {
  console.log("inside time table router")
  const {auth_userdetails} = useContext(AuthContext)
  console.log("after use context")
  const navigate = useNavigate();
  // const location = useLocation();
  // const user_details = location.state?.user_details;
  console.log("user details are: ", auth_userdetails)
  // const [timetableData, setTimetableData] = useState([]);
  console.log("inside time table router");
  // useEffect(() => {
  //   fetchTimetableData();
  // }, []);

  // const fetchTimetableData = async () => {
  //   try {
  //     semester = 
  //     department=cse
  //     //write function to get timetable for specific sem and department

  //     const response = await axios.get("http://127.0.0.1:8000/api/timetable/");
  //     setTimetableData(response.data);
  //   } catch (error) {
  //     console.error("Error fetching timetable data:", error);
  //   }
  // };
  const handleViewTimeTable = () => {
    console.log("inside handle view time table");
    console.log(auth_userdetails);
    navigate("/viewtimetable", { state: { user_details: auth_userdetails } });  
    console.log("after navigate in handle view time table")
  };
  const handleViewCalendar = () => {
    console.log("inside handle view Calendar");
    console.log(auth_userdetails);
    navigate("/viewcalendar", { state: { user_details: auth_userdetails } });
    console.log("after navigate in handle view time table")
  };
  const handleModifyClass = () => {
    console.log("inside handle modify class");
    console.log(auth_userdetails);
    navigate("/modifyclass", { state: { user_details: auth_userdetails } });
    console.log("after navigate in handle modify class")
  };
  const handleViewTodaySchedule = () => {
    console.log("inside handle view Calendar");
    console.log(auth_userdetails);
    navigate("/viewtodayschedule", { state: { user_details: auth_userdetails } });
    console.log("after navigate in handle view time table")
  };
  
  return (
    <>
      <DashboardNavbar/>
      {auth_userdetails && (
        <div className="time_table_container">
          <p className="heading">Time Table</p>
          <p>CSE Department , 6th Semester</p>
          <div>
            <div>

              <p>View permanent time table</p>
              <p>:</p>
              <button onClick={handleViewTimeTable}> View Time Table</button>

            </div>
            <div>
            {auth_userdetails && auth_userdetails.type_of_user === 'faculty' ? (
                
                <>
                  <p>View Today Schedule</p>
                  <p>:</p>
                  <button onClick={handleViewTodaySchedule}>View Today Schedule</button>
                </>
              ) : (
                <>
                  <p>View Daily Schedule</p>
                  <p>:</p>
                  <button onClick={handleViewCalendar}>View Calendar</button>
                </>
              )}

            </div>
            
            {auth_userdetails.type_of_user==="student_cr" && 
              <div> 
                <p>modify time table</p>
                <p>:</p>
                <button onClick={handleModifyClass}> Modify class</button>
              </div>
            }
          </div>
        </div>
      )}
    </>
    // <Router>
    //   {/* <Navbar /> */}
    //   <div className="App">
    //     <Routes>
    //       {/* <Route path="/" element={<HomePage />} /> */}
    //       {/* <Route path="/login" element={<Login />} /> */}
    //       {/* <Route path="/timetable" element={<Timetable data={timetableData} />} />
    //       <Route path="/add" element={<AddTimetable />} />
    //       <Route path="/modifyclass/*" element={<ModifyClass />} />
    //       <Route path="/calendar" element={<Calendar />} />
    //       <Route path="/rescheduleclass" element={<RescheduleClass />} />
    //       <Route path="/addorchangeclass" element={<AddOrChangeClass />} />
    //       <Route path="/cancelclass" element={<CancelClass />} /> */}
    //       {/* view time table, calendar display(Todays Time table), Reschedule class(To CR: From _ to _), add or change class, cancel class     */}

    //     </Routes>
    //   </div>
    // </Router>
  );
}

export default TimetableRouter;