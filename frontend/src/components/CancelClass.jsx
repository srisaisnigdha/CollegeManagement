import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import DashboardNavbar from "./DashboardNavbar";
import "../css/cancelclass.css";

function CancelClass() {
  const navigate = useNavigate();
  const location = useLocation();
  const user_details = location.state?.user_details;

  const [cancelData, setCancelData] = useState({
    cancel_date: "",
    cancel_time_slot: "",
  });

  const handleCancelChange = (e) => {
    setCancelData({ ...cancelData, [e.target.name]: e.target.value });
  };

  const handleCancel = async (e) => {
    e.preventDefault();
    try {
      const data_to_send = {
        ...cancelData,
        joining_yr: user_details.joining_year,
        department: user_details.department,
      };
      console.log(data_to_send);
      const response = await axios.post(
        "http://127.0.0.1:8000/api/cancel_class/",
        data_to_send
      );
      console.log("Response:", response.data);
      setCancelData({
        cancel_date: "",
        cancel_time_slot: "",
      });
    } catch (error) {
      console.error("Error rescheduling class:", error);
    }
  };

  return (
    <>
      <DashboardNavbar />
      <div className="cancelclass">
        <p>Cancel Class</p>
        <p>CSE Department, 6th Semester</p>
        <form onSubmit={handleCancel}>
          <div>
            <label htmlFor="cancel_date">Date:</label>
            <input
              type="date"
              id="cancel_date"
              name="cancel_date"
              value={cancelData.cancel_date}
              onChange={handleCancelChange}
              required
            />
          </div>

          <div>
            <label htmlFor="cancel_time_slot">Time Slot:</label>
            <select
              id="cancel_time_slot"
              name="cancel_time_slot"
              value={cancelData.cancel_time_slot}
              onChange={handleCancelChange}
              required
            >
              <option value="">Select Time Slot</option>
              <option value="09:20-10:10">09:20 - 10:10</option>
              <option value="10:10-11:00">10:10 - 11:00</option>
              <option value="11:20-12:10">11:20 - 12:10</option>
              <option value="12:10-13:00">12:10 - 13:00</option>
              <option value="14:00-14:50">14:00 - 14:50</option>
              <option value="14:50-15:40">14:50 - 15:40</option>
              <option value="16:00-16:50">16:00 - 16:50</option>
            </select>
          </div>

          {/* <label htmlFor="rescheduleCourseCode">Course Code:</label>
                        <input type="text" id="rescheduleCourseCode" name="rescheduleCourseCode" value={cancelData.rescheduleCourseCode} onChange={handleCancelChange} required /> */}

          <button type="submit">Cancel class</button>
        </form>
      </div>
    </>
  );
}

export default CancelClass;
