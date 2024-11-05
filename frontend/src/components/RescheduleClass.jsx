import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';
import { Link, useNavigate,useLocation } from 'react-router-dom';
import DashboardNavbar from './DashboardNavbar';
import '../css/rescheduleclass.css'

function RescheduleClass() {
    console.log("inisde reschedule class")
    // const navigate = useNavigate();
    const location = useLocation();
    const user_details = location.state?.user_details
    // const handleViewTimetable = () => {
    //     navigate('/timetable');
    //     window.location.reload();
    // };

    const [rescheduleData, setRescheduleData] = useState({
        from_date: '',
        from_time_slot: '',
        to_date: '',
        to_time_slot: '',
    });

    const handleRescheduleChange = (e) => {
        setRescheduleData({ ...rescheduleData, [e.target.name]: e.target.value });
    };

    const handleReschedule = async (e) => {
        e.preventDefault();
        try {
            const data_to_send = {...rescheduleData,'joining_yr':user_details.joining_year,'department':user_details.department}
            console.log(data_to_send)
            const response = await axios.post('http://127.0.0.1:8000/api/reschedule_class/', data_to_send);
            console.log('Response:', response.data);
            setRescheduleData({
                from_date: '',
                from_time_slot: '',
                to_date: '',
                to_time_slot: '',
            });
        } catch (error) {
            console.error('Error rescheduling class:', error);
        }
    };

    return (
        <>
        
        <DashboardNavbar/>
        <div className='rescheduleclass'>
            {/* <Link to="/home">Go to Home</Link>
            <br />
            <Link to="/modifyclass">Go to Modify class page</Link> */}
            <p>Reschedule Class</p>
            <p>cse department, 6th semester</p>
            
                <form onSubmit={handleReschedule}>
                    <div>
                        <div>
                            <p>From</p>
                            <div>
                                <label htmlFor="from_date">Date</label>
                                <span>:</span>
                                <input type="date" id="from_date" name="from_date" value={rescheduleData.from_date} onChange={handleRescheduleChange} required />
                            </div>

                            <div>
                                <label htmlFor="from_time_slot">Time Slot</label>
                                <span>:</span>
                                <select id="from_time_slot" name="from_time_slot" value={rescheduleData.from_time_slot} onChange={handleRescheduleChange} required>
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
                        </div>  

                        <div className="verticalline"></div>
                        {/* <label htmlFor="rescheduleCourseCode">Course Code:</label>
                        <input type="text" id="rescheduleCourseCode" name="rescheduleCourseCode" value={rescheduleData.rescheduleCourseCode} onChange={handleRescheduleChange} required /> */}
                        <div>

                            <p>To</p>
                            <div>
                                <label htmlFor="to_date">Date</label>
                                <span>:</span>
                                <input type="date" id="to_date" name="to_date" value={rescheduleData.to_date} onChange={handleRescheduleChange} required />
                            </div>

                            <div>
                                <label htmlFor="to_time_slot">Time Slot</label>
                                <span>:</span>
                                <select id="to_time_slot" name="to_time_slot" value={rescheduleData.to_time_slot} onChange={handleRescheduleChange} required>
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
                        </div>
                    </div>
                    <button type="submit">Reschedule</button>
                </form>
            
            {/* <div>
                
                <button onClick={handleViewTimetable}>View Timetable</button>
                <Link to="/calendar">
                    <button>View Calendar</button>
                </Link>
            </div> */}
        </div>
        </>
    );
}

export default RescheduleClass;