import React from "react";
import "./App.css";
import Attendance from "./components/attendance";
import Result from "./components/result";
import Login from "./components/login";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Timetable from "./components/Timetable";
import Navbar from "./components/Navbar";
import TimetableRouter from "./components/timetablerouter";
import ModifyClass from "./components/ModifyClass";
import Calendar from "./components/Calendar";
import RescheduleClass from "./components/RescheduleClass";
import AddOrChangeClass from "./components/AddOrChangeClass";
import CancelClass from "./components/CancelClass";
import DashboardNavbar from "./components/DashboardNavbar";
import Todo from "./components/todo";
import { AuthProvider } from "./context/AuthProvider";

import SearchPage from "./components/search";
import Admin from "./components/Admin";
import Classes from "./components/Classes";
import Feedefaulters from "./components/Feedefaulters";
import FeeReceipts from "./components/FeeReceipts";
import BonafideCertificate from "./components/BonafideCertificate";
import FeeReceiptStudent from "./components/FeeReceiptStudent";
import BonafideCertificateStudent from "./components/BonafideCertificateStudent";
import Admissions from "./components/Admissions";
import Members from "./components/Members";
import AddNewStudent from "./components/AddNewStudent";
import Profile from "./components/Profile";
import FacultySchedule from "./components/FacultySchedule";
import AddTimetable from "./components/AddTimetable";
import AttendanceShortage from "./components/attendance_shortage";
const App = () => {
  console.log("inside app");
  return (
    <AuthProvider>
      <Router>
        {/* <DashboardNavbar /> */}

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="/attendance/:course_id/:department"
            element={<Attendance />}
          />
          <Route path="/result/:course_id/:department" element={<Result />} />
          <Route path="/timetable" element={<TimetableRouter />} />
          <Route path="/viewtimetable" element={<Timetable />} />
          {/* <Route path="/add_class" element={<AddTimetable />} /> */}
          <Route path="/modifyclass/*" element={<ModifyClass />} />
          <Route path="/viewcalendar" element={<Calendar />} />
          <Route path="/rescheduleclass" element={<RescheduleClass />} />
          <Route path="/addorchangeclass" element={<AddOrChangeClass />} />
          <Route path="/cancelclass" element={<CancelClass />} />
          <Route path="/todo_list" element={<Todo />} />

          <Route path="/admin" element={<Admin />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/classes" element={<Classes />} />
          <Route
            path="/feedefaulter/:department/:batch"
            element={<Feedefaulters />}
          />
          <Route path="/feereceipts" element={<FeeReceipts />} />
          <Route
            path="/bonafidecertificate"
            element={<BonafideCertificate />}
          />
          <Route path="/feereceiptstudent" element={<FeeReceiptStudent />} />
          <Route
            path="/bonafidestudent"
            element={<BonafideCertificateStudent />}
          />
          <Route path="/admissions" element={<Admissions />} />
          <Route
            path="/member/:department/:joiningYear"
            element={<Members />}
          />
          <Route path="/addnewstudent" element={<AddNewStudent />} />
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/viewtodayschedule" element={<FacultySchedule/>}/>
          <Route path="/addtimetable" element={<AddTimetable/>}/>
          <Route
            path="/attendanceshortage/:course_id/:department"
            element={<AttendanceShortage />}
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
