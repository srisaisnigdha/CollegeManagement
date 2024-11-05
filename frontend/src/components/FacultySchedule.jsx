import React, { useState, useEffect, useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import DashboardNavbar from "./DashboardNavbar";
// import { Link } from 'react-router-dom';
import '../css/timetable.css'
import axios from 'axios'


const FacultySchedule = () => {
    console.log("inside faculty time table");
    const location = useLocation();
    const user_details = location.state?.user_details;
    console.log(user_details)
    const [timetableData, setTimetableData] = useState([]);

    

    useEffect(() => {
        const fetchTimetableData = async () => {
            try {
                const faculty_name = user_details.faculty_name;
                //write function to get timetable for specific sem and department
                // const response = await axios.get('http://127.0.0.1:8000/api/timetable/');
                console.log("before calling");
                let details = {
                    faculty_name: faculty_name,
                };
                console.log("details are: ", details);
                let response = await axios.get(
                    "http://localhost:8000/api/getFacultySchedule/",
                    {
                        params: details,
                    }
                );
                console.log("after calling: ", response.data);
                setTimetableData(response.data.slots_today);
                console.log(timetableData)
            } catch (error) {
                console.error("Error fetching timetable data:", error);
            }
        };
        fetchTimetableData();
    }, []);

    
    return (
        <>
            <DashboardNavbar user_details={user_details} />
            {timetableData && (
                <div className="timetable">
                    <p>Today's Schedule</p>
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Slot 1</th>
                                    <th>Slot 2</th>
                                    <th>Slot 3</th>
                                    <th>Slot 4</th>
                                    <th>Slot 5</th>
                                    <th>Slot 6</th>
                                    <th>Slot 7</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{timetableData.slot_1}</td>
                                    <td>{timetableData.slot_2}</td>
                                    <td>{timetableData.slot_3}</td>
                                    <td>{timetableData.slot_4}</td>
                                    <td>{timetableData.slot_5}</td>
                                    <td>{timetableData.slot_6}</td>
                                    <td>{timetableData.slot_7}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </>
    );

};

export default FacultySchedule;


