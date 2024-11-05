import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AdminNavbar from './AdminNavbar'
import "../css/classesAdmissions.css";

const Admissions = () => {

    const [userDetails, setUserDetails] = useState(null);
    const [department, setDepartment] = useState('');
    const [joiningYear, setJoiningYear] = useState('');


    const location = useLocation();
    const navigate = useNavigate();

    // Set user details from location state
    useEffect(() => {
        setUserDetails(location.state?.userDetails);
    }, [location.state]);

    // Function to handle navigation to members page
    const handleEachClassMembers = () => {
        navigate(`/member/${department.toLowerCase()}/${joiningYear}`, { state: { userDetails } });
    };

    return (
        <>
            <AdminNavbar user_details={userDetails} />
            <div className='admissions'>
                <div className="header">
                    <p>Students</p>
                </div>
                <div className='inputs'>
                    <label>
                        <p>Joining Year</p>:
                        <span>
                            <input
                                type="text"
                                value={joiningYear}
                                onChange={(e) => setJoiningYear(e.target.value)}
                            // placeholder="Enter joiningYear"
                            />
                        </span>
                    </label>
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
                    <button onClick={handleEachClassMembers}>View List</button>
                </div>
            </div>
        </>
    );











    return (
        <div>Admissions</div>
    )
}

export default Admissions;