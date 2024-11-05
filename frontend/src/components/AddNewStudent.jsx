import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminNavbar from './AdminNavbar'
import "../css/classesAdmissions.css";

const AddNewStudent = () => {
    const [userDetails, setuserDetails] = useState(null);

    const location = useLocation();
    useEffect(() => {
        setuserDetails(location.state?.userDetails);
    }, []);
    console.log("I am here")
    console.log("userdetails in admin", userDetails);

    const [rollNo, setRollNo] = useState("");
    const [name, setName] = useState("");
    const [department, setDepartment] = useState("");
    const [joiningYear, setJoiningYear] = useState("");
    const [bloodGroup, setBloodGroup] = useState("");
    const [semester, setSemester] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [address, setAddress] = useState("");
    const [gender, setGender] = useState("");
    const [email, setEmail] = useState("");

    const calculateSemester = (joiningYear) => {
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth() + 1; // Months are zero-based (0-11)

        const yearsSinceJoining = (currentYear - parseInt(joiningYear)) + ((currentMonth - 6) / 12);
        let calculatedSemester;

        if (yearsSinceJoining >= 4) {
            calculatedSemester = 0;
        }
        else if (yearsSinceJoining < 0) {
            calculatedSemester = "";
        }
        else {
            calculatedSemester = Math.floor(yearsSinceJoining * 2) + 1;
        }

        return calculatedSemester;
    };

    useEffect(() => {
        if (joiningYear) {
            const calculatedSemester = calculateSemester(joiningYear);
            setSemester(calculatedSemester);
        }
    }, [joiningYear]);

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission

        const data = {
            roll_no: rollNo,
            name: name,
            department: department,
            joining_year: joiningYear,
            blood_group: bloodGroup,
            semester: semester,
            contact_number: contactNumber,
            address: address,
            gender: gender,
            email: email,
        };

        try {
            const response = await axios.post('http://localhost:8000/api/addNewStudent/', data);
            if (response.status === 200) {
                toast.success("New student has been added successfully!");
                setRollNo("");
                setName("");
                setDepartment("");
                setJoiningYear("");
                setBloodGroup("");
                setSemester("");
                setContactNumber("");
                setAddress("");
                setGender("");
                setEmail("");
            }
        } catch (error) {
            console.error("Error adding new student:", error);
            toast.error("An error occurred while adding the new student. Please try again.");
        }
    };

    return (
        <>

            <AdminNavbar user_details={userDetails} />
            <div className='add-new-student'>
                <div>
                    <div className="header">
                        <p>Add New Student</p>
                    </div>
                    <div className='inputs'>
                        <form onSubmit={handleSubmit}>
                            <label><p>Roll No</p>:<span>
                                <input
                                    type="text"
                                    value={rollNo}
                                    onChange={(e) => setRollNo(e.target.value)}
                                    required
                                />
                            </span></label>

                            <label><p>Name</p>:<span>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </span></label>

                            <label><p>Department</p>:<span>
                                <input
                                    type="text"
                                    value={department}
                                    onChange={(e) => setDepartment(e.target.value)}
                                    required
                                />
                            </span></label>

                            <label><p>Joining Year</p>:<span>
                                <input
                                    type="text"
                                    value={joiningYear}
                                    onChange={(e) => setJoiningYear(e.target.value)}
                                    required
                                />
                            </span></label>

                            <label><p>Blood Group</p>:<span>
                                <input
                                    type="text"
                                    value={bloodGroup}
                                    onChange={(e) => setBloodGroup(e.target.value)}
                                    required
                                />
                            </span></label>

                            <label><p>Semester</p>:<span>
                                <input
                                    type="number"
                                    value={semester}
                                    onChange={(e) => setSemester(e.target.value)}
                                    required
                                />
                            </span></label>

                            <label><p>Contact No</p>:<span>
                                <input
                                    type="text"
                                    value={contactNumber}
                                    onChange={(e) => setContactNumber(e.target.value)}
                                    required
                                />
                            </span></label>

                            <label><p>Address</p>:<span>
                                <textarea
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    required
                                />
                            </span></label>

                            <label><p>Gender</p>:<span>
                                <select value={gender} onChange={(e) => setGender(e.target.value)} required>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </span></label>

                            <label><p>Email</p>:<span>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </span></label>

                            <button type="submit">Add Student</button>
                        </form>
                        <ToastContainer position="top-right" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddNewStudent;