import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import Navbar from './Navbar';

function Home() {
    const navigate = useNavigate();

    const handleViewTimetable = () => {
        navigate('/timetable');
        window.location.reload();
    };

    console.log('inside home ')

    return (
        <div>
            {/* <Navbar/> */}
            <h1>Hello CR</h1>
            <div>
                {/* <Link to="/timetable">
                    <button>View Timetable</button>
                </Link> */}
                <button onClick={handleViewTimetable}>View Timetable</button>
                <Link to="/calendar">
                    <button>View Calendar</button>
                </Link>
            </div>
            <br />
            <br />
            <div>
                <Link to="/add">
                    <button>Add Timetable</button>
                </Link>
                <Link to="/modifyclass">
                    <button>Modify Class</button>
                </Link>
            </div>
        </div>
    );
}

export default Home;
