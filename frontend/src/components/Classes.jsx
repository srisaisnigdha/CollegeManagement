import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AdminNavbar from './AdminNavbar';
import "../css/classesAdmissions.css";

const Classes = () => {

    const [userDetails, setUserDetails] = useState(null);
    const [department, setDepartment] = useState('');
    const [batch, setBatch] = useState('');


    const location = useLocation();
    const navigate = useNavigate();

    // Set user details from location state
    useEffect(() => {
        setUserDetails(location.state?.userDetails);
    }, [location.state]);

    // Function to handle navigation to fee defaulters page
    const handleEachClassDefaulters = () => {
        navigate(`/feedefaulter/${department}/${batch}`, { state: { userDetails } });
    };

    return (
        <>
            <AdminNavbar user_details={userDetails} />
            <div className='classes'>
                <div className="header">
                    <p>Fee Defaulters</p>
                </div>
                <div className='inputs'>
                    {/* <label>
                        <p>Batch:</p>
                        <input
                            type="text"
                            value={batch}
                            onChange={(e) => setBatch(e.target.value)}
                            placeholder="Enter batch"
                        />
                    </label>
                    <label>
                        <p>Department:</p>
                        <input
                            type="text"
                            value={department}
                            onChange={(e) => setDepartment(e.target.value)}
                            placeholder="Enter department"
                        />
                    </label> */}
                    {/* <div className="input-group"> */}
                        <label>
                            <p>Batch</p>:
                            <span>
                                <input
                                    type="text"
                                    value={batch}
                                    onChange={(e) => setBatch(e.target.value)}
                                    // placeholder="Enter batch"
                                />
                            </span>
                        </label>
                    {/* </div> */}
                    {/* <div className="input-group"> */}
                        <label>
                            <p>Department</p>:
                            <span>
                                <input
                                    type="text"
                                    value={department}
                                    onChange={(e) => setDepartment(e.target.value)}
                                    // placeholder="Enter department"
                                />
                            </span>
                        </label>
                    {/* </div> */}
                    <button onClick={handleEachClassDefaulters}>View List</button>
                </div>
            </div>
        </>
    );
};

export default Classes;
