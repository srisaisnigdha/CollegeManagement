import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
import DashboardNavbar from './DashboardNavbar';
import logo from '../assets/interior2.jpg';
import "../css/profile.css";
import AdminNavbar from './AdminNavbar';

const Profile = () => {
    // const { email } = useParams();
    // console.log("inside profile ", email)
    const [profileDetails, setProfileDetails] = useState(null);
    const location = useLocation();
    const user_details = location.state?.userDetails

    console.log('in profile: ', user_details)


    useEffect(() => {
        console.log("inside profile use effect");
        const getProfileData = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:8000/api/getUserAllDetails/",
                    { params: { username: user_details.email } }
                );
                console.log("response data", response.data);
                setProfileDetails(response.data);
            } catch (error) {
                console.error("Error fetching profile data:", error);
            }
        };
        getProfileData();
    }, []);

    return (
        <>
        {profileDetails && profileDetails.type_of_user === 'admin' ? (
                <AdminNavbar user_details={profileDetails} />
            ) : (
                <DashboardNavbar/>
            )}
            <div className='profile-container'>
                <div className="header">
                    <img className="navlink-img rounded dropbtn" id src={logo} alt="Logo" />
                    <p>Profile</p>
                </div>

                {/* <div className="student-profile">
                    {profileDetails && profileDetails.type_of_user === 'student' && (
                        <div>
                            <div><p>Name</p>: {profileDetails.student_name}</div>
                            <div><p>Roll No</p>: {profileDetails.roll_no}</div>
                            <div><p>Joining Year</p>: {profileDetails.joining_year}</div>
                            <div><p>Semester</p>: {profileDetails.semester}</div>
                            <div><p>Department</p>: {profileDetails.department}</div>
                            <div><p>Gender</p>: {profileDetails.gender}</div>
                            <div><p>Blood Group</p>: {profileDetails.blood_group}</div>
                            <div><p>Contact Number</p>: {profileDetails.contact_number}</div>
                            <div><p>Email</p>: {profileDetails.email}</div>
                            <div><p>Address</p>: {profileDetails.address}</div>
                        </div>
                    )}
                </div> */}

                <div className="student-profile">
                    {profileDetails && (profileDetails.type_of_user === 'student' || profileDetails.type_of_user === 'student_cr') && (
                        <div>
                            <div className="profile-detail">
                                <p>Name</p>: <span>{profileDetails.student_name}</span>
                            </div>
                            <div className="profile-detail">
                                <p>Roll No</p>: <span>{profileDetails.roll_no}</span>
                            </div>
                            <div className="profile-detail">
                                <p>Joining Year</p>: <span>{profileDetails.joining_year}</span>
                            </div>
                            <div className="profile-detail">
                                <p>Semester</p>: <span> {profileDetails.semester}</span>
                            </div>
                            <div className="profile-detail">
                                <p>Department</p>: <span> {profileDetails.department}</span>
                            </div>
                            <div className="profile-detail">
                                {/* <p>Gender</p>: <span> {profileDetails.gender}</span> */}
                                <p>Gender</p>: <span>{profileDetails.gender === 'M' ? 'Male' : 'Female'}</span>
                            </div>
                            <div className="profile-detail">
                                <p>Blood Group</p>: <span> {profileDetails.blood_group}</span>
                            </div>
                            <div className="profile-detail">
                                <p>Contact Number</p>: <span> {profileDetails.contact_number}</span>
                            </div>
                            <div className="profile-detail">
                                <p>Email</p>: <span> {profileDetails.email}</span>
                            </div>
                            <div className="profile-detail">
                                <p>Address</p>: <span> {profileDetails.address}</span>
                            </div>
                        </div>
                    )}
                </div>



                <div className="faculty-profile">
                    {profileDetails && profileDetails.type_of_user === 'faculty' && (
                        <div>
                            <div className="profile-detail">
                                <p>Name</p>: <span>{profileDetails.faculty_name}</span>
                            </div>
                            <div className="profile-detail">
                                <p>Id</p>: <span>{profileDetails.faculty_id}</span>
                            </div>
                            <div className="profile-detail">
                                <p>Position</p>: <span>{profileDetails.position}</span>
                            </div>
                            <div className="profile-detail">
                                <p>Designation</p>: <span>{profileDetails.designation}</span>
                            </div>
                            <div className="profile-detail">
                                <p>Email</p>: <span>{profileDetails.email}</span>
                            </div>
                            <div className="profile-detail">
                                <p>Description</p>: <span>{profileDetails.description}</span>
                            </div>
                        </div>
                    )}
                </div>

                <div className="admin-profile">
                    {profileDetails && profileDetails.type_of_user === 'admin' && (
                        <div>
                            <div className="profile-detail">
                                <p>Name</p>: <span>{profileDetails.admin_name}</span>
                            </div>
                            <div className="profile-detail">
                                <p>Id</p>: <span>{profileDetails.admin_id}</span>
                            </div>
                            <div className="profile-detail">
                                <p>Position</p>: <span>{profileDetails.position}</span>
                            </div>
                            <div className="profile-detail">
                                <p>Email</p>: <span>{profileDetails.email}</span>
                            </div>
                        </div>
                    )}
                </div>


            </div>
        </>
    );
};

export default Profile;