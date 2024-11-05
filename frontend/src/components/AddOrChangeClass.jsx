import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';
import { Link, useNavigate,useLocation } from 'react-router-dom';
import DashboardNavbar from './DashboardNavbar';
import '../css/addorchangeclass.css'

function AddOrChangeClass() {

    const navigate = useNavigate();

    const location = useLocation();
    const user_details = location.state?.user_details;

    const [AddOrChangeData, setAddOrChangeData] = useState({
        addorchange_date: '',
        addorchange_time_slot: '',
        addorchange_course_code: '',    
    });

    const handleChange = (e) => {
        setAddOrChangeData({ ...AddOrChangeData, [e.target.name]: e.target.value });
    };

    const handleAddOrChange = async (e) => {
        e.preventDefault();
        try {
            const data_to_send = {...AddOrChangeData,'joining_yr':user_details.joining_year,'department':user_details.department}
            console.log(data_to_send)
            const response = await axios.post('http://127.0.0.1:8000/api/add_or_change_class/', data_to_send);
            console.log('Response:', response.data);
            setAddOrChangeData({
                addorchange_date: '',
                addorchange_time_slot: '',
                addorchange_course_code: '',
            });
        } catch (error) {
            console.error('Error rescheduling class:', error);
        }
    };

    return (
        <>
        <DashboardNavbar/>
        <div className='addorchangeclass'>
            {/* <Link to="/home">Go to Home</Link> */}
            {/* <Link to="/modifyclass">Go to Modify class page</Link> */}
            <p>Add/Change Class</p>
            <p>CSE Department , 6th Semester</p>

                <form onSubmit={handleAddOrChange}>
                    <div>
                        <label htmlFor="addorchange_date">Date</label>
                        <span>:</span>
                        <input type="date" id="addorchange_date" name="addorchange_date" value={AddOrChangeData.addorchange_date} onChange={handleChange} required />
                    </div>

                    <div>

                        <label htmlFor="addorchange_time_slot">Time Slot</label>
                        <span>:</span>
                        <select id="addorchange_time_slot" name="addorchange_time_slot" value={AddOrChangeData.addorchange_time_slot} onChange={handleChange} required>
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

                    <div>
                        <label htmlFor="addorchange_course_code">Course Code</label>
                        <span>:</span>
                        <input type="text" id="addorchange_course_code" name="addorchange_course_code" value={AddOrChangeData.addorchange_course_code} onChange={handleChange} required />
                    </div>
                    <button type="submit">Add/change</button>
                </form>
           
            
            <div>
                {/* <Link to="/timetable">
                    <button>View Timetable</button>
                </Link> */}
                {/* <button onClick={handleViewTimetable}>View Timetable</button>
                <Link to="/calendar">
                    <button>View Calendar</button>
                </Link> */}
            </div>
        </div>
        </>
    );
}

export default AddOrChangeClass;