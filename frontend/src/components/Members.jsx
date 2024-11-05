import React from 'react'
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import AdminNavbar from './AdminNavbar'
import "../css/members-display-list.css";

const Members = () => {

  const [userDetails, setuserDetails] = useState(null);

  const location = useLocation();
  useEffect(() => {
    setuserDetails(location.state?.userDetails);
  }, []);

  const [students, setStudents] = useState([]);
  // let params = useParams();


  const { department, joiningYear } = useParams();

  console.log({ department }.department)
  console.log({ joiningYear }.joiningYear)

  useEffect(() => {
    const getStudents = async () => {
      let details = {
        department: { department }.department,
        joiningYear: { joiningYear }.joiningYear,
      };
      const response = await axios.get(
        "http://localhost:8000/api/getEachClassStudentsList/",
        { params: details }
      );

      setStudents(response.data.student_list);
      console.log('list is - ', response.data.student_list);
    };

    getStudents();
  }, []);

  return (
    <>
      <AdminNavbar user_details={userDetails} />
      <div className='members-list'>
        <div className="header">
          <p>Students of {department.toUpperCase()} {joiningYear} batch</p>
        </div>
        {/* <ul>
          {students.map((result, index) => (
            <li key={index}>
              <span>Roll No: {result.roll_no}</span><br />
              <span>Name: {result.name}</span><br />
              <span>Email: {result.email}</span><br />
              <span>Contact number: {result.contact_number}</span><br />
            </li>
          ))}
        </ul> */}
        <div className="list">
          <table>
            <thead>
              <tr>
                <th>ROLL NO</th>
                <th>NAME</th>
                <th>EMAIL</th>
              </tr>
            </thead>
            <tbody>
              {students.map((result, index) => (
                <tr key={index}>
                  <td>{result.roll_no}</td>
                  <td>{result.name}</td>
                  <td>{result.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )














  return (
    <div>Members</div>
  )
}

export default Members